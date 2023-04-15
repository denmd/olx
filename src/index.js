import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseContext } from './store/Contexts';
import App from './App';
import firebase from './firebase/config'
import Context from './store/Contexts';
ReactDOM.render(
<FirebaseContext.Provider value ={{firebase}}>
     <Context>
     <App />
     </Context>
    
     </FirebaseContext.Provider>
     , document.getElementById('root'));
