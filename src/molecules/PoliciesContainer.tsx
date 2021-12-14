const {connect} = require('redux-bundler-react')

type policyProps = {
    policies : {
        policiesData: {
            pages: []
        }
    }
}

const PoliciesContainer = (props: policyProps) => {
    const policies = props.policies
    console.log("policies:- ", policies.policiesData.pages)
    return (
        <div>
            Hello world
        </div>
    );
};

export default connect('doFetchPolicies', 'selectPolicies', PoliciesContainer);