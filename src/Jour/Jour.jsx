import React from 'react';

export const Jour = ({ jour, onClick }) => {
  const className = `jour ${jour.value === 'padding' ? 'padding' : ''} ${jour.isCurrentDay ? "Aujourd'hui" : ''}`;
  return (
    <div onClick={onClick} className={className}>
      {jour.value === 'padding' ? '' : jour.value}

      {jour.event && <div className='event'>{jour.event.title}</div>}
    </div>
  );
};