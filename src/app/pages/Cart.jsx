import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartLayout from '../components/CartLayout';
import { Button } from 'react-bootstrap';
import { removeCartItem } from '../redux/reducers';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useSelector((x) => x.cartSlice);
    const dispatch = useDispatch();

    const removeItem = (data) => {
        let storeCart = [...cart];
        storeCart.splice(data, 1);
        dispatch(removeCartItem(storeCart));
    }

    function cartTotalAmount() {
        return cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    }

    return (
        <div className="row">
            {
                cart.length > 0 ?
                    <>
                        <div className="col-lg-8">
                            {
                                cart.map((data, index) => {
                                    const { item, _id, price, quantity } = data;
                                    return (
                                        <div className="card mb-3" key={item + _id}>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
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
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: '50px' }}>
                                                            <h5 className="fw-normal mb-0">
                                                                {quantity}
                                                            </h5>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <h5 className="mb-0">${price}</h5>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <h5 className="mb-0">${quantity * price}</h5>
                                                        </div>
                                                        <div style={{ width: '80px' }}>
                                                            <Button onClick={() => removeItem(index)}>remove</Button>
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
                                        <p className="mb-2">Shipping</p>
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
                                            >
                                                Checkout
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

        </div>

    )
}

export default CartLayout(Cart)
