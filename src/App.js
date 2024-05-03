import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/ManageUser/NavBar';
import { USerProvider } from './UserContext';
import UserTable from './components/ManageUser/UserTable';
import InfoTable from './components/ManageUser/Information User/InfoTable';
import AddUser from './components/ManageUser/AddUser';
import Login from './components/AUTH/Login';
import Home from './components/Homepage/Home';



function App() {
  return (
      <Router>
        <Switch>
          <USerProvider>
            <Route exact path="/usermanage"> 
              <NavBar />
              <UserTable />
              {/* <InfoTable /> */}
            </Route>
            <Route exact path="/usermanage/adduser">
              <NavBar /> 
              <AddUser/>
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home}/>
          </USerProvider>
        </Switch>
      </Router>
  );
}

export default App;


// col-sm-10 col-xm-12