import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState("");
  const fullText = "Create Your Account";
  const [PanId, setPanId] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setTypingText(fullText.substring(0, index + 1));
        index++;
        setTimeout(type, 60);
      }
    };
    type();
  }, []);

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePanIdChange = (event) => {
    setPanId(event.target.value);
  };

  const redirectToExperience = (event) => {
    event.preventDefault();
    if (PanId) {
      localStorage.setItem('PanId', PanId);
    }
    navigate('/investment-experience');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-gray-800 relative overflow-hidden mt-32">
      
      {/* Background Glow Animation */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-44 bg-blue-400 opacity-20 blur-3xl animate-pulse"></div>

      {/* Typing Effect Heading */}
      <h1 className="text-blue-700 text-4xl md:text-5xl font-extrabold text-center shadow-lg relative z-10 mb-6">
        <span>{typingText}</span>
        <span className="animate-blink">|</span>
      </h1>

      {/* Signup Box */}
      <div className="signup-box bg-white p-8 rounded-3xl shadow-xl w-96 relative transition transform hover:scale-105 hover:shadow-2xl duration-300 mb-16">
        <form onSubmit={redirectToExperience}>
          <label className="block text-gray-500 text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            value={fullName}
            onChange={handleNameChange}
            className="w-full p-3 mb-3 bg-blue-50 text-gray-700 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <label className="block text-gray-500 text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 mb-3 bg-blue-50 text-gray-700 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <label className="block text-gray-500 text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="w-full p-3 mb-3 bg-blue-50 text-gray-700 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <label className="block text-gray-500 text-sm mb-1">PAN ID</label>
          <input
            type="password"
            placeholder="Enter your PAN ID"
            required
            value={PanId}
            onChange={handlePanIdChange}
            className="w-full p-3 mb-3 bg-blue-50 text-gray-700 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <div className="flex items-center gap-x-2 text-gray-500 text-sm mb-4">
            <input type="checkbox" className="w-4 h-4" required />
            <span>
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition font-semibold mb-3 shadow"
          >
            Sign Up
          </button>
        </form>

        {/* Signup with Google */}
        <button
          onClick={redirectToExperience}
          className="w-full bg-white text-gray-700 flex items-center justify-center py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition shadow"
        >
          Sign Up with Google
        </button>

        <div className="text-center text-gray-500 mt-4 text-sm">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
