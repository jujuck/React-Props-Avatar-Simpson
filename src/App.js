import './App.css';
import Data from './data.js';


const Avatar = props => {
  const {firstName, lastName, avatarImg} = props
  return (<div>
    <h1>{firstName}</h1>
    <h2>{lastName}</h2>
    <img src={avatarImg} alt=""></img>
  </div>)
}

function App() {
  const dataz = Data.map(data => <Avatar {...data}/>)

  return (
    <div className="App">
      <h1>Hello World</h1>
      {dataz}
    </div>
  );

}

export default App;
