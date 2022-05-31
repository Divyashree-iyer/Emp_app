import React, { useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EmployeeList from './pages/EmployeeList';
import EmployeeMaster from './pages/EmployeeMaster';
import Login from './pages/Login';

import Navbar from './components/Navbar';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  return (
    
    <div>
        <BrowserRouter>
            <div className="">
                <Navbar />

                <div>
                    <Routes>
                        {/* Start */}
                        <Route path="/" element ={<Login />} />
                        <Route path="/login" element ={<Login />} />
                        <Route path="/logout" element ={<Login />} />
                        {/* Pages */}
                        <Route path="/employee-list" element ={<EmployeeList />} />
                        <Route path="/employee-master" element ={<EmployeeMaster />} />
                        <Route exact path="/employee-master/:id" element ={<EmployeeMaster />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>

  )
}

export default App;