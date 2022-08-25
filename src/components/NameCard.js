import React from "react"

// 纯函数和非纯函数
// 纯函数不改变函数的输入值，当输入值相同时，总是返回相同的结果
// 非纯函数会改变函数的输入值
// 在react中必须像纯函数一样使用它们的props，是不可修改的
 
// 组件的函数写法
const NameCard = (props) => {
  let { name, number, isHuman, tags } = props
  name = '234234'
  return (
    <div className="alert alert-success">
      <h4 className="alert-heading">{name}</h4>
      <ul>
        <li>电话：{number}</li>
        <li>{isHuman ? "人类" : "外星生物"}</li>
        <hr />
        <p>
          {tags.map((tag, index) => {
            return (
              <span key={index} className="badge rounded-pill bg-primary">
                {tag}
              </span>
            )
          })}
        </p>
      </ul>
    </div>
  )
}

// 组件的类写法
// class NameCard extends React.Component {
//   render() {
//     const { name, number, isHuman, tags } = this.props
//     return (
//       <div className="alert alert-danger">
//         <h4 className="alert-heading">{name}</h4>
//         <ul>
//           <li>电话：{number}</li>
//           <li>{isHuman ? "人类" : "外星生物"}</li>
//           <hr />
//           <p>
//             {tags.map((tag, index) => {
//               return (
//                 <span key={index} className="badge rounded-pill bg-primary">
//                   {tag}
//                 </span>
//               )
//             })}
//           </p>
//         </ul>
//       </div>
//     )
//   }
// }

export default NameCard
