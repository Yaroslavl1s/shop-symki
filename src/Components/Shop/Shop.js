import './Shop.sass';
import { Link} from 'react-router-dom'
import sumka5 from  './../../image/symka5.jpg'

export const Shop = () => {
    return ( 
        <a href="https://www.example.com">
        <img src={sumka5}alt="sumka" />
        

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
         <a href='src/components/page/Home'>Basket</a>
     </Link>
     </li>
     </ul>
        </div>
    </a>
    )
}