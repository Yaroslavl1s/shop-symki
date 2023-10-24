import './LC.css';
import { Link} from 'react-router-dom'
import instagramblack from './../../../../../image/instagramblack.png'


export const LC = () => {
    return (
        <div className="desktopLC">
            <div className="div">
                <div className="group">
                <img className="vector" alt="Vector" src={instagramblack} />
                        <div className="text-wrapper-6">Log in</div>
                        <div className="text-wrapper-7">Cart (0)</div>
                </div>
            </div>
        </div>
    )
}

