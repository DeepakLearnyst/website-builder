/** @jsxImportSource theme-ui */

import { Card, Image, Container, Heading, Paragraph } from "theme-ui";

type WebsiteBuilderCardsProps = {
    image: string
    heading: string
    paragraph: string
}

const WebsiteBuilderCards = (props: WebsiteBuilderCardsProps) => {
  return (
    <Card
      m="1em"
      p="1em"
      sx={{
        display: "flex",
        boxShadow: "0px 0px 2px 2px #f5f5f5",
        borderRadius: "8px",
        maxWidth: "650px",
        cursor: "pointer",
      }}
    >
      <Image src={props.image} alt="edit" sx={{minWidth: '70px'}}></Image>
      <Container ml='1em'>
        <Heading mt=".3em" sx={{ fontSize: "1.125rem", fontWeight: '500px' }}>
          {props.heading}
        </Heading>
        <Paragraph mt=".3em">
          {props.paragraph}
        </Paragraph>
      </Container>
    </Card>
  );
};

export default WebsiteBuilderCards;
