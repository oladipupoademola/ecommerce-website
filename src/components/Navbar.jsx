import React, { useState } from 'react'
import { FaSearch,FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import logo from "/logo.png"
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);

    }

    const navItems = [
        {title: "Jewelry & Accessories", path: "/"},
        {title: "Clothes & Shoes", path: "/"},
        {title: "Home & Living", path: "/"},
        {title: "Wedding & Party", path: "/"},
        {title: "Toys & Entertainment", path: "/"},
        {title: "Art & Collectibles", path: "/"},
        {title: "Craft supplies & Tools", path: "/"},

    ]
  return (
    <div>
      <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block' />

        {/* logo */}
        <a href="/"><img src= {logo} alt="" /></a>

        {/* account and shopping btn */}
        <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
            <a href="/" className='flex items-center gap-2'><FaUser />Account</a>
            <a href="/" className='flex items-center gap-2'><FaShoppingBag />Shopping</a>
        </div>

        {/* navbar for sm devices */}
        <div className='sm:hidden'>
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes className='w-5 h-5 text-black'
                    />: <FaBars className='w-5 h-5 text-black'/>
                }
            </button>
        </div>
        </nav>

        <hr />

        {/* category items */}
        <div className="pt-4">
            <ul className="lg:flex items-center justify-between text-black hidden">
                {
                    navItems.map(({title, path}) => (
                        <li key={title} className='hover:text-orange-500'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                    

                }
            </ul>
        </div>

        {/* only mobile menu items */}
        <div>
        <ul className={`bg-black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>

                {
                    navItems.map(({title, path}) => (
                        <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                            <Link to="/">{title}</Link>
                        </li>
                    ))
                    

                }
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Navbar
