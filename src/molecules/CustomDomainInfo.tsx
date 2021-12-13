import { Container, Heading, Paragraph, Link } from "theme-ui";

const CustomDomainInfo = () => {
  return (
    <Container p='1em'>
      <Heading sx={{fontSize: '1.125rem', fontWeight: '700'}}>Custom Domain</Heading>
      <Paragraph sx={{maxWidth: '700px'}}>
        To connect your custom domain, configure your DNS settings according to
        your domain provider. Once your DNS updates are complete, configure your
        custom URL below to complete the process. We've included instructions
        for some common domain hosts. See our <Link href='#!'>Support Document.</Link>
      </Paragraph>
    </Container>
  );
};

export default CustomDomainInfo;
