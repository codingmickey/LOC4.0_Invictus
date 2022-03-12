import { ThemeProvider } from '@material-ui/core';
import Option from './components/Home/Options/Option';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Onboarding from './components/Home/Onboarding/Onboarding';
import Faq from './components/Faqs';
import Analytics from './components/Analytics';
import Hero from './components/Home/Hero/Hero';
import Chatbot from './chatbot/Chatbot';

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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/options">Options</Link>
              </li>
              <li>
                <Link to="/onboarding">Onboarding</Link>
              </li>
              <li>
                <Link to="/analytics">analytics</Link>
              </li>
              {/* <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li> */}
            </ul>
          </nav>
          <Routes>
            <Route exact path="/options" element={<Option />} />
            <Route exact path="/onboarding" element={<Onboarding />} />
            <Route exact path="/analytics" element={<Analytics />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/" element={<Hero />} />

            {/* <Route exact path="/login" element={<Login />} /> */}
            {/* <Route exact path="/signup" element={<Signup />} /> */}
          </Routes>
        </div>
      </Router>
      {/* </ThemeProvider> */}
      <Chatbot />
    </div>
  );
}

export default App;
