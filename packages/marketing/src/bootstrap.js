import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

// Mount function to start app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (nextPathname !== pathname) {
        history.push(nextPathname);
      }
    },
  };
};

// In dev env we call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {});
  }
}

export { mount };
