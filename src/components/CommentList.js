import React from "react"

class CommontList extends React.Component {
  constructor(props) {
    super(props)
    this.dBtn = {
      display: "inline-block",
    }
  }

  render() {
    return (
      <div className="comment-list-component">
        <label>评论列表</label>
        <ul className="list-group mb-3">
          {this.props.comments.map((comment, index) => {
            return (
              <div key={index}>
                <li className="list-group-item" style={this.dBtn}>
                  {comment}
                </li>
                <button onClick={() => this.props.delBtn(index)}>
                  删除
                </button>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default CommontList
