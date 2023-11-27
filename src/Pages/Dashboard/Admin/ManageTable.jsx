/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageTable = ({item, refetch}) => {

    const axiosSecure = useAxiosSecure()
    const handelApproevd = async user=>{

        try {

            const response1 = await axiosSecure.patch(`/students/${user.email}`, {
            });
        
            if (response1.data.modifiedCount > 0) {
              
              const response2 = await axiosSecure.patch(`/requestTeacher/${user._id}`, {
               
              });
        
              if (response2.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: `${user.name} is Teacher Now!`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
        
                console.error("Error updating the second collection.");
              }
            } else {
              console.error("Error updating the first collection.");
            }
          } catch (error) {
            console.error("Error updating documents:", error);
          }
    }
    return (
    <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><img  className="inline-block  h-8 w-8 rounded-full" src={item?.image} alt="Image Description"></img></td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.experience}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.title}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          {item?.category}
        </td>
        <td className="px-6  py-4 whitespace-nowrap text-sm text-green-600 dark:text-gray-200">
          {item?.status}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
          <div className="flex gap-3">
         { item?.status === 'accepted'|| item?.status === 'rejected' ? <button disabled onClick={()=>handelApproevd(item)} className="btn p-1 rounded bg-green-300 text-white">Approved</button>:
          <button onClick={()=>handelApproevd(item)} className="btn p-1 rounded bg-green-500 text-white">Approved</button>
         }

         { item?.status === 'accepted'|| item?.status === 'rejected' ? <button disabled  className="btn p-1 bg-red-300 text-white rounded ">Reject</button>:
          <button  className="btn p-1 bg-red-500 text-white rounded ">Reject</button>
         }
        
            
        
          </div>
        </td>
 </tr>
    );
};

export default ManageTable;