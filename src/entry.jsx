import React from 'react';

var tdStyle = {
  backgroundColor:"Blue",
  color: "white",
  fontWeight:"bold",
  textAlign: "center",
};

var changeStyle ={
    color: "white",
    backgroundColor:"green",
    width: "60px",
    height:"60px",
    fontWeight: "bold",
    border: "none",
    textAlign: "center",
};

var EditableCell = React.createClass({
    getInitialState: function () {
        return { 
            isEditMode: false,
            data: ""
        };
    },
    componentWillMount: function () {
        this.setState({
            isEditMode: this.props.isEditMode,
            data: this.props.data
        });
    },
    handleClick: function (e) {
        this.setState({isEditMode: true});
        this.setState({data: "Miss!"});
        alert("You missed the boat!");
    },

 
    render: function () {
        var BasicCell;
        if (this.state.isEditMode) {
            BasicCell = <input value={this.state.data} style={changeStyle}/>
        }
        else {
            BasicCell = <div onClick={this.handleClick}>{this.state.data}</div>
        }
        return (
            <td style={tdStyle} height="60" width="60" >{EditableCell}</td>
            );

    }
});

var Positions = React.createClass({
    render: function() {
        return (
            <tr>
                <EditableCell data={this.props.A}/>
                <EditableCell data={this.props.B}/>
                <EditableCell data={this.props.C}/>
                <EditableCell data={this.props.D}/>
            </tr>
            );
    }
});

var Grid = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
   render: function() {
       var positions = this.state.data.map(function (position) {
           return <Positions
           A={position.A}
           B={position.B}
           C={position.C}
           D={position.D}/>;
        });
    return (
    <tbody>{positions}</tbody>
    );
   }
});

React.render(
    <table>
        <thead>
            <tr>
                <th></th> <th></th> <th></th> <th></th>
                <th></th> <th></th> <th></th> <th></th>
                <th></th> <th></th> <th></th> <th></th>
                <th></th> <th></th> <th></th> <th></th>
            </tr>
        </thead>
        <Grid data={[{"A":"sea","B":"sea","C":"sea","D":"sea"},{"A":"sea","B":"sea","C":"sea","D":"sea"},{"A":"sea","B":"sea","C":"sea","D":"sea"},{"A":"sea","B":"sea","C":"sea","D":"sea"}]} />
     </table>,
    document.body
);


//Well, I guess it went wrong when i tried to make the 'hit' option work. Your cells 
//should either has a state of on or off. Can't seem to figure out how
//to change that. Plus, I was finding it really hard to get started, so I
// looked at the assignment Wiha made, to see if it would get clearer to made
// in some ways it did, in others it confused me more, when i took little parts
//to get started, it gave me loads of syntax errors in the terminal,
//some of them i understood, since you're taking pieces from a bigger unit,
//but some of them where magic to me, even when I simplified it. 
//Guess I', just not far enough with react yet, to make something big like this.
//I'll obviously work on that in the next week

//Plus, in the last 3 hours I've broken far more than I made, and I can't
//seem to fix it. So I'll stop for today, this only leave me frustrated.