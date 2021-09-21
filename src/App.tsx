import React from 'react';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {useStore} from "./store";
import MyContext from "./components/MyContext";
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App() {
  const [state, dispatch] = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      <MyContext.Provider value={{state, dispatch}}>
        <NavBar/>
        <AppRouter/>
      </MyContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
