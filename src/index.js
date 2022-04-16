import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ParentSteps/ParentSteps';
import './assets/keyframes'

import stepsDataJSON from './steps.json'

const root = ReactDOM.createRoot(document.getElementById('root'));

const stepsDataWrapper = stepsDataJSON.steps.map((stepItem, index) => ({ 
  ...stepItem,
  visible: index === 0,
  color: stepItem.value,
  duration: stepsDataJSON.durations[stepItem.value]
}))

root.render(
  <React.StrictMode>
    <App data={stepsDataWrapper} />
  </React.StrictMode>
);
