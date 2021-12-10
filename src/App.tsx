/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui';
import { theme } from "./theme";
import Header from "./organisms/Header";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header></Header>
      </div>
    </ThemeProvider> 
  );
}

export default App;
