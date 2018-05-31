import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Route } from 'react-router-dom';

import loginReducer from './reducers/loginReducer';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import App from './App';
import './index.css';

const store = createStore(loginReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
