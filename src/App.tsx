import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "きゅん",
  hobbies: ["食べること", "サッカーの試合をYoutubeで見ること"],
};

const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="mt-4">
      <UserProfile user={user} />
      <Text color="red" fontSize="20px">
        Yes!
      </Text>
      <button
        className="bg-red-400 p-4 rounded-xl text-white block mx-auto m-8 "
        onClick={onClickFetchData}
      >
        データ取得
      </button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default App;
