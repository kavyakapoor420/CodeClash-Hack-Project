// import NavBar from "../Components/Common/Navbar";


// const Index = () => {
//     return (
//       <div className="min-h-screen flex flex-col items-center bg-black overflow-hidden relative">
//         {/* Semi-circle gradient */}
//         <div className="semi-circle-gradient"></div>
        
//         <NavBar />
        
//         <div className="relative flex flex-col items-center justify-center px-6 py-36 text-center z-10 w-full mt-10">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20">
//             <div className="w-full h-full flex items-center justify-center">
//               <div className="h-6 w-6 rounded-full border-2 border-white flex items-center justify-center">
//                 <div className="h-3 w-3 rounded-full bg-gradient-to-tr from-green-400 to-white" />
//               </div>
//             </div>
//           </div>
          
//           <h2 className="text-xl md:text-2xl text-white mb-3">Spectrum AI</h2>
          
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight bg-gradient-to-b from-white to-green-400 bg-clip-text text-transparent mb-8">
//             From Idea To Perfect Prompt Instantly
//           </h1>
          
//           <p className="text-lg md:text-xl text-white/80 max-w-2xl">
//             Get the perfect AI prompt for any task — just type your 
//             idea, and we turn it into a powerful prompt.
//           </p>
          
          
//         </div>
//       </div>
//     );
//   };
  
  // export default Index;



// const LandingPage = () => {
  
//   return (
//     <div className="min-h-screen bg-black overflow-hidden relative flex flex-col items-center justify-center">
//       {/* Semi-circle gradient */}
//       <div className="semi-circle-gradient"></div>
      
//       {/* Logo and header */}
//       <div className="relative flex flex-col items-center justify-center px-6 text-center z-10 w-full">
//         <div className="flex items-center   justify-center mb-4">
//           <div className="h-12 w-12 rounded-full  border-2 border-white/20 flex items-center justify-center">
//             <div className="h-6 w-6 rounded-full  bg-gradient-to-tr from-green-800 via-grey-400 to-green-400" />
//           </div>
//           <h2 className="text-xl md:text-2xl  text-white ml-3">BetterWeb</h2>
//         </div>
        
//         <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold max-w-6xl leading-tight text-white mb-8 mt-20">
//           <span className="text-red-500">Empowers user</span>  with disablities <span className="text-green-400">to personalize and </span><br />
//           <span className="text-green-400">Enhance their Web Experience</span> <span className="text-red-500">Through AI</span>
//         </h1>
        
//         <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
//           Get the perfect AI prompt for any task — just type your 
//           idea, and we turn it into a powerful prompt.
//         </p>
        
//         {/* Waitlist form */}
        
//           <div className="flex items-center rounded-full bg-white/5 border border-white/10 p-1 pl-6">
//             <button className='mt-10 inline-block bg-[#00ffab] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#00ffaa] transition-all duration-300'>
//                 Install BetterWeb Chrome extension
//             </button>
//           </div>
        
//         {/* AI tools section */}
//         <div className="w-full max-w-4xl mx-auto mt-28">
//           <h2 className="text-white/60 text-center text-lg font-medium mb-6">Works With Your Favorite AI Tools</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// src/Pages/LandingPage.jsx

import HeroSection from '../Components/HeroSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default LandingPage;


