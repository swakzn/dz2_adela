import React from "react";

class Squares extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            block1: 'red',
            block2: 'blue'
        };
    }

    toggleBlocks = () => {
        this.setState((prevState) => ({
            block1: prevState.block1 === 'red' ? 'blue' : 'red',
            block2: prevState.block2 === 'blue' ? 'red' : 'blue'
        }));
    };

    render() {
        return (
            <div className="App">
                <div
                    className="square"
                    style={{ backgroundColor: this.state.block1 }}
                    onClick={this.toggleBlocks}
                ></div>
                <div
                    className="square"
                    style={{ backgroundColor: this.state.block2 }}
                    onClick={this.toggleBlocks}
                ></div>
            </div>
        );
    }
}

export default Squares;