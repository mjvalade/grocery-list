import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={classnames('Grocery', { starred, purchased })}>
      <h3>{name}</h3>
      { quantity && <p className="Grocery-quantity">Quantity: {quantity}</p> }
      { notes && <p className="Grocery-notes">Notes: {notes}</p> }
      <button
        className="Grocery-purchase"
        onClick={onPurchase}
        children={purchased ? 'Unpurchase' : 'Purchase'}
      />
      <button
        className="Grocery-starred"
        onClick={onStar}
        children={starred ? 'Unstar' : 'Star'}
      />
      <button
        className="Grocery-remove"
        children='Remove'
        onClick={onDelete}
      />
    </article>
  );
};

export default Grocery;
