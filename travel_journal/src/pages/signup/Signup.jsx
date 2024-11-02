import { useState } from "react";
import { useNavigate,Link} from "react-router-dom";

const Signup =()=>{

  const navigate = useNavigate();
  const [input,setInput]=useState({
    name:"",
    email:"",
    password:"",
    image:"",

  });
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login")
  };

    return(
        <div>
            <section className="bg-gray-100 flex justify-center items-center min-h-screen">

<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md mt-4 mb-4">
  <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create an Account</h2>

  <form onSubmit={handleSubmit} action="#" method="POST" encType="multipart/form-data">
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">User Name</label>
      <input 
       name="name"
       value={input.name}
       onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}

       type="text"
       id="firstName"  
       required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input 
      name="email"
      value={input.email}
      onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
      type="email" 
      id="email"  
      required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
      <input 
      name="password"
      value={input.password}
      onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
      type="password" 
      id="password" 
      required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
      <input
       type="password"
       id="confirmPassword" 
       name="confirmPassword" 
       required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Profile Image</label>
      <input 
      name="image"
      value={input.image}
      onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
      type="file" 
      id="image"  
      accept="image/*"
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <button type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
      Register
    </button>

    
    <p className="mt-4 text-center text-sm text-gray-600">
      Already have an account?
      <Link to="/login" className="text-orange-500 hover:underline">Log in here</Link>
    </p>
  </form>
</div>

</section>
        </div>

    )
}
export default Signup;