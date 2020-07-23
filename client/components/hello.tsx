import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  name: string;
}

export default function Hello({name} : Props) {
    const [words, setWords] = useState("");
  return (
    <div>
        <h1>Hello {name}</h1>
        <h3>{words}</h3>
        <TextField
        id="standard-words"
        value={words}
        onChange={(e) => setWords(e.target.value)}
        style={{ width: 100 }}
        >
        </TextField>
    </div>
  );
}