
import { Route, Router } from 'react-router-dom';
import './App.css';
import DefaultLayout from './Layout/DefaultLayout/Header';
import { publicPage } from './router';

function App() {

  return (
    <Router>
      <div className="App">
      {publicPage.map((router,index)=>{
        const Page = router.component
        const Layout = router.layout||DefaultLayout
        
      })}
    </div>
    </Router>
  );
}

export default App;
