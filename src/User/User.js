export const User = ({ data, login }) => {
  const { name = 'John Smith', age = '25', gender = 'male', info } = (data || {});
  const logout = () => login(null);

  return (
    <section>
      <h2>User <em>{name}</em></h2>
      <p><strong>Age</strong>, {age} years old</p>
      <p><strong>Gender</strong>, {gender}</p>

      {info && <p>Additional info: {info}</p>}

      <button onClick={logout}>Logout</button>
    </section>
  );
};
