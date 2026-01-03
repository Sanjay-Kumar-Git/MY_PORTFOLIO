import React from 'react';

const Context = React.createContext({
  dark: false,
  changeToDark: () => {}, 
});

export default Context;