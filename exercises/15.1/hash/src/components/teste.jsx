import React from 'react';

const resposta = [
  { id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20 },
  { id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15 },
  { id: 71, item: 'socks', color: 'black', size: 'all', price: 5 },
];

class EasyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
  }

  componentDidMount() {
    this.setNewData();
  }

  setNewData() {
    this.setState({
      lista: resposta,
    });
  }

  mapReturn(callback) {
    return callback.map(value => {
      return (
        <div key={value.id}>
          <h2>{`Product: ${value.item}`}</h2>
          <p>{`Color: ${value.color}`}</p>
          <p>{`Size: ${value.size}`}</p>
          <p>{`Price: $${value.price}`}</p>
        </div>
      );
    })
  }

  render() {
    return (
      <div>{this.mapReturn(this.state.lista)}</div>
    );
  }
}

export default EasyMap;
