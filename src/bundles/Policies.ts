import { fetchPolicies, fetchErrors } from "./index";
import axios from "axios";

const initialState = {
  policiesData: {},
  error: "",
};

interface Action {
  type: string;
  payload?: any;
}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjU0MDAxNTAsInNpZCI6MTI3OTA2LCJleHAiOjE2Mzk0OTE2NzUsInR5cCI6NCwibG9rIjoiMDAwMCIsInRvayI6InU1dmZhNjJzQWd3OWxCSmc2LWJoUVEifQ.-SxwINzK1328MLuqqTiZjrURw9B9z3qJMzvJ54UQlbQ"


const policyReducer = {
  name: "policies",

  reducer: (state = initialState, action: Action) => {
    switch (action.type) {
      case "FETCH_POLICIES":
        return {
          policiesData: action.payload,
          error: "",
        };

      case "FETCH_ERRORS":
        return {
          policiesData: {},
          error: action.payload,
        };

      default:
        return state;
    }
  },

  selectPolicies: (state: { policies: object }) => state.policies,

  doFetchPolicies:
    () =>
    ({ dispatch }: any) => {
      axios
        .get("https://api.learnyst.com/admin/v4/pages?type=2", {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          const policies = response.data;
          console.log("Got the data:- ", policies);
          dispatch(fetchPolicies(policies));
        })
        .catch((error) => {
          const errorMsg = error.message;
          console.log("Got the error:- ", errorMsg);
          dispatch(fetchErrors(errorMsg));
        });
    },

  init: (store: { doFetchPolicies: () => void; selectPolicies: () => void }) => {
    store.doFetchPolicies();
    store.selectPolicies();
  },
};

export default policyReducer;
