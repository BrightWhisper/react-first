import React from "react"

// jsx中需要把class属性改为className,for属性改为htmlFor
// jsx会被babel转义为React.createElement的形式
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bk">Hello React</h1>
        {[1, 2, 3].map((item) => {
          return <div key={item}>{item}</div>
        })}
      </div>
    )
  }
}

export default Welcome
