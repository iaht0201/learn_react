export function overrides(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          // fontSize: 14,
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            marginTop: "-6px",
          },
          '& .MuiInputLabel-root.MuiFormLabel-filled, & .MuiInputLabel-root.Mui-focused': {
            marginTop: 0
          },
          '& .MuiInputBase-root': {
            height: 44,
            input: {
              padding: "0 14px"
            }
          }
          
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          minHeight: 40
        }
      }
    }
  };
}
