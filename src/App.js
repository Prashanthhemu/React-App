import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/Greet';
import Counter from './components/counter';
import Login from './components/Login';
import PostList from './components/PostList';
import PostData from './components/PostData';
import HookState from './components/HookState';
import HookStateObject from './components/HookStateObject';
import HooksUseEffect from './components/HooksUseEffect';
import HooksFetchData from './components/HooksFetchData';
import SignIn from './components/SignIn';
import UserManagement from './components/UserManagement';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <HookState/> */}
//         {/* <HookStateObject></HookStateObject> */}
//         <Test></Test>
//         {/* <SignIn/> */}
//         {/* <HooksFetchData></HooksFetchData> */}
//         {/* <HooksUseEffect></HooksUseEffect> */}
//       </div>
//     )
//   }
// }

// export default App;

// function App() {
//   return (
//       <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Login</Link>
//             </li>
//             <li>
//               <Link to="/hooksUseEffect">HooksUseEffect</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/hooksUseEffect">
//             <HooksUseEffect />
//           </Route>
//           <Route path="/">
//             <Login />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/userManagement">
          <UserManagement />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

