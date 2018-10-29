import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //unlike React we need to give the import the location
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; /*tachyons is a package that lets you write style in the virtual DOM*/
//Standard.  Capitalize module names
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
