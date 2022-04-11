import React from 'react'
import Button from '../Utils/Button'
import Heading from '../Utils/Heading'
import Input from '../Utils/Input'
import Subheading from '../Utils/Subheading'
export default function Contact() {
    return (
        <div className='p-10'>
            <div>

                <Subheading style={'text-teal-600'} subheading={'Do You Have Any Queries?'} />
                <Heading style={'text-6xl'} heading={'Contact us'} />

            </div>
            <div className='flex justify-evenly mt-10'>

                <form className='w-1/2' onSubmit={e => e.preventDefault()}>
                    <div>
                        <Input style={'w-[48%] mr-3'} placeholder='Your Name' type={'text'} />
                        <Input style={'w-1/2'} placeholder='Your Email' type={'email'} />
                    </div>
                    <Input style={'w-full'} type='text' placeholder='Preferences' />
                    <textarea placeholder='Your Feedback' className=' px-4 py-2 outline-none rounded my-2 duration-500 bg-transparent border w-full focus:backdrop-blur-sm' cols="30" rows="10"></textarea>
                    <Button btnText={'Submit'} style={'border'} />
                </form>

                <div>
                    <Subheading subheading={'We Are Located Right Here'} style='text-3xl text-teal-600' />
                    <p>Address : 23 New Market, Dhaka, Bangladesh</p>
                    <p>Phone : 01754444555</p>
                    <p>Email : info@delicious-catering.com</p>
                    <div className='w-90 h-60 border-blue-200'>
                        <img className='w-full h-full' src="https://www.researchgate.net/profile/Iffat-Nova/publication/339747635/figure/fig1/AS:866123255922692@1583511284835/New-Market-Foot-Over-Bridge-and-its-surroundings-Dhaka-Source-GIS-map-2016-Dhaka.ppm" alt="" />
                    </div>

                </div>
            </div>

        </div >
    )
}
