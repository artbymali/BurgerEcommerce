import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useBasket } from '../CartContext';




function Navigation() {
    const headerRef = useRef();
    const menuRef = useRef();
    const navRef = useRef();
    const menuBtnRef = useRef();
    const originalMenuRef = useRef();

    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const menuOpen = document.querySelector('.menu-content')?.classList.contains('menu--open');

            if (scrollTop > lastScrollTop && !menuOpen) {
                if (scrollTop >= 80) {
                    headerRef.current.classList.add('animateOut');
                }
            } else {
                headerRef.current.classList.remove('animateOut');
            }

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollTop])


    const { getTotalItemCount } = useBasket();

  return (
    <>
        <div className="overlay"></div>
        <header ref={headerRef}>
            <menu ref={originalMenuRef}>
                <div className="MenuContent" ref={menuRef}>
                    <div className="Logo">
                        <img src="/logo.png" alt="Logo" />
                    </div>
                    <nav ref={navRef}>
                        <ul>
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink to="/About">ABOUT</NavLink></li>
                            <li><NavLink to="/Blog">BLOG</NavLink></li>
                            <li><NavLink to="/Shop">SHOP</NavLink></li>
                        </ul>
                    </nav>
                    <div className="MenuLinkContent">
                        <div className="MenuButtons" ref={menuBtnRef}>
                            <NavLink to="/" className="first"><img src="/wishlist.png" alt="" className='wishlist'/></NavLink>
                            <NavLink to="/"><img src="/user.png" alt="" className='user' /></NavLink>
                            <NavLink to="/Cart"><img src="/ShoppingBag.png" alt="" className='Bag' /></NavLink>
                            <NavLink to="/cart" className="NavQuantity"><div className="CountCricle">{getTotalItemCount()}</div></NavLink>
                        </div>
                        <div className="MenuButton">
                            <button>VIEW FULL MENU</button>
                        </div>
                    </div>
                </div>
            </menu>
        </header>
    </>
  )
}

export default Navigation