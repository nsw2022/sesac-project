import logo from "./logo.svg";
import "./App.css";
import { func } from "prop-types";

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  console.log("props", props.topics.title);
  console.log("이벤트 췍");
  const lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "js", body: "js is..." },
  ];

  return (
    <div className="App">
      <Header
        title="REACT"
        onChangeMode={function () {
          alert("ㅎㅇ");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      />
      <Article title="Welcome" body="Hello Web" />
      <Article title="Hi" body="Hello React" />
    </div>
  );
}

export default App;
