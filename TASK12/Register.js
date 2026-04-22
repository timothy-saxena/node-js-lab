export default function Register() {
  return (
    <div>
      <h2>Student Registration</h2>
      <form>
        <input type="text" placeholder="Full Name" /><br/>
        <input type="email" placeholder="Email" /><br/>
        <input type="password" placeholder="Password" /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}