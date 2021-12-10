/** @jsxImportSource theme-ui */

import { Card, Image, Container, Heading, Paragraph } from "theme-ui";
import edit from '../images/edit.png'

const WebsiteBuilder = () => {
  return (
    <Card m="1em" p='1em' sx={{
        display: 'flex',
        border: '2px solid #fafafa',
        boxShadow: '0px 0px 2px 2px #f5f5f5',
        borderRadius: '8px',
        maxWidth: '650px',
        cursor: 'pointer'
    }}>
      <Image src={edit} alt="edit"></Image>
      <Container ml='.5em'>
        <Heading mt='.3em' sx={{fontSize: '1.125rem'}}>Build My Website</Heading>
        <Paragraph mt='.3em' sx={{fontSize: '0.813rem'}}>
          Create your website with all new elements and features loaded website
          builder.
        </Paragraph>
      </Container>
    </Card>
  );
};

export default WebsiteBuilder;
