import React from 'react';
import PropTypes from 'prop-types';

// ↓クラスコンポーネント
// class App extends Component {
//   render() {
//     return <div>Hello World!!</div>;
//   }

//   // classはjsの予約語なので、classNameに置き換えて、DOMを書く

//   // render() {
//   //   const greeting = "Hi!";
//   //   const dom = <div className="foo">{greeting}</div>;
//   //   return dom;
//   // }

//   // jsxを使わない場合
//   // render() {
//   //   return React.createElement(
//   //     "div",
//   //     null,
//   //     "Hello World!!"
//   //   )
//   // }
// }

// 関数コンポーネント
const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "string" }
  ]
  return (
    // <div>
    //   <User name={"tarou"} age={10}/>
    // </div>
    profiles.map((profile, index) => {
      return <User name={profile.name} age={profile.age} key={index}/>
    })
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! and {props.age} years old!</div>
}

// User.defaultProps = {
//   age: 1
// }
// // 型を定義する
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

export default App;
