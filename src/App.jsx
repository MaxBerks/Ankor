import "./App.scss"
import About from "./components/About/About"
import Location from "./components/Location/Location"
import Philosophy from "./components/Philosophy/Philosophy"
import StartScreen from "./components/StartScreen/StartScreen"

export default function App() {
	return <div className="App">
		<StartScreen />
		<About />
		<Philosophy />
		<Location />
	</div>
}
