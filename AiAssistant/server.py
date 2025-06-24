import os
import google.generativeai as genai
import speech_recognition as sr
import pyttsx3

GENAI_API_KEY='AIzaSyCPDFqKQha-uYDyQUT_fmvkrzDjHEvZhoE'

# Step 1: Configure Gemini API
def configure_gemini(api_key):
    genai.configure(api_key=api_key)

# Step 2: Initialize Text-to-Speech Engine
def initialize_tts():
    engine = pyttsx3.init()
    return engine

# Step 3: Capture Voice Input
def capture_voice_input(wake_word="jarvis"):
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)
    try:
        text = recognizer.recognize_google(audio).lower()
        print(f"You said: {text}")
        if wake_word and text.startswith(wake_word):
            return text.replace(wake_word, "").strip()
        return text
    except sr.UnknownValueError:
        print("Sorry, I did not understand that.")
        return None
    except sr.RequestError:
        print("Sorry, my speech service is down.")
        return None

# Step 4: Get Response from Gemini API
def get_gemini_response(prompt):
    model = genai.GenerativeModel("gemini-1.0-pro")
    full_prompt = f"You are Jarvis, a helpful AI assistant. Respond in a conversational manner: {prompt}"
    response = model.generate_content(full_prompt)

    # Handle response properly
    if hasattr(response, 'text'):
        return response.text
    elif hasattr(response, 'candidates') and response.candidates:
        return response.candidates[0].content.parts[0].text
    return "I couldn't generate a response. Please try again."

# Step 5: Speak the Response
def speak_text(engine, text):
    engine.say(text)
    engine.runAndWait()

# Main Function
def main():
    if not GENAI_API_KEY:
        print("Error: Gemini API key is missing! Set it in .env file.")
        return

    configure_gemini(GENAI_API_KEY)
    engine = initialize_tts()

    greeting = "Hello, I am kavya. How can I assist you today?"
    print(greeting)
    speak_text(engine, greeting)

    while True:
        user_input = capture_voice_input("jarvis")
        if user_input:
            if user_input.lower() in ["exit", "quit", "stop"]:
                print("Goodbye!")
                break

            response = get_gemini_response(user_input)
            print(f"Jarvis says: {response}")
            speak_text(engine, response)

if __name__ == "__main__":
     main()
 