import React from "react"

// state指的是react组件内部的状态
// 改变state的唯一方式是使用this.setState,不能直接修改state
class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0,
    }
  }
  increaseLikes() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <div className="likes-button-component">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={() => this.increaseLikes()}
        >
          {this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikeButton
