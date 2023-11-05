import './Button.sass';
import { Link } from 'react-router-dom'



export const Button = () => {
    return(
        <div className="shpo-the-collection">
            <Link to="shop-all">
                <a className="ButtonShop"href='src/components/page/Shop'>Shop the collection</a>
            </Link>
        </div>
    )
}

