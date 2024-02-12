
import React from "react";
import "./Card.css"
export interface CardProps{
    merchantName: string;
    item: string;
    charge: number;
    amount: number;
}
export const Card=({merchantName, item, charge, amount}:CardProps)=>{

    return (
        <div className={"card"}>
            <p className="order_all">Order Summary</p>
            <ul className="ul_order">
                <li className="li_order"><div>Merchant Name</div><div>{merchantName}</div></li>
                <li className="li_order"><div>{item}</div><div>{amount}</div></li>
                <li className="li_order"><div>Charges</div><div>{charge}</div></li>
            </ul>
        </div>

    );
}

