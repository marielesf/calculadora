import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: "",
  };

  menos = () => {
    let { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 - n2,
      });
    }
  };

  mais = () => {
    let { n1, n2 } = this.state;
    if (n1 && n2 !== "") {
      this.setState({
        result: n1 + n2,
      });
    }
  };

  div = () => {
    this.setState({
      result: this.state.n1 / this.state.n2,
    });
  };

  multi = () => {
    this.setState({
      result: this.state.n1 * this.state.n2,
    });
  };

  limpar = () => {
    this.setState({
      result: "",
      n1: "",
      n2: "",
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value),
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value),
    });
  };

  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <input onChange={this.handleChange1} value={this.state.n1} />
        <input onChange={this.handleChange2} value={this.state.n2} />
        <button onClick={this.div}>/</button>
        <button onClick={this.multi}>*</button>
        <button onClick={this.menos}>-</button>
        <button onClick={this.mais}>+</button>
        <button onClick={this.limpar}>Limpar</button>

        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default App;
