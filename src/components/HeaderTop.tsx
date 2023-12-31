import React from 'react'
import { FaFacebook ,FaInstagram ,FaLinkedin  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block '>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
            <div className='hidden lg:flex gap-1'>
                <div className="header_top__icon_wrapper">
                    <FaFacebook/>
                </div>
                <div className="header_top__icon_wrapper">
                    <FaInstagram/>
                </div>
                <div className="header_top__icon_wrapper">
                    <FaSquareXTwitter/>
                </div>
                <div className="header_top__icon_wrapper">
                    <FaLinkedin/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
