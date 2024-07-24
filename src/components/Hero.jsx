import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const UserReq =  collection(db, 'userRequests');

  async function handleSubmit (event) {
    event.preventDefault();
    console.log(fullName, email, phone, message);
    const document = {
      fullName: fullName,
      email: email,
      phone: phone,
      message: message
    }
    await addDoc(UserReq, document);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setShowModal(false);
  };

  const handleCancel = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setShowModal(false);
  }

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROW WITH ECHO SPARK SOLUTIONS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow your IT Infrastructure.</h1>
        <div className='flex justify-center items-center '>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'> We Provide </p>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Custom Solutions', 'Effective Solutions', 'IT InfraStructure']} typeSpeed={160} backSpeed={190} loop />
        </div>
        <p className='md-:text-2xl text-xl font-bold text-gray-500'>We Manage your IT Solutions, provide Client Centric Approach and Tailored Solutions.</p>
        <button onClick={() => setShowModal(true)} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
      
      {showModal && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center'>
          <div className='bg-gray-900 p-8 w-[800px] rounded-lg'>
            <h2 className='text-2xl font-bold mb-4'>Get Started</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='fullName'></label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  required
                  placeholder='Full Name'
                  autoComplete='off'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='email'></label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  required
                  placeholder='Email Address'
                  autoComplete='off'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='phone'></label>
                <input
                  type='phone'
                  id='phone'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  required
                  placeholder='Phone Number'
                  autoComplete='off'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='description'></label>
                <textarea
                  id='message'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  required
                  placeholder='Message'
                  autoComplete='off'
                ></textarea>
              </div>
              <div className='flex items-center justify-between'>
                <button type='submit' className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>
                  Submit
                </button>
                <button type='button' onClick={handleCancel} className='ml-4 text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
