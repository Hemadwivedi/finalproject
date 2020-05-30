import React, {Component} from 'react';
import './Checkout.css';

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            price: "",
            description: "",
            jpegImg: ""
        };
    }

    render(){
      return (
        <div className="app-container">
          <div className="row">
            <div className="col">
              <Item name={this.props.title} price={this.props.price} img={this.props.jpegImg}/>
            </div>
            <div className="col no-gutters">
              <Checkout />
            </div>
          </div>
         </div>
      )
    }
  }
  
  const Item = (props) => (
    <div className="item-container">
      <div className="item-image">
        <img src={props.img}/>
        <div className="item-details">
          <h3 className="item-name"> {props.name} </h3>
          <h2 className="item-price"> {props.price} </h2>
        </div>
      </div>
    </div>
  );
  
  const Checkout = (props) => (
   <div className="checkout">
      <div className="checkout-container">
       <h3 className="heading-3">Credit card checkout</h3>
       <Input label="Cardholder's Name" type="text" name="name" />
       <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
        <div className="row">
          <div className="col">
            <Input label="Expiration Date" type="month" name="exp_date" />
          </div>
          <div className="col">
            <Input label="CVV" type="number" name="cvv" />
          </div>
        </div>
        <Button text="Place order" />
      </div>
   </div>
  );
  
  const Input = (props) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} />
        <img src={props.imgSrc}/>
      </div>
    </div>
  );
  
  const Button = (props) => (
    <button className="checkout-btn" type="button">{props.text}</button>
  );
  



export default Checkout;