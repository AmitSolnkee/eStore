import './App.css';
import CatNav from './Component/CatNav';
import { Header } from './Component/Header';
import MainComponent from './Component/MainComponent';


function App() {
  return (
    <div className="App">
     <Header/>
     <CatNav/>
     <MainComponent/>
    </div>
  );
}

export default App;
