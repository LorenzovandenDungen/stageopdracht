import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      position: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // Use Axios to send HTTP POST requests
    event.preventDefault();
  }

  render() {
    // Render HTML form with inputs
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Position:
            <input
              type="position"
              name="position"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to="/">Manual CSV Import</Link>
      </div>
    );
  }
}

export default AdminLogin;
