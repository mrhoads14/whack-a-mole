import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [prevScores, setPrevScores] = useState([33, 11]);
  const [gameOn, setGameOn] = useState(false);
  const [currScore, setCurrScore] = useState(0);

  const toggleGame = () => {
    setGameOn(!gameOn);
  }

  const value = {
    gameOn,
    prevScores,
    setPrevScores,
    toggleGame
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
