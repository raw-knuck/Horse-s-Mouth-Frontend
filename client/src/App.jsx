import './App.scss';
import {
  Routes,
  Route,

} from "react-router-dom";
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import theme from './styles/themes/Main'
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <>
    <ThemeProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
