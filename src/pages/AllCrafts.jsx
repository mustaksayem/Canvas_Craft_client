import { Link, useLoaderData } from "react-router-dom";


const AllCrafts = () => {
  
const carfts = useLoaderData();



    return (
        <div className="bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-gray-200" >

<div className='overflow-x-auto'>
        <table className='table-auto w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200 dark:text-green-600 '>
              <th className='px-4 py-2 text-black'>Item Name</th>
              <th className='px-4 py-2 text-black'>Processing Time</th>
              
              <th className='px-4 py-2 text-black'>Price</th>
              <th className='px-4 py-2 text-black'>View Details </th>
            </tr>
          </thead>
          <tbody>
            {carfts.map((craft, index) => (
             <tr
             key={index}
             className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
             <td className='border text-black px-4 py-2'>{craft.item_name}</td>
             <td className='border text-black px-4 py-2'>{craft.processing_time}</td>
             <td className='border text-black px-4 py-2'>{craft.price}</td>
             <td className='border text-black px-4 py-2'>
               <Link to={`/carftsDetails/${craft._id}`}>
                 <p className='btn '>View Details</p>
               </Link>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
   
   </div>
    );
};

export default AllCrafts;