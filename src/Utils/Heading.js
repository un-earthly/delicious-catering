import React from 'react'

export default function Heading({ style, heading }) {
    return (
        <h1 className={`${style} text-5xl text-center font-[Pacifico] tracking-wider m-4 font-light`}>{heading}</h1>
    )
}
