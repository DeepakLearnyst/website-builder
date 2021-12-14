/** @jsxImportSource theme-ui */

import createStore from "./bundles";
import { ThemeProvider, Container } from "theme-ui";
import { theme } from "./theme";
import Website from "./pages/Website";
const { Provider }  = require('redux-bundler-react')

const store = createStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container p="2em">
          <Website></Website>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
