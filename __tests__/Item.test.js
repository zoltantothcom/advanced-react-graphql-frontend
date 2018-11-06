import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ItemComponent from '../components/Item';

const fakeItem = {
  id: 'qw4hjt9q4owNF',
  title: 'Cool Item',
  price: 4000,
  description: 'This one is really cool!',
  image: 'cool.jpg',
  largeImage: 'large-cool.jpg',
};

describe('<Item />', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  xit('renders the pricetag and title properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);

    expect(
      wrapper
        .find('PriceTag')
        .children()
        .text(),
    ).toBe('$50');

    expect(
      wrapper
        .find('Title a')
        .first()
        .children()
        .text(),
    ).toBe(fakeItem.title);
  });

  xit('renders the image properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);

    const img = wrapper.find('img');

    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });

  xit('renders the buttons properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find('.buttonList');

    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find('Link')).toHaveLength(1);
    expect(buttonList.find('AddToCart').exists()).toBe(true);
    expect(buttonList.find('DeleteItem').exists()).toBe(true);
  });
});
