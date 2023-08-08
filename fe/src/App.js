
import { Route, Router } from 'react-router-dom';
import './App.css';
import DefaultLayout from './Layout/DefaultLayout/Header';
import { publicPage } from './router';

function App() {

  return (
    <Router>
      <div className="App">
<<<<<<< Updated upstream
      {publicPage.map((router,index)=>{
        const Page = router.component
        const Layout = router.layout||DefaultLayout
        
      })}
    </div>
    </Router>
=======
      <Router>
        <Routes>
          {publicPage.map((router, index) => {
            console.log(index);
            const Page = router.component;
            const Layout = router.layout || DefaultLayout;
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      </div>
    </Fragment>
>>>>>>> Stashed changes
  );
}

export default App;
