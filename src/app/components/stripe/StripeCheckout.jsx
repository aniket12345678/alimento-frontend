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

        alert('yo')

        // if (!stripe || !elements) {
        //     // Stripe.js has not yet loaded.
        //     // Make sure to disable form submission until Stripe.js has loaded.
        //     return;
        // }

        // setIsLoading(true);

        const data = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/completion`,
            },
        });

        console.log('data:- ', data);


        // if (error.type === "card_error" || error.type === "validation_error") {
        //   setMessage(error.message);
        // } else {
        //   setMessage("An unexpected error occured.");
        // }

        // setIsLoading(false);
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
                <LinkAuthenticationElement id="link-authentication-element" />
                <PaymentElement />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>Understood</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default StripeCheckout
