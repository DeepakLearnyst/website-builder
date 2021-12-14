import { Container } from "@theme-ui/components";
import WebsiteBuilder from "../organisms/Websitebuilder";
import CustomDomain from '../organisms/CustomDomain'
import Policy from '../organisms/Policy';

const Website = () => {
    return (
        <Container>
             <WebsiteBuilder></WebsiteBuilder>
        <CustomDomain></CustomDomain>
        <Policy></Policy>
        </Container>
    );
};

export default Website;