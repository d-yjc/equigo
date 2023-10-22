import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Newsfeed from './Newsfeed'
import Stats from './Stats'
import StockAlpha from './StockAlpha'
function App() {
  return (
    <div className="App">
      {}

      <div className = "app__header">
        <Header/>
      </div>

      <div className = "app__body">
        <div className = "app__container">
          <Newsfeed/> 
          
          <Stats>
            
          </Stats>
          
        </div>
      </div>
      {}
    </div>
  );
}

export default App;
