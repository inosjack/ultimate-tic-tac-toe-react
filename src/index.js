import React from 'react';
import ReactDOM from'react-dom';
import './index.css';

function Square(props) {
    return (
        <button 
            className="square" 
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null),
                Array(9).fill(null)
            ],
            xIsNext: true,
            currentBlock: 0,
            playblock:null,
        };
    }

    handleClick(i,j) {
        const squares = this.state.squares.slice();
        // console.log(squares[i]);
        if (calculateWinner(squares[(this.state.currentBlock == null) ? 0 : this.state.currentBlock ]) || squares[i][j]) {
            return;
        }
        if(this.state.playblock === null || this.state.playblock === i) {
            squares[i][j] = this.state.xIsNext ? 'X' : 'O';
            document.getElementsByClassName('board-'+i)[0].style.backgroundColor = "#fff";
            document.getElementsByClassName('board-'+j)[0].style.backgroundColor = "aliceblue";
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext,
                playblock: j,
                currentBlock: i,
            });
        }
        // console.log(squares);
    }

    renderSquare(i,j) {
        return <Square value={this.state.squares[i][j]}
            onClick={() => this.handleClick(i,j)}
        />;
    }

    render() {
        // alert(this.state.currentBlock);
        const winner = calculateWinner(this.state.squares[(this.state.currentBlock == null) ? 0 : this.state.currentBlock ]);
        let status;
        if (winner) {
           status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="main-row">
                    <div className="board-0">
                        <div className="board-row">
                            {this.renderSquare(0,0)}
                            {this.renderSquare(0,1)}
                            {this.renderSquare(0,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(0,3)}
                            {this.renderSquare(0,4)}
                            {this.renderSquare(0,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(0,6)}
                            {this.renderSquare(0,7)}
                            {this.renderSquare(0,8)}
                        </div>
                    </div>

                    <div className="board-1">
                        <div className="board-row">
                            {this.renderSquare(1,0)}
                            {this.renderSquare(1,1)}
                            {this.renderSquare(1,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(1,3)}
                            {this.renderSquare(1,4)}
                            {this.renderSquare(1,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(1,6)}
                            {this.renderSquare(1,7)}
                            {this.renderSquare(1,8)}
                        </div>
                    </div>

                    <div className="board-2">
                        <div className="board-row">
                            {this.renderSquare(2,0)}
                            {this.renderSquare(2,1)}
                            {this.renderSquare(2,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(2,3)}
                            {this.renderSquare(2,4)}
                            {this.renderSquare(2,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(2,6)}
                            {this.renderSquare(2,7)}
                            {this.renderSquare(2,8)}
                        </div>
                    </div>
                </div>
                <div className="main-row">
                    <div className="board-3">
                        <div className="board-row">
                            {this.renderSquare(3,0)}
                            {this.renderSquare(3,1)}
                            {this.renderSquare(3,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(3,3)}
                            {this.renderSquare(3,4)}
                            {this.renderSquare(3,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(3,6)}
                            {this.renderSquare(3,7)}
                            {this.renderSquare(3,8)}
                        </div>
                    </div>

                    <div className="board-4">
                        <div className="board-row">
                            {this.renderSquare(4,0)}
                            {this.renderSquare(4,1)}
                            {this.renderSquare(4,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(4,3)}
                            {this.renderSquare(4,4)}
                            {this.renderSquare(4,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(4,6)}
                            {this.renderSquare(4,7)}
                            {this.renderSquare(4,8)}
                        </div>
                    </div>

                    <div className="board-5">
                        <div className="board-row">
                            {this.renderSquare(5,0)}
                            {this.renderSquare(5,1)}
                            {this.renderSquare(5,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(5,3)}
                            {this.renderSquare(5,4)}
                            {this.renderSquare(5,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(5,6)}
                            {this.renderSquare(5,7)}
                            {this.renderSquare(5,8)}
                        </div>
                    </div>
                </div>
                <div className="main-row">
                    <div className="board-6">
                        <div className="board-row">
                            {this.renderSquare(6,0)}
                            {this.renderSquare(6,1)}
                            {this.renderSquare(6,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6,3)}
                            {this.renderSquare(6,4)}
                            {this.renderSquare(6,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6,6)}
                            {this.renderSquare(6,7)}
                            {this.renderSquare(6,8)}
                        </div>
                    </div>

                    <div className="board-7">
                        <div className="board-row">
                            {this.renderSquare(7,0)}
                            {this.renderSquare(7,1)}
                            {this.renderSquare(7,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(7,3)}
                            {this.renderSquare(7,4)}
                            {this.renderSquare(7,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(7,6)}
                            {this.renderSquare(7,7)}
                            {this.renderSquare(7,8)}
                        </div>
                    </div>

                    <div className="board-8">
                        <div className="board-row">
                            {this.renderSquare(8,0)}
                            {this.renderSquare(8,1)}
                            {this.renderSquare(8,2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(8,3)}
                            {this.renderSquare(8,4)}
                            {this.renderSquare(8,5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(8,6)}
                            {this.renderSquare(8,7)}
                            {this.renderSquare(8,8)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* Status */}</div>
                    <ol>{/* Todo */}</ol>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }