import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

import CartLayout from '../components/CartLayout';
import { removeCartItem, updateItems } from '../redux/reducers';
import { orderCreatePaymentIntent } from '../slice/order.slice';
import StripeCheckout from '../components/stripe/StripeCheckout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Delete, ShoppingCart, Add, Remove } from '@mui/icons-material';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Cart = () => {
    const { cart } = useSelector((x) => x.cartSlice);
    const dispatch = useDispatch();
    const [clientSecretKey, setClientSecretKey] = useState('');
    const [modalState, setModalState] = useState(false);

    const removeItem = (data) => {
        let storeCart = [...cart];
        storeCart.splice(data, 1);
        dispatch(removeCartItem(storeCart));
    }

    function cartTotalAmount() {
        return cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    }

    const checkout = () => {
        dispatch(orderCreatePaymentIntent({ totalAmount: cartTotalAmount() }))
            .unwrap()
            .then((result) => {
                setClientSecretKey(result.clientSecret);
                setModalState(true);
                console.log('result:- ', result);
            }).catch((err) => {
                console.log('err:- ', err);
            });
    }

    const changeModalState = (data) => {
        setModalState(data);
    }

    const changeQty = (data, type) => {
        let storeCart = [...cart];
        let presentItem = storeCart[data];
        delete storeCart[data];
        if (type === 'add') {
            presentItem = { ...presentItem, quantity: presentItem.quantity + 1 };
        } else {
            presentItem = { ...presentItem, quantity: presentItem.quantity - 1 };
        }
        storeCart[data] = presentItem;
        dispatch(updateItems(storeCart));
    }

    return (
        <div className="row">
            {
                cart.length > 0 ?
                    <>
                        <div className="col-lg-8">
                            <div className="card mb-3" >
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            Item
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <div style={{ width: '50px' }}>
                                                Qty
                                            </div>
                                            <div style={{ width: '80px' }}>
                                                Price
                                            </div>
                                            <div style={{ width: '80px' }}>
                                                Total Price
                                            </div>
                                            <div style={{ width: '80px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                cart.map((data, index) => {
                                    const { item, _id, price, quantity } = data;
                                    return (
                                        <div className="card mb-3" key={item + _id}>
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="d-flex col-6 flex-row align-items-center">
                                                        <div>
                                                            <img
                                                                src={`${process.env.REACT_APP_BASE_URL}/items/img/${_id}`}
                                                                className="img-fluid rounded-3"
                                                                alt="Shopping item"
                                                                style={{
                                                                    width: '65px',
                                                                    height: '50px',
                                                                    borderRadius: '10px'
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="ms-3">
                                                            <h5>{item}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex col-6 flex-row align-items-center">
                                                        <div
                                                            style={{ width: '90px' }}
                                                            className="d-flex flex-row align-items-center"
                                                        >
                                                            <Button
                                                                variant='light'
                                                                className='btn-outline-success qty-div mx-2'
                                                                onClick={() => changeQty(index, 'add')}
                                                            >
                                                                <Add />
                                                            </Button>
                                                            <h5 className="fw-normal mb-0">
                                                                {quantity}
                                                            </h5>
                                                            <Button
                                                                variant='light'
                                                                className='btn-outline-success qty-div mx-2'
                                                                onClick={() => changeQty(index, 'remove')}
                                                                disabled={quantity < 2}
                                                            >
                                                                <Remove />
                                                            </Button>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <h5 className="mb-0">${price}</h5>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <h5 className="mb-0">${quantity * price}</h5>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <Button variant='danger' onClick={() => removeItem(index)}>
                                                                <Delete />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-4">
                            <div className="card rounded-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Subtotal</p>
                                        <p className="mb-2">${cartTotalAmount()}</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Delivery charges</p>
                                        <p className="mb-2">$20.00</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-4">
                                        <p className="mb-2">Total(Incl. taxes)</p>
                                        <p className="mb-2">${cartTotalAmount() + 20}</p>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <Button
                                                type="button"
                                                variant='success'
                                                onClick={checkout}
                                            >
                                                <ShoppingCart />Checkout
                                            </Button>
                                        </div>
                                        <div>
                                            <span>
                                                <strong>
                                                    ${cartTotalAmount() + 20}
                                                </strong>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className='col-lg-12 text-center'>
                        There are no items in the cart
                        <div>
                            Click <Link to={'/menu'}>here</Link> to add items
                        </div>
                    </div>
            }

            {clientSecretKey &&
                <Elements stripe={stripePromise} options={{ clientSecret: clientSecretKey }}>
                    <StripeCheckout
                        clientSecretKey={clientSecretKey}
                        modalState={modalState}
                        changeModalState={changeModalState}
                    />
                </Elements>
            }


        </div>

    )
}

export default CartLayout(Cart)
