import React from "react";

const Top_visit =()=>{
  
    const cardimg=[
        "./public/img/newyouk-1.jpg",
        "./public/img/london-1 .jpg",
        "./public/img/paris-1.jpg",
        "./public/img/sydney-1 .jpg",
        "./public/img/img1.jpg",
        "./public/img/img2.jpg",
        "./public/img/img3.jpg",
        "./public/img/img4.jpg",
        "./public/img/img5.jpg",
        "./public/img/img6.jpg",
        "./public/img/img7.jpg",
        "./public/img/img8.jpg",
        
      
      ];

    return(
        <div>
            <div className="container mx-auto px-4 py-8">
   
   <div className="text-center mb-8">
     <h2 className="text-2xl font-semibold text-gray-800">Popular Locations</h2>
     <p className="text-orange-500 font-medium italic">Start Traveling Today</p>
   </div>

  
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     
    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[0]} alt="New York" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">New York</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[1]} alt="London" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">London</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[2]} alt="Paris" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">Paris</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={cardimg[3]} alt="Sydney" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">Sydney</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

   </div>
 </div>


 
        </div>
    )
}

export default Top_visit;