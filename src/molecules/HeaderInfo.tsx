/** @jsxImportSource theme-ui */

import { Heading, IconButton, Button, Flex, Container, Paragraph } from "theme-ui";

const HeaderInfo = () => {
  return (
    <Container p='1em'>
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Flex>
          <Heading as="h3" sx={{
            fontSize: '1.875rem'
          }}>Website</Heading>
          <IconButton aria-label="Toggle dark mode" ml=".5em" mt='.2em' sx={{cursor: 'pointer'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 0 24 24"
              width="14px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
            </svg>
          </IconButton>
        </Flex>
        <Button variant="headerBtn" onClick={() => console.log("Clicked")}>
          SETTINGS
        </Button>
      </Flex>
      <Paragraph sx={{
        textAlign: 'left',
        margin: '.25em',
        fontSize: '0.938rem'
      }}>Create, edit and manage your website with all elements and features.</Paragraph>
    </Container>
  );
};

export default HeaderInfo;
