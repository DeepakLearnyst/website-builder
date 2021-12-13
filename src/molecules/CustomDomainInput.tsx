import { Container, Label, Input } from "@theme-ui/components";

const CustomDomainInput = () => {
    return (
       <Container p='1em'>
           <Label variant='text.label'>ADD YOUR CUSTOM DOMAIN</Label>
           <Input type='text' placeholder='www.logicowl.in' mt='.5em' sx={{maxWidth: '550px', borderRadius: '4px', border: '1px solid #E4E9F2' }}></Input>
       </Container>
    );
};

export default CustomDomainInput;