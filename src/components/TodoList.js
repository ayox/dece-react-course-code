import React from "react";

import { List, Input, Button } from "antd";

export default function TodoList() {
  const [list, setList] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const inputRef = React.useRef();
  function addTodo() {
    const newList = [...list, todo];
    setList(newList);
    setTodo("");
    inputRef.current.focus();
  }
  return (
    <div>
      <Input
        style={{ width: 200, margin: 20 }}
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo"
      />

      <Button onClick={addTodo} type="primary">
        {" "}
        Add Todo
      </Button>

      <List
        bordered
        dataSource={list}
        renderItem={(item) => <TodoItem item={item} />}
      />
    </div>
  );
}

function TodoItem(props) {
  const [done, setDone] = React.useState(false);
  return (
    <List.Item
      style={{ textDecoration: done ? " line-through" : "none" }}
      onClick={() => {
        setDone(!done);
      }}
    >
      {props.item}
    </List.Item>
  );
}
