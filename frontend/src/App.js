import { ThemeProvider } from '@material-ui/core';
import Option from './components/Home/Options/Option';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './components/Home/Onboarding/Onboarding';
import Faq from './components/Faqs';
import Analytics from './components/Analytics';
import Hero from './components/Home/Hero/Hero';
import Chatbot from './chatbot/Chatbot';
import Register from './components/Register';
import Signup from './components/Signup';
import Login from './components/Login';
import Otp from './components/Otp';
import Create from './components/Create/Create';

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#90caf9'
    },
    secondary: {
      main: '#f48fb1'
    },
    background: {
      default: '#212121',
      paper: '#424242'
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
};

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={themeOptions}> */}
      {/* <Register /> */}
      <Signup />
      <Otp />
      <Login />
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/options" element={<Option />} />
          <Route exact path="/onboarding" element={<Onboarding />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>

        {/* </ThemeProvider> */}
        <div className="bot">
          <Chatbot />
        </div>
      </Router>
    </div>
  );
}

export default App;
