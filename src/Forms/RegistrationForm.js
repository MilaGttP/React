import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      gender: 'male',
      age: '',
      errors: {},
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, gender, age } = this.state;

    const errors = {};
    if (!username.trim()) {
      errors.username = 'Введіть нік';
    }
    if (!email.trim()) {
      errors.email = 'Введіть електронну адресу';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Введіть правильну електронну адресу';
    }
    if (!age) {
      errors.age = 'Введіть вік';
    } else if (isNaN(age) || age < 18) {
      errors.age = 'Введіть коректний вік';
    }

    if (Object.keys(errors).length === 0) {
      const message = `
        Нік: ${username}
        Електронна адреса: ${email}
        Стать: ${gender}
        Вік: ${age}
      `;
      alert(message);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { username, email, gender, age, errors } = this.state;

    return (
      <div>
        <h1>Реєстраційна форма</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Нік:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label>Електронна адреса:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label>Стать:</label>
            <select name="gender" value={gender} onChange={this.handleChange}>
              <option value="male">Чоловік</option>
              <option value="female">Жінка</option>
            </select>
          </div>
          <div>
            <label>Вік:</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
            {errors.age && <p>{errors.age}</p>}
          </div>
          <button type="submit">Зареєструватися</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
