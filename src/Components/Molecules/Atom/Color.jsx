import React from "react";
import Red from '../../../assets/Color-red.png';
import Purple from '../../../assets/Color-purple.png';
import Black from '../../../assets/Color-black.png';
import Ashes from '../../../assets/Color-ashes.png'

const Color = ({productItem}) => {
    return (
        <div className="color">
            <h4>Choose Color</h4>
            <div>
                <img src={Red} alt="red" className="red" />
                <img src={Purple} alt="purple" className="purple" />
                <img src={Black} alt="black" className="black" />
                <img src={Ashes} alt="ashes" className="ashes" />
            </div>
            <p className="item-price">{productItem.price}</p>
        </div>
    )
}

export default Color;