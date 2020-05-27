import React, { useContext } from 'react';
import BookContext from '../../utils/bookContext'

function Cart() {
    const context = useContext(BookContext);
    console.log('THIS IS CONTEXt in the cart should have the books', context)
    return (
        <div class="cartcontent">
            {context.books.map((book) => {
                return (
                    <h1>{book.title}</h1>
                )
            })}
            <div class="navbar">
                <ul>
                    <li id="home">Home</li>
                    <li id="profile">Profile</li>
                    <li id="library">Library</li>
                    <li id="logOut">Log Out</li>
                    <li class="nav-item">
                        <a class="cart-contents" id="cart" title="add to cart"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>

            <div class="imageandwelcome">
                <img src="../../assets/images/payus.png" style={{ width: "350px", height: "300px" }} class="girlreading" />
                <h2 class="yourcart"> Your Cart! </h2>
            </div>
            <div class="checkoutbtndiv">
                <input id="checkout" class="btn checkout-btn" value="Checkout" />
            </div>

            <div class="allbooksdisplayed">

                <div class="card-deck" id="{{id}}">
                    <div class="card">
                        <img class="card-img-top" src="{{jpegImg}}" alt="" />
                        <div class="card-body">
                            <h4 class="card-title"> 'test'</h4>
                            <p class="card-text">By: 'test'</p>
                            <p class="card-text">'test'</p>
                            <p class="price-text">Price: 'test'</p>
                            <input name="delete" class="btn submit-btn deleteFromCart" data-id="{{id}}" value="REMOVE" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Cart;