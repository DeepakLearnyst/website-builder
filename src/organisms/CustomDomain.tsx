import React from 'react';
import { Container, Button, Divider } from 'theme-ui';
import CustomDomainInfo from '../molecules/CustomDomainInfo';
import CustomDomainInput from '../molecules/CustomDomainInput';

const CustomDomain = () => {
    return (
       <Container>
           <CustomDomainInfo></CustomDomainInfo>
           <CustomDomainInput></CustomDomainInput>
           <Button ml='1em' mt='.5em' variant='customDomainBtn'>UPGRADE</Button>
           <Divider m='1em' sx={{color: 'divider', opacity: '16%'}} />
       </Container>
    );
};

export default CustomDomain;