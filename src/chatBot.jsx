import React from "react";
import { Link } from "react-router-dom";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components";

export class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [], // 回答コンポーネントに表示するデータ
      chatas: [], // チャットコンポーネントに表示するデータ
      currentId: "init", //　現在の質問ID
      dataset: defaultDataset, // 質問と回答のデータセット
      open: false // 問い合わせフォーム用モーダルの開閉を管理
    };
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question"
    });
    this.setState({
      chats: chats,
      currentId: nextQuestionId
    });
  };

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: "answer"
        };
        const chats = this.state.chats;
        chats.push(chat);

        this.setState({
          chats: chats
        });
        break;
    }
  };
  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers
    });
  };

  componentDidMount() {
    this.initChats();
    this.initAnswer();
  }

  render() {
    return (
      <div>
        <section className="c-section">
          <div className="c-box">
            <Chats chats={this.state.chats} />
            <AnswersList answers={this.state.answers} />
          </div>
        </section>
      </div>
    );
  }
}
