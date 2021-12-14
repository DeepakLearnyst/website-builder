
import policies from './Policies'
// import { composeBundles } from 'redux-bundler'
const { composeBundles }  = require('redux-bundler')

export default composeBundles(policies);
export * from './PoliciesActions'