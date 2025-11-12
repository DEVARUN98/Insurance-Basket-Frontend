import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './Components/login.jsx';
import RegisterForm from './Components/RegisterForm.jsx';
import ForgotPassword from './Components/ForgotPassword.jsx';
import VerifyCode from './Components/VerifyCode.jsx';
import ResetPassword from './Components/ResetPassword.jsx';
import ListDataSearch from './Components/listDatawithSearch.jsx';
import Navbar from './Components/Navbar.jsx';
import DataAddMain from './Components/dataAddMain.jsx';



function App(){
  return (
      <>
    
    <Router>
    {" "}
    <Navbar/>
      <Routes>{" "}
      { <Route path='/' element={<Login />} />}
      { <Route path='/forgot' element={<ForgotPassword />} />}
      { <Route path='/verify' element={<VerifyCode/>} />} 
      {<Route path='/reset' element={<ResetPassword/>} />}
      { <Route path='/login' element={<Login />} />}
      { <Route path='/register' element={<RegisterForm />} /> }
      { <Route path='/admin' element={<DataAddMain />} />}
      { <Route path='/listdata' element={<ListDataSearch />} />}

      </Routes>{" "}
    </Router></>
  );
}

export default App;
