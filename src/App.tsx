/** @jsxImportSource theme-ui */

import { ThemeProvider, Container } from 'theme-ui';
import { theme } from "./theme";
import WebsiteBuilder from "./organisms/Websitebuilder";
import CustomDomain from './organisms/CustomDomain'
import Policy from './organisms/Policy';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container p='2em'>
        <WebsiteBuilder></WebsiteBuilder>
        <CustomDomain></CustomDomain>
        <Policy></Policy>
      </Container>
    </ThemeProvider> 
  );
}

export default App;
