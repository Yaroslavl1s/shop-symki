import './Home.scss'
import Carousel from './Slider/Carousel'

import { Link } from 'react-router-dom'




export const Home = () => {
    return (
     <div className="Selars">
          <h1>Most Popular</h1>
          <>
          <Carousel/>
          </>
          <Link to="/shop-all">
                <a className="Button"href='src/components/Home/ComponentsButton/Shop'>Shop the collection</a>
            </Link>
     </div>
    )
}

