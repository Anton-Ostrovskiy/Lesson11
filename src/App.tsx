
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addCash, addUsers, changeUsername, getCash, removeUsers } from "./store/reducers";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state: RootState) => state.cash.cash);
  const nick = useSelector((state: RootState) => state.nick.username);
  const users = useSelector((state: RootState) => state.users.users);
  const store = useStore();

  console.log(store.getState());

  const addCashs = (cash: number) => {
    dispatch(addCash(cash));
  };

  const getCashs = (cash: number) => {
    dispatch(getCash(cash));
  };

  const changeNick = (nick: string) => {
    dispatch(changeUsername(nick));
  };

  const addUser = (user: string) => {
    dispatch(addUsers(user));
  };

  const removeUser = (user: string) => {
    dispatch(removeUsers(user));
  };

  return (
    <div className='App'>
      <div>{cash}</div>
      <div>{nick}</div>
      <div>
        <button onClick={() => changeNick(prompt("Введите ник") || "Any")}>
          Сменить ник
        </button>
        <button onClick={() => addCashs(Number(prompt("Введите сумму")))}>
          Положить деньги
        </button>
        <button onClick={() => getCashs(Number(prompt("Введите сумму")))}>
          Снять деньги
        </button>
        <button onClick={() => addUser(prompt("Введите сумму") || "Any user")}>
          Добавить юзера
        </button>
      </div>
      {users.map((user: string, index) => {
        return (
          <div
            key={index}
            style={{ padding: "10px" }}
            onClick={() => {
              console.log('hi');
              
              removeUser(user);
            }}>
            {user}
          </div>
        );
      })}
    </div>
  );
}

export default App;
