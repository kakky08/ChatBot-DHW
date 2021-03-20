import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const onClickChatBot = () => history.push("./chatBot/");
  return (
    <div>
      <h1>Homeページです。</h1>
      <button onClick={onClickChatBot}>診察を始める</button>
    </div>
  );
};
