import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <h1>welcome to react.js</h1>
      <form>name="rakesh" loc="hyd" mobno.="9944432322"</form>
      <div className="react-button-container">
        <Button />
      </div>
      <div className="button-container">
        <button className="submit-button">submit</button>
        <button className="cancel-button">cancel</button>
        <button className="back-button">back</button>
      </div>
    </div>
  );
}

export default App;
