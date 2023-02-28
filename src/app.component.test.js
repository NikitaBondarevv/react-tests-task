import { shallow, mount } from 'enzyme';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create AppComponent', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should render section from <User />', () => {
    const wrapper = mount(<AppComponent />);
    const event = {
      target: {name: {value: 'test'} },
      preventDefault: _ => _
    };

    wrapper.find('form').simulate('submit', event);
    expect(wrapper.find('section')).toHaveLength(1)
  });
});
