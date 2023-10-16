import * as React from 'react';
import { Navigation } from './src/navigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;