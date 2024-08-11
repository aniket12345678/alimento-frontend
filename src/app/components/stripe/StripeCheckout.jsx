import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import {
    PaymentElement,
    LinkAuthenticationElement, useStripe,
    useElements
} from '@stripe/react-stripe-js';

const StripeCheckout = (props) => {
    const { modalState, changeModalState } = props;
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async () => {
        const data = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/completion`,
            },
        });
    }

    return (
        <Modal
            show={modalState}
            onHide={() => changeModalState(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LinkAuthenticationElement
                    id="link-authentication-element"
                    // options={{ defaultValues: { email: 'aniketadak148@gmail.com' } }}
                />
                <PaymentElement />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>Pay</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StripeCheckout
