import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.css';
import App from './App';
import storage from './utils/storage'
import memory from './utils/memory'

memory.user=storage.getUser();

ReactDOM.render(<App />, document.getElementById('root'));
