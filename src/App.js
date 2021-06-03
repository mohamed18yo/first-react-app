
import './App.css';

import FirstComponent from './components/firstComponent/firstComponent'
function App() {
  return (
    <div className="App">
      <FirstComponent title={"first component"}>
        some content to try children case 
      </FirstComponent>
      
    </div>
  );
}

export default App;
