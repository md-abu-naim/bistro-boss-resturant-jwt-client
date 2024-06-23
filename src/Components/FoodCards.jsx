import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import axios from 'axios'
import useAxios from "../Hooks/useAxios";
import useCart from "../Hooks/useCart";

const FoodCards = ({item}) => {
    const {name, image, price, recipe, _id} = item || {}
    const {user} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxios()
    const [, refetch] = useCart()

    const handleAddToCart = food => {
        console.log(food);
        if(user?.email && user) {
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(data => {console.log(data.data)
                if(data.data.insertedId){
                    alert('data add hoiche')

                    // refetch cart to update the cart items count
                    refetch()
                }
            })
        }
        else{
            alert('kichu ekta')
            navigate('/login')
        }
    }
    return (
        <div className="card text-center bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute top-3 rounded-sm right-6 p-2 text-white">&{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={ handleAddToCart} className="btn btn-outline border-orange-400 bg-slate-100 border-0 mt-4 border-b-4 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCards;