import React, { useEffect, useState } from 'react'

const HomeSlider = () => {
    const [counter, setCounter] = useState(0);
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         if (counter === 3) {
    //             setCounter(0);
    //         } else {
    //             setCounter((prev) => prev + 1);
    //         }
    //     }, 1000);
    //     return () => clearInterval(timer);
    // }, []);
    console.log('counter:- ', counter);
    return (
        < section className="slider_section " >
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-7 col-lg-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            Fast Food Restaurant
                                        </h1>
                                        <p>
                                            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                        </p>
                                        <div className="btn-box">
                                            <a href className="btn1">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-7 col-lg-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            Enriching experience
                                        </h1>
                                        <p>
                                            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                        </p>
                                        <div className="btn-box">
                                            <a href className="btn1">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-7 col-lg-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            Fast Food Restaurant
                                        </h1>
                                        <p>
                                            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                        </p>
                                        <div className="btn-box">
                                            <a href className="btn1">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ol className="carousel-indicators">
                        <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                        <li data-target="#customCarousel1" data-slide-to={1} />
                        <li data-target="#customCarousel1" data-slide-to={2} />
                    </ol>
                </div>
            </div>
        </ section >
    )
}

export default HomeSlider
