import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BGImage from "./assets/images/bg-gradient.png";

function App() {
	return (
		<>
			<img
				src={BGImage}
				alt="background"
				className="absolute z-0 top-0 blur-3xl"
			/>

			<div className="z-10 absolute top0 w-full">
				<Navbar />
			</div>
		</>
	);
}

export default App;
