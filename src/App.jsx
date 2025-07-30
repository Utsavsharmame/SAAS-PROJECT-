import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path = '/ai' element= { <Layout/>} />

          
        <Route/>

      </Routes>
    </div>
  );
}

export default App

