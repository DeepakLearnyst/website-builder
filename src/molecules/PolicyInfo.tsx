import {
  Container,
  Flex,
  Heading,
  Paragraph,
  Button,
  IconButton,
} from "theme-ui";

const PolicyInfo = () => {
  return (
    <Flex
      p="1em"
      mt="1em"
    >
      <Container>
        <Heading sx={{ fontSize: "1.125rem", fontWeight: "700" }}>
          Policy
        </Heading>
        <Paragraph mt=".5em" sx={{ maxWidth: "700px" }}>
          Policy helps you to clearly outline the terms and conditions regarding
          accountability issues or activities that are of critical importance to
          the company, such as, legal liabilities, regulatory requirements or
          issues that have serious consequences.
        </Paragraph>
      </Container>
      <Button p='0' variant='policyBtn' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <IconButton m='0' mr='.4em' sx={{ cursor: "pointer"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 0 24 24"
            width="30px"
            fill="#ffffff"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </IconButton>
        ADD POLICY
      </Button>
    </Flex>
  );
};

export default PolicyInfo;
