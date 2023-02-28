import { User } from './User';
import { Login } from './Login';

export class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({
      user
    });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <h1>Simple react app</h1>

        {
          user ?
            <User
              data={user}
              login={this.setUser}
            /> :
            <Login login={this.setUser}/>
        }
      </React.Fragment>
    );
  }
}
