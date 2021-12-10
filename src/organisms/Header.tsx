import HeaderInfo from '../molecules/HeaderInfo';
import WebsiteBuilder from '../molecules/WebsiteBuilder';
import { Container } from 'theme-ui';

const Header = () => {
  return (
    <Container p='2em'>
      <HeaderInfo />
      <WebsiteBuilder></WebsiteBuilder>
    </Container>
  );
};

export default Header;
