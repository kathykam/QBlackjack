import React from 'react';
import '../styles/Card.css';

const Card = ({ suit, rank, color }) => {
  return (
    <div className={`card ${color}`}>
      <div className="rank">{rank}</div>
      <div className="suit">{suit}</div>
    </div>
  );
};

export default Card;
