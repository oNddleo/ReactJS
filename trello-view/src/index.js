import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Trello from './components/Trello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Trello />, document.getElementById('root'));
registerServiceWorker();
