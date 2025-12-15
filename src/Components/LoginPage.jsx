

// const LoginPage = () => {
//   return (
//     <div className="absolute inset-0 bg-black opacity-20">
        
//         <h2 className='text-2xl font-bold mb-6 text-black'>LOGIN</h2>

//         <input type="text"
//         placeholder="Email or Username"
//         className="w-full mb-4 rounded-lg bg-white/20 px-4 py-2 text-sm outline-none placeholder:text-gray-300" />

//         <input type="text"
//         placeholder='Password' 
//         className='w-full mb-2 rounded-lg bg-white/20 px-4 py-2 text-sm outline-none placeholder:text-gray-300'/>

//         <div className="text-right text-xs text-gray-300 mb-6 cursor-pointer">
//             Forgot Password?
//         </div>

//         <div className="text-center text-sm text-gray-300 mb-4">OR</div>

//         <div className="flex justify-center gap-6 mb-6">
//             <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
//                 <img src="https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg" alt="google" className='w-6 h-6' />
//             </div>
//             <div  className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
//                 <img src="https://img.freepik.com/premium-psd/facebook-logo-blue-circle_705838-12823.jpg?semt=ais_hybrid&w=740&q=80" alt="facebook" className="w-6 h-6" />
//             </div>
//             <div  className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
//                 <img src="https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE-1000-80.jpg" alt="twitter" className='w-6 h-6' />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default LoginPage


import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-700 relative overflow-hidden">
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Glassmorphism Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">
        <h2 className="text-4xl font-bold text-white text-center mb-8">LOGIN</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-white/40 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-white/40 focus:border-transparent transition"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-white/80 hover:text-white transition underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-4 bg-white text-purple-700 font-bold text-lg rounded-xl hover:bg-white/90 transform hover:scale-105 transition shadow-lg"
          >
            Login
          </button>
        </form>

        <div className="mt-8">
          <div className="relative text-center mb-6">
            <span className="px-4 bg-transparent text-white/70 text-sm z-10 relative">OR</span>
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/40"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-6">
            <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition">
              <img
                src="https://p7.hiclipart.com/preview/168/533/94/google-logo-google-home-google-now-google-plus-thumbnail.jpg"
                alt="Google"
                className="w-8 h-8"
              />
            </button>

            <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition">
              <img
                src="https://cdn.freebiesupply.com/logos/thumbs/2x/facebook-logo-2019-thumb.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </button>

            <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition">
              <img
                src="https://pimpmytype.com/wp-content/uploads/2023/08/twitter-x-app-icon-1400x788.png"
                alt="X (Twitter)"
                className="w-8 h-8 object-contain"
              />
            </button>
          </div>
        </div>

        <p className="text-center text-white/70 text-sm mt-8">
          Don't have an account?{' '}
          <a href="#" className="text-white font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;