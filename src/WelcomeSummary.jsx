import { useAppropriateContext } from "./GameContext.jsx";

const WelcomeSummary = () => {
  const { prevScores, startGame } = useAppropriateContext();

  return (
    <div id="welcome">
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={startGame}>Play</button>
      <h2>High Scores</h2>
      {prevScores.length > 0 ?
        <ul>
          {
            prevScores.map((eachScore, idx) => {
              return <li key={`score${idx}`}>{eachScore}</li>;
            })
          }
        </ul> :
        <p>None yet; play the game!</p>}
    </div>
  )
};

export default WelcomeSummary;
