import Swal from "sweetalert2";
import useClasses from "../../../../hooks/useClasses";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllClasses = () => {
  const  [classes, ,refetch] = useClasses()
  const axiosSecure = useAxiosSecure()

  const handelApproevd = async (item)=>{

       try {
            const response = await axiosSecure.patch(`/classes/${item._id}`, {
            });
              if (response.data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: `${item?.title} is approved Now!`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                console.error("Error updating the second collection.");
              }
           
          } catch (error) {
            console.error("Error updating documents:", error);
          }
      } 

      const handelReject = async (item)=>{

        try {
          const response = await axiosSecure.patch(`/classes/rejected/${item._id}`, {
          });
            if (response.data.modifiedCount > 0) {
              refetch()
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${item?.title} is rejected Now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              console.error("Error updating the second collection.");
            }
         
        } catch (error) {
          console.error("Error updating documents:", error);
        }


      
       } 

      
    
    return (
     <div>
     <h1 className="text-center font-bold mt-3 text-2xl"> Total Request Class: {classes.length}</h1>

     <div className="-m-1.5 mt-5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border px-4 rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                      >
                       Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                      >
                        Short description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  
                  {
                    classes.map(item=>  <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><img  className="inline-block  h-8 w-8 rounded-full" src={item?.image} alt="Image Description"></img></td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {item?.description.slice(0, 30)}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          <div className="flex gap-3">
                         { item?.status === 'approved'|| item?.status === 'rejected' ? <button disabled onClick={()=>handelApproevd(item)} className="btn p-1 rounded bg-green-300 text-white">Approved</button>:
                          <button onClick={()=>handelApproevd(item)} className="btn p-1 rounded bg-green-500 text-white">Approved</button>
                         }
                
                         { item?.status === 'approved'|| item?.status === 'rejected' ? <button disabled  className="btn p-1 bg-red-300 text-white rounded ">Reject</button>:
                          <button onClick={()=>handelReject(item)}  className="btn p-1 bg-red-500 text-white rounded ">Reject</button>
                         } 
                        
                          </div>
                        </td>
                 </tr>)
                  }

                  </tbody>
                </table>
              </div>
            </div>
          </div>

     </div>
    );
};

export default AllClasses;