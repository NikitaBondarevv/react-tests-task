export const Login = ({ login }) => {
  const submit = (event) => {
    login({ name: event.target.name.value });
    event.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="name"
      />
      <input type="submit" value="Login"/>
    </form>
  );
};
