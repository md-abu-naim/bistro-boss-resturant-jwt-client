import { Helmet } from 'react-helmet-async';
import menuImg from '../../assets/menu/banner3.jpg'
import Cover from '../Shared/Cover';
import useMenu from '../../Hooks/useMenu';
import SectionTItle from '../Shared/SectionTItle';
import MenuCategory from './MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>BISTRO || MENU</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={'Our menu'} />
            <SectionTItle subHeading="Don't miss" heading='todays oofer'></SectionTItle>
            {/* offered menu items */}
            <MenuCategory items={offered} />

            {/* dessert items */}
            <MenuCategory items={desserts} img={dessertImg} title={'dessert'} />

            {/* pizza items */}
            <MenuCategory items={pizza} img={pizzaImg} title={'Pizza'} />

            {/* salad items */}
            <MenuCategory items={salad} img={saladImg} title={'Salad'} />

            {/* Soup items */}
            <MenuCategory items={soup} img={soupImg} title={'Soup'} />

        </div>
    );
};

export default Menu;