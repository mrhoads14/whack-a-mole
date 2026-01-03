import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [prevScores, setPrevScores] = useState([]);
  const [gameOn, setGameOn] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  // const [timeLeft, setTimeLeft] = useState(15);
  const [moleHoleIdx, setMoleHoleIdx] = useState(Math.floor(Math.random() * 9));

  const startGame = () => {
    // setTimeLeft(15);
    moveMole();
    setCurrScore(0);
    setGameOn(true);
  }

  const endGame = () => {
    if (currScore > 0) {
      const newScores = [...prevScores];
      newScores.push(currScore);
      newScores.sort((a, b) => b - a);
      setPrevScores(newScores);
    }
    setGameOn(false);
  }

  const moveMole = () => {
    const newHoles = [];
    for(let i = 0; i < 9; i++) {
      if(i !== moleHoleIdx) {
        newHoles.push(i);
      }
    }
    setMoleHoleIdx(newHoles[Math.floor(Math.random() * newHoles.length)])
  }

  const handleMoleClick = () => {
    moveMole();
    setCurrScore(currScore + 1);
  }

  const value = {
    gameOn,
    prevScores,
    startGame,
    endGame,
    currScore,
    moleHoleIdx,
    handleMoleClick
  }

  return <GameContext.Provider value={value}>{ children }</GameContext.Provider>
};

export const useAppropriateContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw Error("useAppropriateContext must be used within a GameProvider");
  }
  return context;
};
