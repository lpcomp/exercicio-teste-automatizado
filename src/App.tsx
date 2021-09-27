import "./styles/global.scss";
import { Multiples } from "./pages/multiples/multiples";
import { HappyNumbers } from "./pages/happyNumbers/happyNumbers";
import { WordsInNumbers } from "./pages/wordsInNumbers";
import { ScreenCart } from "./pages/freightCalculation";

function App() {
  return (
    <div className="App">
      <Multiples />
      <HappyNumbers />
      <WordsInNumbers />
      <ScreenCart />
    </div>
  );
}

export default App;
