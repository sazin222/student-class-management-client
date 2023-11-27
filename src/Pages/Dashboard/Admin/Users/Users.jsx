import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Users = () => {

const axiosSecure = useAxiosSecure()
const {data: users =[], }= useQuery({
    queryKey:['users'],
    queryFn: async ()=>{
      const res = await axiosSecure.get('/users')
      return res.data
    }
})
    return (
        <div>
            <h1 className="text-2xl mt-4 text-center"> Total Users: {users.length}</h1>
    <div>
    <div className="flex mt-4 justify-center items-center ">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"> User image</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"> User name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">user email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            
            {
               users.map(user=>  <tr
               key={user._id}
               >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><img  className="inline-block  h-8 w-8 rounded-full" src={user?.photo} alt="Image Description"></img></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user?.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user?.email}</td>
             
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  <div className="flex gap-3">
            { user?.role === 'admin' ? <button disabled className="btn p-1 rounded  bg-green-200 text-white">Make Admin</button> : <button className="btn p-1 rounded  bg-green-500 text-white">Make Admin</button>}
                
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
    </div>
        </div>
    );
};

export default Users;