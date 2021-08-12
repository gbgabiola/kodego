import logo from '../logo.svg';
import '../App.css';
import Timer from './Timer';
import DisplayList from './DisplayList';

const Main = () => {
  return (
    <div>
      <div className="App">
        <img src={logo} alt="logo" className="App-logo" />
      </div>
      <Timer />
      <DisplayList />
    </div>
  );
};

export default Main;
