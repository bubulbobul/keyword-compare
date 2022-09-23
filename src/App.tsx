import React from "react";
import "./App.css";
import InputKey from "./InputKey";

export type KeyWordsType = {
  key_1: string;
  key_2: string;
}

function App() {
  const [keyword, setKeyword] = React.useState<KeyWordsType>({
    key_1: "",
    key_2: "",
  });

  return <div className="App">
  <InputKey keyword={keyword} setKeyword={setKeyword} />
  </div>;
}

export default App;
