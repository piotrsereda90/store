import {
  BrowserRouter as Router
} from "react-router-dom";
import {renderRoutes} from './RenderRoutes';
import {ThemeProvider} from 'styled-components';
import theme from './theme';


function App() {
  return (
    // <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Router>
        {renderRoutes()}
      </Router>
      </ThemeProvider>
    // </ErrorBoundary>
  );
}

export default App;
