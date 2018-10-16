import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //unlike React we need to give the import the location
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';
//Standard.  Capitalize module names
ReactDOM.render(<CardList robots={robots}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
