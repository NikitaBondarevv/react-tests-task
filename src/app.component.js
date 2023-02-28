import { useState } from 'react';

import { User } from './User';
import { Login } from './Login';

export const AppComponent = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <h1>Simple react app</h1>

      {
        user ?
          <User
            data={user}
            login={setUser}
          /> :
          <Login login={setUser} />
      }
    </>
  )
}
