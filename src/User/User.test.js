import { shallow } from 'enzyme';
import { User } from './User';

describe('User', () => {
  it('should create User', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('section').length).toBe(1);
  });

  it('should set default name', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('h2').find('em').text()).toBe('John Smith');
  });

  it('should call login() on button click', () => {
    const fakeFn = jest.fn();
    const wrapper = shallow(<User login={fakeFn} />);

    wrapper.find('button').simulate('click');
    expect(fakeFn).toHaveBeenCalledWith(null);
  });

  it('should render "p" if data.info exists', () => {
    const wrapper = shallow(<User />);
    const lengthStart = wrapper.find('p').length;

    wrapper.setProps({ data: { info: 'test' } });

    expect(wrapper.find('p').length).toBe(lengthStart + 1);
  });
});
