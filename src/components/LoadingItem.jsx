import React from 'react';
import Loading from 'react-loading-components';

const LoadingItem = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <Loading type='oval' width={100} height={100} fill='#5de84881' />
    </div>
  );
};

export default LoadingItem;