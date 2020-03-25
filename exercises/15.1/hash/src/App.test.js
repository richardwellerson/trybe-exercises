import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('Hash game tests', () => {
  test('Renders Hash Game Title', () => {
    const { getByText } = render(<App />);
    const title = getByText("Hash Game");
    expect(title).toBeDefined();
  });
  test('The tic-tac-toe matrix is ​​empty', () => {
    const { getAllByTestId } = render(<App />);
    const allValuesCells = getAllByTestId(/hashValue/i)
    allValuesCells.map((cell) => (
      expect(cell.innerHTML).toBe('')
    ));
  });
  test('when cell is clicked, hash value marks the spot alternated times', () => {
    const { getAllByTestId } = render(<App />);
    const allValuesCells = getAllByTestId(/hashValue/i)
    const allClickedCells = getAllByTestId(/hashClickedCell/i)
    fireEvent.click(allClickedCells[0]);
    expect(allValuesCells[0].innerHTML).toBe('X');
    fireEvent.click(allClickedCells[2]);
    expect(allValuesCells[2].innerHTML).toBe('O');
    fireEvent.click(allClickedCells[4]);
    expect(allValuesCells[4].innerHTML).toBe('X');
  });
  test('when the cell is clicked more than once, it does not change its value', () => {
    const { getAllByTestId } = render(<App />);
    const allValuesCells = getAllByTestId(/hashValue/i)
    const allClickedCells = getAllByTestId(/hashClickedCell/i)
    fireEvent.click(allClickedCells[0]);
    expect(allValuesCells[0].innerHTML).toBe('X');
    fireEvent.click(allClickedCells[0]);
    expect(allValuesCells[0].innerHTML).toBe('X');
  });
  test('Tic-tac-toe recognizes one condition for victory', () => {
    const { getAllByTestId } = render(<App />);
    window.alert = jest.fn();
    const mockAlert = jest.spyOn(window, 'alert');
    const allValuesCells = getAllByTestId(/hashValue/i);
    fireEvent.click(allValuesCells[0]);
    fireEvent.click(allValuesCells[8]);
    fireEvent.click(allValuesCells[1]);
    fireEvent.click(allValuesCells[7]);
    fireEvent.click(allValuesCells[2]);
    expect(mockAlert).toHaveBeenCalled();
  });
});
