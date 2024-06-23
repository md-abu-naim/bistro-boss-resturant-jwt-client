import SectionTItle from "./Shared/SectionTItle";
import MenuItems from "./Shared/MenuItems";
import useMenu from "../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTItle subHeading={'Popular Items'} heading={'From Our menu'}></SectionTItle>
            <div className="grid md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;