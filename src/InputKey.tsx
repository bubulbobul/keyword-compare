import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { KeyWordsType } from "./App";

const InputKey = ({
  setKeyword,
  keyword: { key_1, key_2 },
}: {
  keyword: KeyWordsType;
  setKeyword: Dispatch<SetStateAction<KeyWordsType>>;
}) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setKeyword({ [e.target.name]: e.target.value } as KeyWordsType);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0 auto",
        width: "70vw",
      }}
    >
      <label htmlFor="key_1">First word</label>
      <input value={key_1} name="key_1" onChange={(e) => handleInput(e)} />
      <label htmlFor="key_2">Second word</label>
      <input value={key_2} name="key_2" onChange={(e) => handleInput(e)} />
    </div>
  );
};

export default InputKey;
