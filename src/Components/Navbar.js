import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Heading from '../Utils/Heading'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-around p-4 bg-[#00707071] sticky duration-500 backdrop-blur-sm -top-2 text-white z-50'>
            <h1 className="text-3xl">
                <Link to='/'><Heading style='text-2xl' heading={'Delicious Catering'} /></Link>
            </h1>
            <ul className='flex'>
                <li className='mx-4 duration-500 hover:text-teal-300'>
                    <NavLink to='/menu'>Menu</NavLink>
                </li>
                <li className='mx-4 duration-500 hover:text-teal-300'>
                    <NavLink to='/recipe'>Recipe</NavLink>
                </li>
                <li className='mx-4 duration-500 hover:text-teal-300'>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className='mx-4 duration-500 hover:text-teal-300'>
                    <NavLink to='/pricing'>Pricing</NavLink>
                </li>
                <li className='mx-4 duration-500 hover:text-teal-300'>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}
