import React from 'react';




let flexBoxGame = {
display: "flex",
alignItems: "center",
justifyContent: "center",
alignContext: "center",
flexDirection: "column",
flexWrap: "wrap",
alignContent: "center",
height: "50%",
width: "50%",
margin: "auto",
};

let flexBoxSwitch = {
display: "flex",
alignItems: "center",
justifyContent: "center",
alignContext: "center",
flexDirection: "column",
flexWrap: "wrap",
alignContent: "center",
width: "50%",
height: "50%",
margin: "auto"
};

let switchButtonStyle = {
display: "flex",
alignItems: "center",
justifyContent: "center",
alignContext: "center",
flexDirection: "column",
flexWrap: "wrap",
alignContent: "center",
width: "150px",
height: "150px",
textAlign: "center",
border: "0,5",
color: "black",
fontWeight: "bold",
backgroundColor: "#00FFFF"
};

let gameButtonStyle = {
color: "black",
backgroundColor: "#008B8B",
width: "150px",
height: "150px",
textAlign: "center",
border: "0,5",
fontWeight: "bold"
}



class GameBoardCell extends React.Component {
    handleClick(cellState){

        let message = cellState ? "hit" : "miss";
        alert(message);
        return(message);
    }

  render(){
    return (
      <button style={gameButtonStyle} onClick={this.handleClick.bind(this, this.props.state) }>GameBoardCell</button>
    )
  }
}

class SwitchBoardCell extends React.Component {
  render(){
    let state = this.props.state;
    let index = this.props.index;
    return (
      <button style={switchButtonStyle} onClick={ this.props.toggleState.bind(this, index) }>{ this.props.state ? 'on' : 'off' }</button>
    )
    }
}

class Game extends React.Component {
  constructor(props){
        super(props);
        this.state = {
            board: [0,1,0,1,0,1,0,1]
        }
    }

    toggleState(index){
        console.log(index);
        let board = this.state.board;
        board[index] = !board[index];
        this.setState({board})
    }

  render(){     
    let board = this.state.board;
    
    return (
      
      <section className="game" backgroundImage= "url"("http://i.telegraph.co.uk/multimedia/archive/00429/travel-graphics-200_429074a.jpg")>
      <h1>Battleship. At least, that is what it once will be. </h1>
          <section className="gameboard" style= {flexBoxGame}>
            { board.map((value, index) => <GameBoardCell key={ index } index={ index } state={ value }/>) }
          </section>
          <section className="switchboard" style={flexBoxSwitch}>
            { board.map((value, index) => <SwitchBoardCell toggleState={ this.toggleState.bind(this) } key={ index } index={ index } state={ value }/>) }
          </section>        
        </section>
        
    )
  }
}

React.render(<Game />, document.body);