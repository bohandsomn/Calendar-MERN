import Calendar from './components/Month/Calendar.js'
import { Provider } from 'react-redux'

import store from './redux/store.js'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div>
        < Calendar />
      </div>
    </Provider>
  );
}

export default App
