'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import parse from 'html-react-parser';
import PrimaryButton from '../shared/PrimaryButton';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const ServiceCard = ({ serversData, index }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 0.95 }}
      href='#'
      className={`relative flex flex-col items-center max-w-sm gap-6 p-6 border border-gray-200 rounded-md shadow hover:bg-gray-100 group ${index === 1 ? 'bg-black' : 'bg-white'}`}
    >
      <div className='p-6 mt-6 rounded-full bg-primary'>
        <Image
          src={serversData.icon}
          alt='Picture of the author'
          width={100}
          height={100}
          className='size-12'
        />
      </div>
      <div className='mb-6'>
        <h5
          className={`mb-2 font-bold tracking-wide text-center text-md md:text-md lg:text-lg xl:text-lg 2xl:text-2xl ${index === 1 ? 'text-white group-hover:text-black' : 'text-black group-hover:text-black'}`}
        >
          {serversData?.title}
        </h5>
        <p
          className={`font-normal text-center line-clamp-2 ${index === 1 ? 'text-white group-hover:text-black' : 'text-gray-700 group-hover:text-black'}`}
        >
          {serversData?.description}
        </p>
        <div className='flex justify-center mt-8'>
          <PrimaryButton
            title={'Read More'}
            link={'/about'}
            style={
              'flex items-center justify-center px-2 py-2 mb-2 text-sm font-normal text-primary rounded-lg border-2 border-primary hover:bg-primary md:text-lg md:px-8 me-3 md:me-6 bg-transparent hover:text-white shadow-none'
            }
            radius={'sm'}
          />
        </div>
      </div>
      {/* Add a colored bottom strip */}
      <div className='absolute bottom-0 left-0 w-full h-3 bg-black rounded-b-md'></div>
    </motion.div>
  );
};

export default ServiceCard;
