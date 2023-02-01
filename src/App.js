import './App.css';
import { Home } from './components/pages/Home/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import { Title } from './components/atoms/Title/Title';
import { Activity } from './components/pages/Activity/activity';
import ErrorPage from './components/pages/ErrorPage/error_page';
import { Jackpot } from './components/pages/Jackpot/jackpot.jsx';
import { Provider } from 'react-redux';
import {store} from './store/index.js';
import Login from './components/pages/Auth/Auth';
import useToken from './components/hooks/userToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function App() {

  const { token, setToken } = useToken();

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Root />,
      errorElement: <ErrorPage />
    },
    {
      path : "activity",
      element : <Activity />
    },
    {
      path : "home",
      element : <Home />
    },
    {
      path : "jackpot",
      element : <Jackpot />
    }
  ]);

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Provider store={store}>
        <Title title="Manager"></Title>

        <Root></Root>
        
        <div className="body">
          <RouterProvider 
            router={router}
          />
        </div>

      </Provider>


      <style jsx="true">{`
        .body {
          display: flex;
          flex-direction: column;
        }
      `}
      </style>
    </div>
  );
}

export default App;
