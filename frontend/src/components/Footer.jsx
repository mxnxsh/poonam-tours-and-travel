import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className='row center '>
        <p className=''>
          Copyright &copy; {date} Poonam Tours & Travels. All right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
