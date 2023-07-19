import "./App.scss";
import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Philosophy from "./components/Philosophy/Philosophy";
import StartScreen from "./components/StartScreen/StartScreen";

export default function App() {
  return (
    <div className="App">
      <StartScreen />
      <About />
      <Philosophy />
      <Location />
      <Feedback
        name="богдан стадник"
        position="учасник"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. ”"
      />
      <Gallery />
      <Feedback
        name="богдан стадник"
        position="учасник"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. ”"
      />
    </div>
  );
}
