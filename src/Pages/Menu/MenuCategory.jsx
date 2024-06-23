import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItems from "../Shared/MenuItems";

const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title &&  <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-12 my-16">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 mt-4 border-b-4 uppercase">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;