import React from 'react'

export default function Button({ btnText, style }) {
    return (
        <button className={`${style} px-8 py-2 rounded-md my-2 mx-auto block hover:backdrop-blur-sm hover:bg-[#00808038] hover:border-[#00808060] duration-500`}>
            {btnText}
        </button>
    )
}
