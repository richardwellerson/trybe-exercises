import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {

  componentDidUpdate() {
    alert('Múltiplo de 3')
  }

  shouldComponentUpdate(nextprops) {
    return (nextprops.myNumber % 3 === 0)
  }

  componentWillUnmount() {
    localStorage.setItem('Valor',this.props.myNumber)
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
