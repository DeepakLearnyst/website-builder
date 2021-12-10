import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
      header: '"Dm Sans, sans-serif'
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
//   lineHeights: {
//       heading: '2.5rem',
//       para: '1.25rem',
//       button: '1rem'
//   },
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
          fontSize: 'button',
          fontWeight: 'button',
          cursor: 'pointer'
      }
  },
  text: {
      heading: {
          fontWeight: 'heading',
          color: 'heading',
      },
      paragraph: {
          fontWeight: 'para',
          color: 'text',
      }
  },
  images:{
      edit: {
          url: "./images/edit.png",
          width: "50px",
          height: "50px"
      }
  },
  styles: {
      root: {
          fontFamily: 'header',
          fontSize: '1rem',
      }
  }
}