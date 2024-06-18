import React from 'react'
import image1 from '../assets/images/Kshitij-Restaurant-Banquet-14-landscape.jpg'
import image2 from '../assets/images/Kshitij-2-landscape.jpg'
import image3 from '../assets/images/Kshitij-3-landscape.jpg'
import heroBg from '../assets/images/hero-bg.jpg'
import HomeSlider from '../components/HomeSlider'

const Home = () => {
    const emptyArr = [
        {
            heading: 'Taste in our Tradition',
            subHeading: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
            img: image1
        },
        {
            heading: 'Spacious and stylish',
            subHeading: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
            img: image2
        },
        {
            heading: 'Fresh Healthy food',
            subHeading: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
            img: image3
        }
    ];
    return (
        <>
            <div className="hero_area">
                <div className="bg-box">
                    <img src={heroBg} alt="" />
                </div>
                <HomeSlider/>
            </div>
            <section className="food_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            What do we offer?
                        </h2>
                    </div>
                    <div className="filters-content">
                        <div className="row grid">
                            {
                                emptyArr.map(({ heading, subHeading, img }) => {
                                    return (
                                        <div className="col-sm-6 col-lg-4 all pizza">
                                            <div className="box">
                                                <div>
                                                    <div className="img-box">
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div className="detail-box">
                                                        <h5>
                                                            {heading}
                                                        </h5>
                                                        <p>
                                                            {subHeading}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="btn-box">
                        <a href>
                            View More
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
