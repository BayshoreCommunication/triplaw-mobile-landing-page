'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

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

const SideServicesCard = ({ serversData }) => {
  const pathname = usePathname();

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 0.99 }}
      whileTap={{ scale: 0.95 }}
      className={`p-6 border border-gray-200 rounded-sm shadow hover:bg-gray-100 flex items-center gap-6 mb-2`}
    >
      {/* Custom Icon */}
      <div className='flex items-center justify-center p-3 rounded-full bg-primary'>
        {/* Use your custom icon or image here */}
        <Image
          src={serversData.icon} // Assuming serversData.icon contains the icon URL
          alt='Custom Icon'
          width={24}
          height={24}
        />
      </div>

      {/* List content */}
      <div className='flex flex-col'>
        <h5 className='text-lg font-bold tracking-wide text-gray-900'>
          {serversData.title}
        </h5>
      </div>
    </motion.li>
  );
};

export default SideServicesCard;
