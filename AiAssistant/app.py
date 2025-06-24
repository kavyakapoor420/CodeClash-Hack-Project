import streamlit as st
import asyncio
import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from browser_use import Agent, Browser, BrowserContextConfig, BrowserConfig
from browser_use.browser.browser import BrowserContext
import tempfile
from PIL import Image
import base64
import time

# Disable telemetry
os.environ["ANONYMIZED_TELEMETRY"] = "false"

# Page configuration
st.set_page_config(
    page_title="Gemini Browser Agent",
    page_icon="🌐",
    layout="wide",
)

# Custom CSS
st.markdown("""
<style>
    .main-header {
        font-size: 2.5rem;
        color: #4285F4;
        margin-bottom: 1rem;
    }
    .sub-header {
        font-size: 1.5rem;
        color: #34A853;
        margin-bottom: 2rem;
    }
    .stButton>button {
        background-color: #4285F4;
        color: white;
        font-weight: bold;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
    }
    .stButton>button:hover {
        background-color: #3367D6;
    }
    .result-container {
        background-color: #F8F9FA;
        padding: 1.5rem;
        border-radius: 10px;
        border: 1px solid #DADCE0;
        margin-top: 2rem;
    }
    .gif-container {
        text-align: center;
        margin: 1rem 0;
    }
    .api-key-input {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>
""", unsafe_allow_html=True)

# Initialize session state
if 'results' not in st.session_state:
    st.session_state.results = None
if 'gif_path' not in st.session_state:
    st.session_state.gif_path = None
if 'running' not in st.session_state:
    st.session_state.running = False
if 'api_key' not in st.session_state:
    st.session_state.api_key = ""

# Function to load API key
def load_api_key():
    load_dotenv()
    # First try to get from session state (user input)
    if st.session_state.api_key:
        return st.session_state.api_key
    # Then try to get from environment variable
    # api_key = os.getenv("GEMINI_API_KEY", "")
    api_key='AIzaSyBK6b1hH9D55uL1BX5e_QacjBXMI4sSvCs'
    return api_key

# Setup the browser and context
async def setup_browser(headless=True):
    browser = Browser(
        config=BrowserConfig(
            headless=headless,
        ),
    )
    context_config = BrowserContextConfig(
        wait_for_network_idle_page_load_time=5.0,
        highlight_elements=True,
        save_recording_path="./recordings",
    )
    return browser, BrowserContext(browser=browser, config=context_config)

# Run the agent loop
async def agent_loop(llm, browser_context, query, initial_url=None):
    # Set up initial actions if URL is provided
    initial_actions = None
    if initial_url:
        initial_actions = [
            {"open_tab": {"url": initial_url}},
        ]

    agent = Agent(
        task=query,
        llm=llm,
        browser_context=browser_context,
        use_vision=True,
        generate_gif=True,
        initial_actions=initial_actions,
    )

    # Start Agent and browser
    result = await agent.run()
    
    # Get the path to the GIF if it was generated
    gif_path = None
    try:
        if hasattr(agent, 'gif_path') and agent.gif_path and os.path.exists(agent.gif_path):
            gif_path = agent.gif_path
    except Exception as e:
        st.warning(f"Could not access GIF: {str(e)}")

    return result.final_result() if result else None, gif_path

# Function to encode GIF to base64 for HTML display
def get_gif_html(path):
    try:
        with open(path, "rb") as file:
            encoded = base64.b64encode(file.read()).decode()
        return f'<img src="data:image/gif;base64,{encoded}" alt="Browser Recording" style="max-width:100%;">'
    except Exception as e:
        return f"<p>Error loading GIF: {str(e)}</p>"

# Create recordings directory if it doesn't exist
if not os.path.exists("./recordings"):
    os.makedirs("./recordings")

# Function to run the agent
def run_agent(query, url, model="gemini-2.5-flash-preview-04-17"):
    st.session_state.running = True
    
    # We need to run the async function
    api_key = load_api_key()
    
    if not api_key:
        st.session_state.results = "Error: No API key provided. Please enter your Gemini API key."
        st.session_state.running = False
        return
    
    # Initialize the Gemini model
    try:
        llm = ChatGoogleGenerativeAI(
            model=model,
            api_key=api_key
        )
    except Exception as e:
        st.session_state.results = f"Error initializing Gemini model: {str(e)}"
        st.session_state.running = False
        return
    
    # Run the loop
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    try:
        browser, context = loop.run_until_complete(setup_browser(headless=True))
        st.session_state.results = "Browser started, running query..."
        st.experimental_rerun()  # Force a rerun to update the UI
        
        result, gif_path = loop.run_until_complete(agent_loop(llm, context, query, initial_url=url))
        loop.run_until_complete(browser.close())
        
        st.session_state.results = result
        st.session_state.gif_path = gif_path
    except Exception as e:
        st.session_state.results = f"Error: {str(e)}"
    finally:
        loop.close()
        st.session_state.running = False

# Main App
st.markdown('<h1 class="main-header">Gemini Browser Agent</h1>', unsafe_allow_html=True)
st.markdown('<p class="sub-header">Ask Gemini to browse the web for you</p>', unsafe_allow_html=True)

# API Key input
with st.expander("API Key Settings", expanded=False):
    st.markdown('<div class="api-key-input">', unsafe_allow_html=True)
    api_key_input = st.text_input(
        "Enter your Gemini API Key:",
        type="password",
        value=st.session_state.api_key,
        help="Your API key will not be stored permanently."
    )
    st.session_state.api_key = api_key_input
    
    st.markdown("""
    You can get a Gemini API key from the [Google AI Studio](https://makersuite.google.com/app/apikey).
    Or set the GEMINI_API_KEY environment variable in a .env file.
    """)
    st.markdown('</div>', unsafe_allow_html=True)

# Model selection
model_options = [
    "gemini-2.5-flash-preview-04-17",
    "gemini-1.5-flash",
    "gemini-1.5-pro"
]
selected_model = st.selectbox("Select Gemini Model:", model_options)

# Input form
with st.form(key="query_form"):
    col1, col2 = st.columns([3, 1])
    
    with col1:
        query = st.text_area(
            "Enter your prompt:", 
            height=100, 
            placeholder="What is Gemini 2.5 Flash? Summarize its features and capabilities."
        )
    
    with col2:
        url = st.text_input(
            "Starting URL (optional):", 
            placeholder="https://www.google.com"
        )
    
    submit_button = st.form_submit_button(label="🚀 Run Browser Agent")
    
    if submit_button:
        if not query:
            st.error("Please enter a prompt.")
        else:
            run_agent(query, url if url else None, model=selected_model)

# Display running status
if st.session_state.running:
    with st.spinner("Gemini is browsing the web for you... This might take a minute."):
        # Add a progress placeholder to show activity
        progress_placeholder = st.empty()
        
# Display results
if st.session_state.results:
    st.markdown('<div class="result-container">', unsafe_allow_html=True)
    st.markdown("### 📊 Search Results")
    st.markdown("---")
    st.markdown(st.session_state.results)
    st.markdown("</div>", unsafe_allow_html=True)
    
    # Display the GIF if available
    if st.session_state.gif_path and os.path.exists(st.session_state.gif_path):
        st.markdown('<div class="gif-container">', unsafe_allow_html=True)
        st.markdown("### 🎬 Browser Recording")
        st.markdown("---")
        st.markdown(get_gif_html(st.session_state.gif_path), unsafe_allow_html=True)
        st.markdown("</div>", unsafe_allow_html=True)

# Footer
st.markdown("---")
st.markdown("Powered by Gemini 2.5 Flash - Using LangChain and browser_use")