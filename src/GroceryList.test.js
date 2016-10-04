import React from 'react';
import { shallow, mount } from 'enzyme';
import GroceryList from './GroceryList';
import Grocery from './Grocery';

describe('GroceryList', () => {
  it('renders the GroceryList as an h3', () => {
    const wrapper = shallow(<GroceryList name="List" groceries={[]}/>);
    const title = <h3>Grocery List</h3>

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('shows the appropriate number of groceries', () => {
    const wrapper = shallow(
      <GroceryList
        groceries={[
          { id: 1, name: "Bananas" },
          { id: 2, name: "Apples" },
          { id: 3, name: "Circle Cheese" }
        ]}
      />
    );
    expect(wrapper.find('Grocery').length).toEqual(3);
  });

});
