import React from 'react'
export default function Input({ type, placeholder, style }) {
    return (
        <input type={type} placeholder={placeholder} className={`${style} px-4 py-2 outline-none rounded my-1 duration-500 focus:backdrop-blur-md bg-transparent border`} />
    )
}
