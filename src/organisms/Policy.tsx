import { Container } from "@theme-ui/components";
import PoliciesContainer from "../molecules/PoliciesContainer";
import PolicyInfo from "../molecules/PolicyInfo";

const Policy = () => {
    return (
        <Container>
            <PolicyInfo></PolicyInfo>
            <PoliciesContainer></PoliciesContainer>
        </Container>
    );
};

export default Policy;