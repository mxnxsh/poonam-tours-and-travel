import React from 'react';

import Logo from '../images/car1.jpg';

const Main = () => {
  return (
    <main>
      <div className='bgimg '>
        <div
          className='row col'
          style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
        >
          <input
            type='text'
            placeholder='Search...'
            style={{
              margin: ' 10px',
              opacity: '.6',
            }}
          />
          <div className='row'>
            <button
              style={{
                margin: 'auto 10px',
                backgroundColor: '#126e82',
                border: 'none',
                color: '#f8f5f1',
              }}
            >
              Entries
            </button>
            <button
              style={{
                margin: 'auto 10px',
                backgroundColor: '#126e82',
                border: 'none',
                color: '#f8f5f1',
              }}
            >
              Bills
            </button>
          </div>
        </div>
        <div className=' row center col' style={{ marginTop: '40px' }}>
          <img
            src={Logo}
            // className='logo'
            alt='car1'
            height='200'
            width='400'
          />
          <p style={{ textAlign: 'center', width: '50%' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            molestias fugiat, dicta voluptatum in dolorem vel rerum sapiente,
            saepe reiciendis dignissimos, dolor et non hic.
          </p>
        </div>
      </div>
      <div className='row' style={{ margin: '50px' }}>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        <div className='row center col'>
          <img src={Logo} alt='car1' height='200' width='200' />
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
      </div>

      <div className='aboutus flex-center'>
        <h1 className='row center'>ABOUT US</h1>
        <div className='row center'>
          <div className='div1'>1</div>
          <div className='div2'>2</div>
        </div>
      </div>
    </main>
  );
};
export default Main;
