

const Signup =()=>{

    return(
        <div>
            <section className="bg-gray-100 flex justify-center items-center min-h-screen">

<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md mt-4 mb-4">
  <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create an Account</h2>

  <form action="#" method="POST" encType="multipart/form-data">
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

   
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" required
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Profile Image</label>
      <input type="file" id="image" name="image" accept="image/*"
             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
    </div>

    
    <button type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
      Register
    </button>

    
    <p className="mt-4 text-center text-sm text-gray-600">
      Already have an account?
      <a href="/login" className="text-orange-500 hover:underline">Log in here</a>.
    </p>
  </form>
</div>

</section>
        </div>

    )
}
export default Signup;