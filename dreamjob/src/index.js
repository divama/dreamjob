import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Import css
import './semantic.min.css';

// Import Components
import Resume from './myComponents/Resume';

ReactDOM.render(<Resume />, document.getElementById('root'));
registerServiceWorker();
