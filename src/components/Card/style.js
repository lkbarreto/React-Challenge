

export const styles = {
  card: {
    width: 250,
    margin: '4%',
    background: '#f1eded ',
    borderRadius: 16,
    boxShadow: 'none',


  },

  title: {
    color: '#373a3c',
    width: '95%',
    whiteSpace: 'pre',
    marginTop: '10%',
    textAlign: 'center'
  },

  floatButton: {
    background: '#f8462c',
    color: 'white',
    position: 'relative',
    float: 'right',
    right: '8%',
    marginTop: '-6%'
  },

  floatButtonClose:{
    background: '#f8462c',
    color: 'white',
    position: 'relative',
    float: 'right',
    right: '5%',
    marginTop: '-10%'
  },


  actionArea: {
    borderRadius: 16,
    boxShadow: 'none',
    transition: '0.2s',
  },

  warning: {
    background: 'yellow'
  },
  button: {
    padding: '1em'
  },
  // media queries
  '@media (max-width: 200px)': {
    button: {
      width: '100%'
    }
  }
};
