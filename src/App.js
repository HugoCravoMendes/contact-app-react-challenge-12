import logo from './logo.svg';
import './App.css';
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
     <Contact
      name="Anita Sword"
      online={true}
      avatar="https://avatarfiles.alphacoders.com/121/121629.jpg"
    />
    </div>
  );
}

export default App;
