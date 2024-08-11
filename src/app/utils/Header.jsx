import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../redux/reducers';
import { NavbarList } from '../config/config';
import { ShoppingCart, Logout } from '@mui/icons-material';

const Header = () => {
    const pathName = window.location.pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart } = useSelector((x) => x.cartSlice);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <>
            <header className="header_section" style={{ background: 'linear-gradient(-296deg, #0D0E10, gray); !important' }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" to="/">
                            <span>
                                Alimento
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mx-auto ">
                                {
                                    NavbarList.map((itr, index) => {
                                        return (
                                            <li
                                                key={itr.path + index}
                                                className={`nav-item ${pathName === itr.path ? 'active' : ''}`}
                                            >
                                                <Link className="nav-link" to={itr.path}>
                                                    {itr.title}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="user_option">
                                {cart.length > 0 &&
                                    <div className='font-weight-bolder text-white cart-icon'>
                                        {cart.length}
                                    </div>
                                }
                                <Link to={'/cart'} className="cart_link">
                                    <ShoppingCart />
                                </Link>
                                <form className="form-inline">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </button>
                                    <button onClick={handleLogout} className="btn  my-2 my-sm-0 nav_search-btn" type='button'>
                                        <Logout />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
