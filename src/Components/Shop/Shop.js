import './Shop.sass';
import { Link} from 'react-router-dom'

export const Shop = () => {
    return ( 
        <a href="https://www.example.com">
        <img src="image/sumka5.jpg" alt="Description" />
        

        <div className='menu'>
            <ul className='shop_menu'>
        <li>
     <Link to="home">
         <a href='src/components/page/Home'>All Products</a>
     </Link>
     </li>

     <li>
     <Link to="home">
         <a href='src/components/page/Home'>Bags</a>
     </Link>
     </li>

     <li>
     <Link to="home">
         <a href='src/components/page/Home'>Best Sellers</a>
     </Link>
     </li>

     <li>
     <Link to="home">
         <a href='src/components/page/Home'>Leather Belts</a>
     </Link>
     </li>

     <li>
     <Link to="home">
         <a href='src/components/page/Home'>Mini Leather Goods</a>
     </Link>
     </li>

     <li>
     <Link to="home">
         <a href='src/components/page/Home'>Phone Cases</a>
     </Link>
     </li>
     </ul>
        </div>
    </a>
    )
}