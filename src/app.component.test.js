import { shallow } from 'enzyme';
import { AppComponent } from './app.component';
import { Login } from './Login';
import { User } from './User';

describe('AppComponent', () => {
  it('should create AppComponent', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('should have null user in state', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.state().user).toBeNull();
  });

  it('should show Login component on null user', () => {
    const wrapper = shallow(<AppComponent />);
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should show User component on non-null user', () => {
    const wrapper = shallow(<AppComponent />);
    wrapper.setState({user: {} });
    expect(wrapper.find(User).length).toBe(1);
  });

  it('should set new state on setUser()', () => {
    const wrapper = shallow(<AppComponent />);
    const instance = wrapper.instance();
    const testData = {};
    instance.setUser(testData);
    expect(instance.state.user).toBe(testData);
    // or
    // expect(wrapper.state().user).toBe(testData);
  });
});
