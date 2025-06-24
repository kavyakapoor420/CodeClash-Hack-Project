// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Cube from "./Components/Common/Testing.tsx";

// import "./App.css";
// import NavBar from "./Components/Common/Navbar.tsx";
// import LandingPage from './Pages/LandingPage.tsx'
// import { HeroScrollDemo } from "./ScrollAni/HeroScrollDemo.tsx";

// function App() {
//   return (
//     <div className="bg-black">
     
//       {/* <Chatbot/> */}
//       <BrowserRouter>
//       <NavBar/>
//       <LandingPage/>
//       <HeroScrollDemo/>
//           <Routes>
//             {/* <Route path="/" element={<LandingPage />} /> */}
//           </Routes> 
//       {/* <Footer/> */}
//      </BrowserRouter>
//     </div>
    
//   );
// }

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Features from './Pages/Features';
import Premium from './Pages/Premium';
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import Layout from './Components/Common/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutus" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <div className="text-center text-red-500 text-2xl mt-40 mb-36">
                404 Page Not Found
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

