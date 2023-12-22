import { Box, Button, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

const SButton = styled(Button)({
  width: "200px",
  height: "200px",
  backgroundColor: "black",
  border: "1px solid white",
  borderRadius: "none",
  fontSize: "200px",
  color: "white",
  ":hover": {
    backgroundColor: "black",
  },
});

export default function Game() {
  const [state, setState] = useState(0);
  const [score, setScore] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const checkWinner = (score) => {
    if (
      (score[0][0] === score[1][1] && score[1][1] === score[2][2]) ||
      (score[0][0] === score[0][1] && score[0][1] === score[0][2]) ||
      (score[0][0] === score[1][0] && score[1][0] === score[2][0])
    ) {
      // xxx
      // xx.
      // x.x
      return score[0][0];
    }
    if (score[0][1] === score[1][1] && score[1][1] === score[2][1]) {
      // .x.
      // .x.
      // .x.
      return score[0][1];
    }
    if (
      (score[0][2] === score[1][1] && score[1][1] === score[2][0]) ||
      (score[0][2] === score[1][2] && score[0][2] === score[2][2])
    ) {
      // ..X
      // .XX
      // X.X
      return score[0][2];
    }
    if (score[2][2] === score[2][1] && score[2][2] === score[2][0]) {
      // ...
      // ...
      // XXX
      return score[2][2];
    }
    if (score[1][1] === score[1][0] && score[1][1] === score[1][2]) {
      // ...
      // XXX
      // ...
      return score[1][1];
    }
    return "";
  };

  useEffect(() => {
    const winner = checkWinner(score);
    if (winner !== "") {
      const name = winner === "X" ? "Player One" : "Player Two";
      setTimeout(() => {
        alert(`${name} Wins!!`);
        setScore([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ]);
        setState(0);
      }, 200);
    } else {
      if (state == 9) {
        alert("Draw");
        setTimeout(() => {
          setScore([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setState(0);
        }, 100);
      }
    }
  }, [state]);

  const handleClick = (a, b) => {
    if (score[a][b] == "") {
      if (state % 2 === 0) {
        setScore((old) => {
          old[a][b] = "X";
          return old;
        });
      } else {
        setScore((old) => {
          old[a][b] = "O";
          return old;
        });
      }
      setState(state + 1);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <SButton onClick={() => handleClick(0, 0)}>{score[0][0]}</SButton>
          <SButton onClick={() => handleClick(0, 1)}>{score[0][1]}</SButton>
          <SButton onClick={() => handleClick(0, 2)}>{score[0][2]}</SButton>
        </Box>
        <Box>
          <SButton onClick={() => handleClick(1, 0)}>{score[1][0]}</SButton>
          <SButton onClick={() => handleClick(1, 1)}>{score[1][1]}</SButton>
          <SButton onClick={() => handleClick(1, 2)}>{score[1][2]}</SButton>
        </Box>
        <Box>
          <SButton onClick={() => handleClick(2, 0)}>{score[2][0]}</SButton>
          <SButton onClick={() => handleClick(2, 1)}>{score[2][1]}</SButton>
          <SButton onClick={() => handleClick(2, 2)}>{score[2][2]}</SButton>
        </Box>
      </Box>
    </>
  );
}
