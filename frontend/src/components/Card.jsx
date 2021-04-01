import React from 'react';
import { Link } from 'react-router-dom';
const Card = props => {
  return (
    <div className='card '>
      <div className='cardHeader'>
        <div className='cardContent'>
          <h1>{props.number}</h1>
          <p>{props.content}</p>
        </div>
      </div>
      <div className='cardFooter'>
        <Link to={props.link}>More Info</Link>
      </div>
    </div>
  );
};

export default Card;
