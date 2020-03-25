import React from 'react';
import '../App.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashValues: ['X', 'O'],
      index: 0,
      tab11: '',
      tab12: '',
      tab13: '',
      tab21: '',
      tab22: '',
      tab23: '',
      tab31: '',
      tab32: '',
      tab33: '',
    }
  }

  changeStateValue(index, tabValue) {
    const stateAcess = this.state
    if (stateAcess[tabValue] === '') {
      this.setState({
        index: index ? 0 : 1,
        [tabValue]: this.state.hashValues[index],
      });
    }
  }

  componentDidUpdate() {
    this.validateWinnerHash();
  }

  validateWinnerHash() {
    const accessState = this.state;
    const stateValues = [
      [
        accessState.tab11,
        accessState.tab12,
        accessState.tab13,
      ],
      [
        accessState.tab21,
        accessState.tab22,
        accessState.tab23,
      ],
      [
        accessState.tab31,
        accessState.tab32,
        accessState.tab33,
      ],
      [
        accessState.tab11,
        accessState.tab21,
        accessState.tab31,
      ],
      [
        accessState.tab12,
        accessState.tab22,
        accessState.tab32,
      ],
      [
        accessState.tab13,
        accessState.tab23,
        accessState.tab33
      ],
      [
        accessState.tab11,
        accessState.tab22,
        accessState.tab33,
      ],
      [
        accessState.tab13,
        accessState.tab22,
        accessState.tab31,
      ],
    ];

    let isHaveWinner;
    stateValues.forEach(validateArray => {
      if (validateArray[0] === 'X' && validateArray[1] === 'X' && validateArray[2] === 'X') {
        isHaveWinner = true;
        alert('Vencedor: X Player');
        window.location.reload();
      } else if (validateArray[0] === 'O' && validateArray[1] === 'O' && validateArray[2] === 'O') {
        isHaveWinner = true;
        alert('Vencedor: O Player');
        window.location.reload();
      }
    });

    const access = this.state;
    const allStateValues = [
      access.tab11,
      access.tab12,
      access.tab13,
      access.tab21,
      access.tab22,
      access.tab23,
      access.tab31,
      access.tab32,
      access.tab33,
    ];

    const decision = allStateValues.every(tab => tab !== "");
    if (decision && !isHaveWinner) {
      alert('Velha!')
      window.location.reload();
    }
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab11')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab11}</p>
            </td>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab12')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab12}</p>
            </td>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab13')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab13}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab21')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab21}</p>
            </td>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab22')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab22}</p>
            </td>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab23')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab23}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab31')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab31}</p>
            </td>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab32')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab32}</p>
            </td>
            <td className="Table_cell" data-testid="hashClickedCell" onClick={() => this.changeStateValue(this.state.index, 'tab33')}>
              <p data-testid="hashValue" className="Table_value_x-Or-o">{this.state.tab33}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
