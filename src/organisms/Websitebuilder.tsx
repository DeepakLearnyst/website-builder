import WebsiteBuilderHeader from "../molecules/WebsiteBuilderHeader";
import { Container, Flex, Divider } from "theme-ui";
import WebsiteBuilderCards from "../molecules/WebsiteBuilderCards";
import legacy from "../images/legacy.png";
import edit from "../images/edit.png";

const WebsiteBuilder = () => {
  return (
    <Container>
      <WebsiteBuilderHeader />
      <Flex>
        <WebsiteBuilderCards
          image={edit}
          heading="Build My Website"
          paragraph="Create your website with all new elements and features loaded website builder."
        ></WebsiteBuilderCards>
        <WebsiteBuilderCards
          image={legacy}
          heading="Legacy Builder (Deprecated)"
          paragraph="Manage legacy published website"
        ></WebsiteBuilderCards>
      </Flex>
      <Divider m='1em' sx={{color: 'divider', opacity: '16%'}} />
    </Container>
  );
};

export default WebsiteBuilder;
