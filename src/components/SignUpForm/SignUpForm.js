import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss'

export default class SignUpForm extends Component {
state = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirm: '',
  campusNum: '',
  role: '',
  error: ''
};

handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  });
};

handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    const formData = {...this.state};
    delete formData.confirm;
    delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await signUp(formData);
    // Baby step
    this.props.setUser(user);
  } catch {
    // An error happened on the server
    this.setState({ error: 'Sign Up Failed - Try Again' });
  }
};

// We must override the render method
// The render method is the equivalent to a function-based component
// (its job is to return the UI)
render() {
  const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className={styles.formContainer}>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
          <label>Last Name</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <label>Campus ID</label>
          <input type="text" name="campusNum" value={this.state.campusNum} onChange={this.handleChange} required />
          <label>Role</label>
          <input type="text" name="role" value={this.state.role} onChange={this.handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
}
}