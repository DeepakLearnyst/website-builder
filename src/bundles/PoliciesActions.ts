export const fetchPolicies = (policiesData: any) => {
  return {
    type: 'FETCH_POLICIES',
    payload: policiesData
  }
}
  
export const fetchErrors = (error: any) => {
  return {
    type: 'FETCH_ERRORS',
    payload: error
  }
}