import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
const Login =()=>{

  const [input,setInput]=useState({
    email:"",
    password:"",
  });
  const handleLogin=(e)=>{
    e.preventDefault();
    const loggedUser= JSON.parse(localStorage.getItem("user"));
    if(input.email === loggedUser.email &&
      input.password === loggedUser.password
    ){
      localStorage.setItem("loggedin",true);
      Navigate("/");

    }else{
      alert("Wrong Email or password");
    }
    
  };
    
    return(
        
        <div>
             <div className="min-h-screen flex flex-col items-center justify-center">
   
   <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

     
     <h2 className="text-2xl font-semibold text-gray-800 text-center">Login Your Account</h2>
     <p className="text-gray-600 text-sm text-center mt-2">Access your personalized travel journal</p>

     
     <form onSubmit={handleLogin} className="mt-6">

       
       <div className="mb-4">
         <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
         <input 
         name="email"
         value={input.email}
         onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
         type="email" 
         id="email" 
         placeholder="Enter your email" 
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></input>
       </div>

       
       <div className="mb-6">
         <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
         <input 
         name="password"
         value={input.password}
         onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
         type="password" 
         id="password" 
         placeholder="Enter your password" 
         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></input>
       </div>

       
       <div className="mb-4">
         <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-200">
           Login
         </button>
       </div>

       
       <div className="text-center">
         <a href="#" className="text-sm text-orange-500 hover:underline">Forgot your password?</a>
       </div>
     </form>

    
     <div className="my-6 border-t border-gray-300"></div>

      <div className="text-center">
       <p className="text-gray-600 text-sm">Don't have an account?</p>
       <Link to="/signup" className="text-orange-500 font-medium hover:underline">Create a new account</Link>
     </div>

   </div>
 </div>


        </div>

        
    )
}

export default Login;
