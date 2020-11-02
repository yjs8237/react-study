import { Fragment, useRef, useState } from "react";
import Hello from "./Hello";
import "./App.css";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  let name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fintSize: 12,
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "jisang",
      email: "aaa@emart.com",
    },
    {
      id: 2,
      username: "jisang2",
      email: "aaa@emart.com2",
    },
  ]);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers(users.concat(user));
    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current);
    nextId.current += 1;
  };

  
  

  return (
    <Fragment>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </Fragment>
    // 주석
    /* 주석 어쩌고 저쩌고 */
    /*
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="blue" />
    </Wrapper>
    */
    /*
    <Counter />
    */

    /*
    <InputSample />
    */
  );
}

export default App;
