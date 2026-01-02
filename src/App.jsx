import { useAppropriateContext } from "./GameContext.jsx";
import GameBoard from "./GameBoard.jsx";
import WelcomeSummary from "./WelcomeSummary.jsx";

export default function App() {
  const { gameOn } = useAppropriateContext();
  return (
    <>
      <h1>Whack a Mole</h1>
      {
        gameOn ?
        <GameBoard /> :
        <WelcomeSummary />
      }
    </>
  )
}
