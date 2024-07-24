import React from "react";
import { Link } from 'react-router-dom';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ECHOSPARKSOLUTIONS</h1>
        <p className='py-4'>California, USA</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>
              <Link to='/analytics'>Analytics</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/marketing'>Marketing</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/commerce'>Commerce</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/insights'>Insights</Link>
            </li>
        </ul>
    </div>
    {/* <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div> */}
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>
              <Link to='/about'>About</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/jobs'>Jobs</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/press'>Press</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/careers'>Careers</Link>
            </li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>
              <Link to='/claim'>Claim</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/policy'>Policy</Link>
            </li>
            <li className='py-2 text-sm'>
              <Link to='/terms'>Terms</Link>
            </li>
        </ul>
    </div>
      </div>
    </div>
  )
};

export default Footer;
