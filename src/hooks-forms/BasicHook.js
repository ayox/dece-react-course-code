import React, { useState, useEffect } from "react";
import { useTitle } from "../hooks";

export default function ExampleFn() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  useTitle(`You clicked ${count} times`)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me2 {count}</button>

    </div>
  );
}


export class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentWillUnmount(){
        document.title = `REact APp`
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
            </div>
        );
    }
}