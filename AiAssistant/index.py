import os
import speech_recognition as sr
import pyttsx3
from dotenv import load_dotenv
import threading
import time


load_dotenv()


#GENAI_API_KEY = 'AIzaSyCPDFqKQha-uYDyQUT_fmvkrzDjHEvZhoE'
GENAI_API_KEY='AIzaSyBK6b1hH9D55uL1BX5e_QacjBXMI4sSvCs'


try:
    import google.generativeai as genai
except ImportError:
    print("Error: google.generativeai library not found. Please install it correctly.")
    exit()


def configure_gemini(api_key):
    genai.configure(api_key=api_key)


def initialize_tts():
    engine = pyttsx3.init()
    return engine


def capture_voice_input(recognizer, source, wake_word="jarvis"):
    try:
        print("Listening...")
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        audio = recognizer.listen(source, phrase_time_limit=10)  # Increase timeout
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
    
def get_gemini_response(prompt):
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")  # Try a different model
        full_prompt = f"You are Jarvis, a helpful AI assistant. Respond in a conversational manner: {prompt}"
        response = model.generate_content(full_prompt)

     
        if hasattr(response, 'text'):
            return response.text
        elif hasattr(response, 'candidates') and response.candidates:
            return response.candidates[0].content.parts[0].text
        return "I couldn't generate a response. Please try again."
    except Exception as e:
        print(f"Error generating response: {e}")
        return "Failed to generate a response."


def speak_text(engine, text):
    engine.say(text)
    engine.runAndWait()


def listen_and_respond(engine, recognizer, source):
    while True:
        user_input = capture_voice_input(recognizer, source)
        if user_input:
            if user_input.lower() in ["exit", "quit", "stop"]:
                print("Goodbye!")
                speak_text(engine, "Goodbye!")
                break

            response = get_gemini_response(user_input)
            print(f"kavya says: {response}")
            speak_text(engine, response)
            speak_text(engine, "How can I assist you further?")  


def main():
    if not GENAI_API_KEY:
        print("Error: Gemini API key is missing! Set it in .env file.")
        return

    configure_gemini(GENAI_API_KEY)
    engine = initialize_tts()

    greeting = "Hello, I am Kavya. How can I assist you today?"
    print(greeting)
    speak_text(engine, greeting)
    speak_text(engine, "Please say 'kavya' followed by your command.")  # Prompt for first input

    recognizer = sr.Recognizer()
    recognizer.energy_threshold = 4000  # Adjust this value based on your environment
    with sr.Microphone() as source:
        # Start listening in a separate thread
        listen_thread = threading.Thread(target=listen_and_respond, args=(engine, recognizer, source))
        listen_thread.daemon = True  # Set as daemon to exit when main thread exits
        listen_thread.start()
        while True:
            time.sleep(1)  # Keep main thread alive

if __name__ == "__main__":
    main()