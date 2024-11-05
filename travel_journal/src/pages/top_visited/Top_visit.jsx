

const Top_visit =()=>{
  
    const imglondon ="https://i.ibb.co.com/kSMC49L/london-1-7.webp";
    const imgnewyouk ="https://i.ibb.co.com/6WWrgdJ/london-1-2.webp";
    const imgparis ="https://i.ibb.co.com/HdV7Hkv/london-1-5.webp";
    const imgsydney ="https://i.ibb.co.com/MMzkWw6/london-1-3.webp";

    return(
        <div>
            <div className="container mx-auto px-4 py-8">
   
   <div className="text-center mb-8">
     <h2 className="text-2xl font-semibold text-gray-800">Popular Locations</h2>
     <p className="text-orange-500 font-medium italic">Start Traveling Today</p>
   </div>

  
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
     
    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={imgnewyouk} alt="New York" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">New York</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={imgparis} alt="London" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">Paris</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={imgsydney} alt="Paris" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">Sydney</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

    
     <div className="relative group overflow-hidden rounded-lg shadow-lg">
       <img src={imglondon} alt="Sydney" className="w-full h-64 object-cover"></img>
       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
         <h3 className="text-lg font-semibold">London</h3>
         <p className="text-sm"><button>More..</button></p>
       </div>
     </div>

   </div>
 </div>


 
        </div>
    )
}

export default Top_visit;