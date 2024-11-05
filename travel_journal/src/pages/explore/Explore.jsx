

const Explore =()=>{

    const profilepic ="https://i.ibb.co.com/LkwS8kW/img-3.webp";
    const postpic ="https://i.ibb.co.com/RzYTq7b/img-7.webp";
    return(
        <div>
            <div className="container mx-auto mt-10 px-4">
       
       <div className="relative bg-white shadow-md rounded-lg p-6">
           
           
           <div className="absolute top-4 left-4">
               <img src={profilepic} 
                    alt="User Profile Picture" 
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md"></img>
           </div>

           
           <div className="flex justify-between items-center mb-4">
               
               <div className="ml-16"> 
                   <h2 className="text-2xl font-bold text-gray-800">It's a Big World Out There, Go Explore!</h2>
                   <p className="text-gray-600 text-sm mt-2">Conveniently customize package web services for leveraging opportunities without continuously aggregating fiction or complex dependencies. Start your next journey now.</p>
               </div>

               
               <img src={postpic} 
                    alt="Travel Image" className="w-40 h-40 rounded-lg object-cover"></img>
           </div>

          
           <div className="flex gap-4 mb-4">
               
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                   Make Friend
               </button>

               
               <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                   Read More
               </button>
           </div>

           
           <div className="flex justify-between items-center border-t pt-4 mt-4">
               <div className="flex items-center space-x-6">
                   
                   <button className="flex items-center text-gray-600 hover:text-blue-500">
                       <i data-feather="thumbs-up" className="w-5 h-5"></i>
                       <span className="ml-1">Like</span>
                   </button>

                   
                   <button className="flex items-center text-gray-600 hover:text-blue-500">
                       <i data-feather="message-circle" className="w-5 h-5"></i>
                       <span className="ml-1">Comment</span>
                   </button>

                   
                   <button className="flex items-center text-gray-600 hover:text-blue-500">
                       <i data-feather="share" className="w-5 h-5"></i>
                       <span className="ml-1">Share</span>
                   </button>
               </div>
           </div>
       </div>
   </div>

   <script>
   
       feather.replace();
   </script>
        </div>
    )
}

export default Explore;