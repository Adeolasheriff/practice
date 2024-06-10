import './App.css';
import Nav from './components/nav';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.css';
import Storage from './storage';



function App() {
  return (
   
    <div>
      <Nav/>
   <Main/>
   <Storage/>
    </div>
  );
}

export default App;
