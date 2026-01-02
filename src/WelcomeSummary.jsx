import { useAppropriateContext } from "./GameContext.jsx";

const WelcomeSummary = () => {
  const { prevScores, toggleGame } = useAppropriateContext();

  return (
    <>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={toggleGame}>Play</button>
      <h2>High Scores</h2>
      <ul>
        {
          prevScores.map((eachScore, idx) => {
            return <li key={idx}>{eachScore}</li>;
          })
        }
      </ul>
    </>
  )
};

export default WelcomeSummary;
