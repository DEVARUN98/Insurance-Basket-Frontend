import {BrowserRouter as Router,Route,Routes,useNavigate} from 'react-router-dom'
import React,{useState,useEffect} from 'react';
import './App.css';
import MainFile from './Components/MainFile';
import SecretSectionImage from './Components/AdminSession';
import Calculator from './Components/testFile';
import AdminSession from './Components/dataAdd.jsx';
import ListData from './Components/listData.jsx';
import SearchComponent from './Components/SearchComponent.jsx';
import Login from './Components/login.jsx';
import RegisterForm from './Components/RegisterForm.jsx';
import ForgotPassword from './Components/ForgotPassword.jsx';
import VerifyCode from './Components/VerifyCode.jsx';
import ResetPassword from './Components/ResetPassword.jsx';
//import DataDisplay from './Components/DataDisplay.jsx';
import ListDataSearch from './Components/listDatawithSearch.jsx';
import Navbar from './Components/Navbar.jsx';
import DataAddMain from './Components/dataAddMain.jsx';


// import React from 'react';

function App(){
  return (
      <>
    
    <Router>
    {" "}
    <Navbar/>
      <Routes>{" "}
      {/* <Route path='/' element='' /> */}
      { <Route path='/' element={<Login />} />}
      { <Route path='/forgot' element={<ForgotPassword />} />}
      { <Route path='/verify' element={<VerifyCode/>} />} 
      {<Route path='/reset' element={<ResetPassword/>} />}
      { <Route path='/login' element={<Login />} />}
      { <Route path='/register' element={<RegisterForm />} /> }
      {/* { <Route path='/admin' element={<AdminSession />} />} */}
      { <Route path='/admin' element={<DataAddMain />} />}
      { <Route path='/listdata' element={<ListDataSearch />} />}

      dataAddMain
      {/* {<Route path='/display' element={<DataDisplay />} />} */}
      {/* { <Route path='/search' element={<SearchComponent />} /> } */}
      {/* { <Route path='/list' element={<ListData />} /> } */}
        {/* <Route path='qAdd' element={<Qstnadd/>} /> */}
      </Routes>{" "}
    </Router></>
  );
}

export default App;
