import React from "react"

class DigitalClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: new Date(),
    }
  }

  render() {
    return (
      <div className="digital-clock-component jumbotron">
        <h1>{this.state.data.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default DigitalClock
