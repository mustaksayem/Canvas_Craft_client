import { useLoaderData } from "react-router-dom";


const AllCrafts = () => {
  
const carfts = useLoaderData();



    return (
        <div>

<tbody>
            {carfts.map((craft, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className='border px-4 py-2'>{craft.picture}</td>
                <td className='border px-4 py-2'>{craft.name}</td>
                <td className='border px-4 py-2'>{craft.rating}</td>
                <td className='border px-4 py-2'>
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>


      
   
   </div>
    );
};

export default AllCrafts;