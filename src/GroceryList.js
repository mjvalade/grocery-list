import React from 'react';
import classnames from 'classnames';
import './Grocery.css';
import Grocery from './Grocery.js';

const GroceryList = ({ groceries }) => {
  return (
    <article>
      <h3>Grocery List</h3>
      {groceries.map(g => <Grocery key={g.id} name={g.name} />)}
    </article>
    );
  };

export default GroceryList;
