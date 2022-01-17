import React from "react";

// import AllComponents from "./AllComponents/allComponents";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CoverPage from "./CoverPage/coverPage";
import Headers from "./Headers/headers";

function App() {
  return (
    <>
 <Router>
        <Switch>
          <Route path="/coverPage" component={CoverPage} />
          <Route path="/headers" component={Headers} />
          
          <Redirect exact to="/coverPage" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
