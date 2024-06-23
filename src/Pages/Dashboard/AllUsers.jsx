import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { FaTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const AllUsers = () => {
    const axiosSecure = useAxios()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data

        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    alert(`${user.name} is an admin now`)
                    refetch()
                }
            })
    }

    const handleDeleteUser = (user) => {
        axiosSecure.delete(`/users/${user._id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('User is delete')
                    refetch()
                }
            })
    }

    return (
        <div>
            <div className="flex justify-evenly py-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length} </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? "Admin" :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-500 btn-lg"><FaUsers className="text-white text-xl" /></button>
                                    }
                                </td>
                                <td><button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-lg"><FaTrashAlt className="bg-red-600" /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;