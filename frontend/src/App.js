import { ThemeProvider } from '@material-ui/core';
import Option from './components/Home/Options/Option';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Onboarding from './components/Home/Onboarding/Onboarding';

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
      <Option />
      <Onboarding />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
