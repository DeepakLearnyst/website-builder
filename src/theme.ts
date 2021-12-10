// import { useEffect } from 'react';
import type { Theme } from 'theme-ui'
// import WebFont from 'webfontloader';


export const theme: Theme = {
      

  fonts: {
      header: '"DM Sans", sans-serif'
  },
  fontWeights:{
      heading: 500,
      button: 700,
      para: 400
  },
  fontSizes: {
      heading: '1.875rem',
      para: '0.938rem',
      button: '0.875'
  },
  colors: {
      heading: '#151A30',
      text: '#2E3A59',
      background: '#FFFFFF',
      accent: 'red'
  },
  buttons: {
      headerBtn: {
          backgroundColor: '#EDF1F7',
          color: '#222B45',
          fontFamily: 'header',
          fontSize: 'button',
          fontWeight: 'button',
          cursor: 'pointer'
      }
  },
  text: {
      heading: {
          fontWeight: 'heading',
          color: 'heading',
          fontFamily: 'header'
      },
      paragraph: {
          fontWeight: 'para',
          color: 'text',
          fontFamily: 'header'
      }
  },
  images:{
      edit: {
          width: "50px",
          height: "50px"
      }
  },
//   styles: {
//       root: {
//           fontFamily: 'header',
//           fontSize: '1rem',
//       }
//   }
}