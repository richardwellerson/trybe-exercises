class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange.bind(this);
    this.submitMessage.bind(this);
  }

  handleChange(message) {
    this.setState({
      input: message,
    });
  }

  submitMessage() {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input],
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <p>{this.state.input}</p>
        <input value={this.state.input} type='text' onChange={(e) => this.handleChange(e.target.value)} />

        <button type="button" onClick={() => this.submitMessage()}> Add message</button>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
};
