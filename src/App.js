import React from 'react';

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
  return (
    <div>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>meou!</div>
}

export default App;
