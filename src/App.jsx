import { createContext, useReducer } from 'react'
import './App.css'
import Main from './components/main/main'
import { initialState, reducer } from './reducer/reducer';
export const Context = createContext()
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Main />
    </Context.Provider>
  )
}

export default App
