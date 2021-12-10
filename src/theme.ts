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
      heading: '1.7rem',
      para: '1rem'
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
          fontWeight: 'button',
          cursor: 'pointer'
      }
  },
  text: {
      heading: {
          fontWeight: 'heading',
          color: 'heading',
          fontSize: 'heading'
      },
      paragraph: {
          fontWeight: 'para',
          color: 'text',
          fontSize: 'para',
      }
  },

  styles: {
      root: {
          fontFamily: 'header',
          fontSize: '1rem',
      }
  }
}