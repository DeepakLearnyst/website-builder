import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    header: '"DM Sans", sans-serif',
  },
  fontWeights: {
    heading: 500,
    button: 700,
    para: 400,
  },
  fontSizes: {
    heading: "1.875rem",
    para: "0.938rem",
    webBuildButton: "0.875rem",
    customBtn: '1rem'
  },
  colors: {
    heading: "#151A30",
    text: "#2E3A59",
    white: "#FFFFFF",
    accent: "red",
    divider: "#8F9BB3",
    websiteBuilder: '#EDF1F7',
    customDomain: '#4FBA58',
    policy: '#435BF2'
  },
  buttons: {
    websiteBuilderBtn: {
      backgroundColor: "websiteBuilder",
      color: "#222B45",
      fontFamily: "header",
      fontSize: "webBuildButton",
      fontWeight: "button",
      cursor: "pointer",
    },
    customDomainBtn: {
        backgroundColor: 'customDomain',
        color: 'white',
        fontFamily: 'header',
        fontSize: 'customBtn',
        fontWeight: 'button',
        cursor: 'pointer'
    },
    policyBtn: {
        backgroundColor: 'policy',
        color: 'white',
        fontFamily: 'header',
        fontSize: 'webBuildButton',
        fontWeight: 'button',
        width: '160px', 
        height: '40px',
        cursor: 'pointer',
    }
  },
  text: {
    heading: {
      color: "heading",
      fontFamily: "header",
    },
    paragraph: {
      color: "text",
      fontFamily: "header",
      fontSize: "0.813rem",
      fontWeight: "400",
    },
    label: {
      color: "heading",
      fontFamily: "header",
      fontSize: "0.7rem",
      fontWeight: "700",
    },
  },
  images: {
    edit: {
      width: "50px",
      height: "50px",
    },
  },
    // styles: {
    //     root: {
    //         boxSizing: 'border-box',
    //         margin: 0,
    //         padding: 0
    //     }
    // }
};
