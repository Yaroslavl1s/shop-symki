import React from "react";
import { Shop } from "./Shop";

const Menu = ({header, items}) => {
    return (
        <div className="shop">
            <div className="blur" />
            <div className="menu_content">
            <div className="menu__header">{header}</div> 
            <ul>
                {items.map(item => 
                    <li>
                        <a href={item.href}>{item.value}</a>
                        
                    </li>
                    )}
            </ul>
            </div>
        </div>
    );
};

export default Shop;