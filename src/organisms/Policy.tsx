import { Container } from "@theme-ui/components";
import PolicyInfo from "../molecules/PolicyInfo";
import PoliciesContainer from "../molecules/PoliciesContainer";

const Policy = () => {
    return (
        <Container>
            <PolicyInfo></PolicyInfo>
            <PoliciesContainer></PoliciesContainer>
        </Container>
    );
};

export default Policy;