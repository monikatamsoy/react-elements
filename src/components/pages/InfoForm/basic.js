import React, { Component } from 'react'

class ExampleForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        // [@TODO] Create a mobile field - show input on alert - add validation if mobile
        // not in format - show error msg and disable submit.
      </form>
    );
  }
}

export default ExampleForm1;






// const ExampleForm1=() => (
  // <Form render={({
  //   submitForm
  // }) => (
  //   <form onSubmit={submitForm}>
  //     <Text field="firstName" placeholder='First Name' />
  //     <Text field="lastName" placeholder='Last Name' />
  //     <div>
  //       <label>
  //         Male <Radio field='gender' value="male" />
  //       </label>
  //       <label>
  //         Female <Radio field='gender' value="female" />
  //       </label>
  //     </div>
  //     <TextArea field="bio" />
  //     <Checkbox field="agreesToTerms" />
  //     <button type="submit">Submit</button>
  //   </form>
  // )} />
// )

// export default ExampleForm1;
