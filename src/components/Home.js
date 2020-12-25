import React from "react";
import { Button } from "antd";
import LoginForm from "./LoginForm";
import TodoList from "./TodoList";
import { useTitle } from "../hooks";
export default function Home() {
  const [count, setCount] = React.useState(0);
  useTitle("Home",[count]);

  return (
    <div>
      {/* <h1>Home Page</h1>
      Welcome to our website
      <Button onClick={ToggleLoading}>toggle Loading</Button>
      <Button loading={loading} type="primary">Button</Button>
      <LoginForm/> */}
      <button onClick={() => setCount(count + 1)}>Click me{count}</button>

      <TodoList />
    </div>
  );
}
