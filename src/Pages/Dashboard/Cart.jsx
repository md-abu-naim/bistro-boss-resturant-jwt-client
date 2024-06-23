import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import SectionTItle from "../Shared/SectionTItle";
import useAxios from "../../Hooks/useAxios";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxios()

    const handleDelete = id => {
        axiosSecure.delete(`/carts/${id}`)
        .then(res => {console.log(res.data)
            if(res.data.deletedCount){
                alert('delete hoi geche')
                refetch()
            }
        })
    }

    return (
        <div>
            <SectionTItle subHeading='My Cart' heading='wanna add more?' />
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td><img src={item.image} className="w-20" alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600" /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;