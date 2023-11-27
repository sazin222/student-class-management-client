import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageTable from "./ManageTable";

const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure()
    const {data: requestTeacher=[], refetch }= useQuery({
        queryKey:['requestTeacher'],
        queryFn: async ()=>{
          const res = await axiosSecure.get('/requestTeacher')
          return res.data
        }
    })
    console.log(requestTeacher);
    return (
 <div className="mt-4">
            <h1 className="text-center text-2xl"> Total Request For Teacher: {requestTeacher.length}</h1>
    <div>
    <div className="flex mt-4 justify-center items-center ">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Image</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Experience</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"> Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Category</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            
            {
              requestTeacher.map(item=> <ManageTable
              key={item._id}
              item={item}
              refetch={refetch}
              >

              </ManageTable> )
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
 
    </div>

    </div>
    
    </div>
    );
};

export default TeacherRequest;