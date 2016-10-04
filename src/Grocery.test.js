import React from 'react';
import { shallow, mount } from 'enzyme';
import Grocery from './Grocery';

describe('Grocery', () => {
  it('renders the name of the grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name ="Bananas" />);
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('should have a className of "starred" if is starred', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" starred={true} />
    );

    expect(wrapper.is('.starred')).toEqual(true);
  });

  it('should not have a classname of "starred" if is not starred', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" starred={false} />
    );

    expect(wrapper.is('.starred')).toEqual(false);
  });

  it('should have a classname of "purchased" if is purchased', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.is('.purchased')).toEqual(true);
  });

  it('should not have a classname of "purchased" if is not purchased', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={false} />
    );

    expect(wrapper.is('.purchased')).toEqual(false);
  });

  it('should have a p.Grocery-quantity element if a quantity are passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" quantity={'17 bunches'} />
    );

    expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
  });

  it('should show the p.Grocery-quantity text on the article', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" quantity={'17 bunches'} />
    );

    expect(wrapper.find('.Grocery-quantity').text()).toEqual('Quantity: 17 bunches');
  });

  it('should not have a p.Grocery-quantity element if a quantity are not passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" quantity={undefined} />
    );

    expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
  });

  it('should have a p.Grocery-notes if a notes are passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" notes={'on sale'} />
    );

    expect(wrapper.find('.Grocery-notes').length).toEqual(1);
  });

  it('should show the p.Grocery-notes text in the article', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" notes={'on sale'} />
    );

    expect(wrapper.find('.Grocery-notes').text()).toEqual('Notes: on sale');
  });

  it('should not have a p.Grocery-notes if notes are not passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" notes={undefined} />
    );

    expect(wrapper.find('.Grocery-notes').length).toEqual(0);
  });
});

describe('.Grocery-purchase button', () => {
  it ('should have a text of "Purchase" if purchase is false', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={undefined} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchase is true', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });

  it('should call the onPurchase prop when clicked', () => {
    const onPurchaseMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        purchased={true}
        onPurchase={onPurchaseMock}
      />
    );
    wrapper.find('.Grocery-purchase').simulate('click');

    expect(onPurchaseMock).toBeCalled();
  });
});

describe('.Grocery-starred button', () => {
  it('should have the text of "Star" if star is false', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" starred={undefined} />
    );

    expect(wrapper.find('.Grocery-starred').text()).toEqual('Star')
  });

  it('should have the text of "Unstar" if star is true', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" starred={true} />
    );

    expect(wrapper.find('.Grocery-starred').text()).toEqual('Unstar')
  });

  it('should call the onStar prop when clicked', () => {
    const onStarMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        starred={true}
        onStar={onStarMock}
      />
    );
    wrapper.find('.Grocery-starred').simulate('click');

    expect(onStarMock).toBeCalled();
  });
});

describe('.Grocery-remove', () => {
  it('should have the text of "Remove"', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" />
    );

    expect(wrapper.find('.Grocery-remove').text()).toEqual('Remove')
  });

  it('should call the onDelete prop when click', () => {
    const onDeleteMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        onDelete={onDeleteMock}
      />
    );
    wrapper.find('.Grocery-remove').simulate('click');

    expect(onDeleteMock).toBeCalled();
  });
});
