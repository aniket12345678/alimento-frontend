import React, { useEffect } from 'react'
import CartLayout from '../components/CartLayout'
import { useDispatch, useSelector } from 'react-redux'
import { updateItems } from '../redux/reducers';

const ThankYou = () => {
    const { cart } = useSelector((x) => x.cartSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateItems({}))
    }, [])

    return (
        <h1 className='text-center'>
            Thank you for your order
        </h1>
    )
}

export default CartLayout(ThankYou)
