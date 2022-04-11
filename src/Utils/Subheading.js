import React from 'react'

export default function Subheading({ style, subheading }) {
    return (
        <h1 className={`text-xl text-center font-[mali] ${style} `}>{subheading}</h1>

    )
}
