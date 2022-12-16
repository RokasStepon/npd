import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.scss';

function ThankYou() {
  let navigate = useNavigate();
  return (
    <>
    <div className='wrapper'>
    <div className="ThankYou">
      <img onClick={()=>navigate(-1)} className="back" src="/images/backs.png" />
      <div className="content">
        <img className='thnx' src="/images/thnx.png" />
        <hr />
        <h1>Order Confirmed!</h1>
        <p>Your order has been confirmed, it will be delivered to your address <b>Hogwarts School of Witchcraft and Wizardry, Scottish Highlands, United Kingdom</b> between <b>Dec. 20th - 22nd</b>.</p>
      </div>
    </div>
    </div>
    <div className='desktop'>
      <img style={{margin:"0px auto", display:"flex"}} src="https://media1.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=ecf05e47oiiv9fqsp3rj44thb4jn9w2zvqw2gdtrqkz3zn1b&rid=giphy.gif&ct=g" />
    </div>
    </>
  );
}

export default ThankYou;
