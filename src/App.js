import React from "react"
import logo from "./logo.svg"
import "./App.css"
import CommentList from "./components/CommentList"
import CommonBox from "./components/CommonBox"
import ThemeContext from "./theme-context"
import ThemeBar from "./components/ThemeBar"
import CommonBorder from "./components/commonBorder"

const themes = {
  light: {
    classnames: "btn btn-primary",
    bgColor: "#eeeeee",
    color: "#000",
  },
  dark: {
    classnames: "btn btn-light",
    bgColor: "#222222",
    color: "#fff",
  },
}

// import DigitalClock from "./components/DigitalClock"
// import LikesButton from "./components/LikeButton"
// import NameCard from "./components/NameCard"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ["this is my first replay"],
      theme: "light",
    }
  }

  onAndComments(comment) {
    this.setState({ comments: [...this.state.comments, comment] })
  }

  delBtn(index) {
    let arrs = this.state.comments
    arrs.splice(index, 1)
    this.setState({ comments: arrs })
  }

  render() {
    // const { comments } = this.state

    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <CommonBorder>
              <div>23456</div>
            </CommonBorder>
            {/* <a
              href="#theme-switcher"
              className="btn btn-light"
              onClick={() => this.setState({ theme: "light" })}
            >
              浅色主题
            </a>
            <a
              href="#theme-switcher"
              className="btn btn-dark"
              onClick={() => this.setState({ theme: "dark" })}
            >
              深色主题
            </a>
            <ThemeBar /> */}
            {/* <NameCard
          name="viking"
          number={3456782342342}
          isHuman
          tags={["挺好", "不错", "还行"]}
        ></NameCard> */}
            {/* <CommentList
            comments={comments}
            delBtn={(index) => this.delBtn(index)}
          />
          <CommonBox
            commentsLength={comments.length}
            onAndComments={(comment) => this.onAndComments(comment)}
          /> */}
          </header>
        </div>
      </ThemeContext.Provider>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <NameCard
//           name="viking"
//           number={3456782342342}
//           isHuman
//           tags={["挺好", "不错", "还行"]}
//         ></NameCard> */}
//       </header>
//     </div>
//   )
// }

export default App
