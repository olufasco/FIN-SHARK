import React from "react";
import "./Card.css";
import type { JSX } from "react";

interface Props {
  companyName: string;
  ticker: string;
  price: number;

};

const Card: React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className="card">
      <img
      src="https://images.unsplash.com/photo-1786341560349-9991b2a0620a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Image"
      />
      <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum iugfdhkldbsj .vkug,bfmjcdk yfdebmjdfuS
      </p>
    </div>
  )
}

export default Card
