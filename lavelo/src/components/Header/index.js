import React from 'react';
import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = () => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2><Link to='/'>David<span><i className="fa fa-heart" aria-hidden="true"></i></span>Kačka</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    {/* <li><Link to='#'>Home +</Link>
                                        <ul className="submenu">
                                            <li><Link to='/'>Home Style 1</Link></li>
                                            <li><Link to='/home2'>Home Style 2</Link></li>
                                            <li><Link to='/home3'>Home Style 3</Link></li>
                                            <li><Link to='/home4'>Home Style 4</Link></li>
                                        </ul>
                                    </li> */}
                                    <li><AnchorLink href='#couple'>My dva</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Náš příběh</AnchorLink></li>
                                    <li><AnchorLink href='#people'>Lidé</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Kdy a kde</AnchorLink></li>
                                    {/* <li><AnchorLink href='#gallery'>Gallery</AnchorLink></li> */}
                                    <li><AnchorLink href='#rsvp'>Potvrzení účasti</AnchorLink></li>
                                    {/* <li><Link to='#'>Blog +</Link>
                                        <ul className="submenu submenu2">
                                            <li><Link to='/blog'>Blog</Link></li>
                                            <li><Link to='/Blog-details'>Blog Details</Link></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
