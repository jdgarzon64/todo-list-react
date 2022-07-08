import React from 'react';

import './App.css';
import { TodoProvider } from './todoContext';
import { AppUi } from './AppUi';

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
