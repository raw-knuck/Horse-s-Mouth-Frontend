import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import theme from './styles/themes/Main'
import { ThemeProvider } from '@material-ui/styles';
import Firebasestate from './contexts/firebaseauth/firebasestate';

function App() {
  
  return (
    <>
    <Firebasestate>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </ThemeProvider>
    </Firebasestate>
    </>
  );
}

export default App;
