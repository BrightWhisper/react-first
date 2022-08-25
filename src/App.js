import logo from "./logo.svg"
import "./App.css"
import DigitalClock from "./components/DigitalClock"
// import LikesButton from "./components/LikeButton"
// import NameCard from "./components/NameCard"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DigitalClock />
        {/* <NameCard
          name="viking"
          number={3456782342342}
          isHuman
          tags={["挺好", "不错", "还行"]}
        ></NameCard> */}
      </header>
    </div>
  )
}

export default App
