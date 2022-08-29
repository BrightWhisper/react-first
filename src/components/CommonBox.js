import React from "react"

// 受控组件:
// 受react state完全控制的表单组件，被称为受控组件
// 受控组件有时会很繁琐,而非受控组件就是不受state控制，直接控制dom

// 受控组件
// class CommonBox extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { value: "" }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value })
//   }
//   handleSubmit(event) {
//     alert(this.state.value)
//     event.preventDefault()
//   }
//   render() {
//     return (
//       <form className="p-5" onSubmit={this.handleSubmit}>
//         <div className="form-group">
//           <label>留言内容</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="请输入内容"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           留言
//         </button>
//       </form>
//     )
//   }
// }

// 非受控组件
// 非受控组件，表单的状态在DOM中，更容易集成react和非react代码
class CommonBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    this.props.onAndComments(this.textInput.value)
    this.textInput.value = ''
    console.log(this.textInput.value)
    event.preventDefault()
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            ref={(textInput) => {
              this.textInput = textInput
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          留言
        </button>
        <p>已有{this.props.commentsLength}条评论</p>
      </form>
    )
  }
}

export default CommonBox
