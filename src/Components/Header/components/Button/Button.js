import './Button.css';
import instagramblack from'../../../../image/instagramblack.png';



function Button() {
    return(
        <div className="desktop">
             <img className="vector" alt="Vector" src={instagramblack}/>
                <div className="shpo-the-collection">
                    <div className="overlap">
                        <button className="text-wrapper-9">Shop the collection</button>
                    </div>
                </div>
        </div>
    )
}

export default Button;