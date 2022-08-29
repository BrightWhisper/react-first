import React from "react"

class DigitalClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      count: 0,
    }
  }

  componentDidMount() {
    // this.timer = setInterval(() => {
    //   this.setState({ date: new Date() })
    // }, 1000)
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(prevProps, prevState, snapShot)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  add() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="digital-clock-component jumbotron">
        <button onClick={() => this.add()}>{this.state.count}</button>
        <h1>{this.state.date && this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default DigitalClock
