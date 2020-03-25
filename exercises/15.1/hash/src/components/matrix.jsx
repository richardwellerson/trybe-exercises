import React from 'react';
import Table from './Table';
import EasyMap from './teste';
import '../App.css';

class Matrix extends React.Component {
  render() {
    return (
      <div>
        <Table />
        <div>
          <EasyMap />
        </div>
      </div>
    );
  }
}

export default Matrix;
