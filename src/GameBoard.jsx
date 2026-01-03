import { useAppropriateContext } from "./GameContext.jsx";

const ScoreBoard = () => {
  const { currScore, endGame } = useAppropriateContext();

  return (
    <div id="scoreboard">
      <p>Score: {currScore}</p>
      <p onClick={endGame}>Restart</p>
    </div>
  )
}

const GameBoard = () => {
  const { moleHoleIdx, handleMoleClick } = useAppropriateContext();

  const moles = [];
  for(let i = 0; i < 9; i++) {
    if(i === moleHoleIdx) {
      moles.push(<div key={`hole${i}`} className="mole" onClick={handleMoleClick}></div>)
    } else {
      moles.push(<div key={`hole${i}`} className="hole"></div>)
    }
  }

  return (
    <>
      <ScoreBoard />
      <div id="gameboard">{moles}</div>
    </>
  )
};

export default GameBoard;
