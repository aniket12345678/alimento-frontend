import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import { itemFindAll } from '../slice/item.slice';
import { addItems, updateItems } from '../redux/reducers';
import { categoryFindAll } from '../slice/category.slice';
import { ShoppingCart } from '@mui/icons-material';

const Menu = () => {
    const dispatch = useDispatch();
    const { findAll: findAllItem } = useSelector((x) => x.itemSlice);
    const { findAll: findAllCategory } = useSelector((x) => x.categorySlice);
    const { cart } = useSelector((x) => x.cartSlice);

    const [loader, setLoader] = useState(false);
    const [count, setCounter] = useState(3);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        allMenu();
        dispatch(itemFindAll({}))
    }, []);

    function allMenu() {
        dispatch(categoryFindAll())
    }

    const changeCategory = (data) => {
        if (data !== 'all') {
            setSelectedCategory(data.category);
            dispatch(itemFindAll({ category_id: data['_id'] }))
        }
        else {
            setSelectedCategory(data);
            dispatch(itemFindAll({}))
        }
    }

    const addToCart = (data) => {
        let storeCart = [...cart];
        let checkItem = storeCart.some((x) => x['_id'] === data['_id']);
        if (checkItem) {
            let presentItem = storeCart.find((x) => x['_id'] === data['_id']);
            let restItems = storeCart.filter((x) => x['_id'] !== data['_id']);
            let updatedPresent = { ...presentItem, quantity: presentItem.quantity + 1 }
            let cartArr = [...restItems, updatedPresent];
            dispatch(updateItems(cartArr))
        } else {
            dispatch(addItems({ ...data, quantity: 1 }));
        }
    }

    const viewMore = () => {
        setLoader(true);
        setTimeout(() => {
            setCounter((prev) => prev + 3)
            setLoader(false);
        }, 1000);
    }

    return (
        <section className="food_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Our Menu
                    </h2>
                </div>
                <ul className="filters_menu">
                    <li
                        onClick={() => changeCategory('all')}
                        data-filter={`.${'all'.toLowerCase()}`}
                        className={selectedCategory === 'all' ? 'active' : ''}
                    >
                        All
                    </li>
                    {
                        findAllCategory.map((itr) => {
                            const { category } = itr;
                            return (
                                <li
                                    onClick={() => changeCategory(itr)}
                                    data-filter={`.${category.toLowerCase()}`}
                                    className={selectedCategory === category ? 'active' : ''}
                                    key={category}
                                >
                                    {category}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="filters-content">
                    <div className="row grid">
                        {
                            findAllItem.filter((_, i) => i < count).map((details) => {
                                const { item, price, _id } = details;
                                return (
                                    <div className="col-sm-6 col-lg-4 all pizza">
                                        <div className="box">
                                            <div>
                                                <div className="img-box">
                                                    <img
                                                        src={`${process.env.REACT_APP_BASE_URL}/items/img/${_id}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="detail-box">
                                                    <h5>
                                                        {item}
                                                    </h5>
                                                    <p>
                                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                                    </p>
                                                    <div className="options">
                                                        <h6>
                                                            ${price}
                                                        </h6>
                                                        <a href onClick={() => addToCart(details)}>
                                                            <ShoppingCart />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    loader &&
                    <div className='text-center'>
                        <RotatingLines
                            visible={true}
                            height="96"
                            width="96"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="1"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                }
                {
                    count < findAllItem.length &&
                    <div className="btn-box">
                        <Button onClick={viewMore} disabled={loader}>View More</Button>
                    </div>
                }
            </div>
        </section>

    )
}

export default Menu
