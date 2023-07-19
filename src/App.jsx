import "./App.scss";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Philosophy from "./components/Philosophy/Philosophy";
import Registration from "./components/Registration/Registration";
import StartScreen from "./components/StartScreen/StartScreen";
import TripInfo from "./components/TripInfo/TripInfo";

export default function App() {
	return (
		<div className="App">
			<StartScreen />
			<TripInfo text="Заїзд 2020, Карпати" />
			<About />
			<Philosophy />
			<TripInfo text="Заїзд 2019, Карпати" />
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
			<Registration />
			<Feedback
				name="богдан стадник"
				position="учасник"
				text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. ”"
			/>
			<Contacts />
			<Footer />
		</div>
	);
}
