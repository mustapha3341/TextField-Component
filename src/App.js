import TextField from "./TextField/TextField";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Text Field Component</h1>
      <p>
        Building a text field component that accomodates more functionalities
      </p>
      <TextField>
        <TextField.Icon></TextField.Icon>
        <TextField.Input></TextField.Input>
      </TextField>
    </div>
  );
}
