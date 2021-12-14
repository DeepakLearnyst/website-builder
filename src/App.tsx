/** @jsxImportSource theme-ui */

import createStore from "./bundles";
import { ThemeProvider, Container } from "theme-ui";
import { theme } from "./theme";
import Website from "./pages/Website";
const { Provider } = require("redux-bundler-react");

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container p="2em">
          <Website></Website>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
