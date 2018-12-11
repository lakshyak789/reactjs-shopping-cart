import React,{Component} from 'react';
import './App.css';
import Shopping from '../shopping/shopping';
import Iteminfo from '../Iteminfo/Iteminfo';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route path ="/" component={Shopping} exact />
          <Route path ="/:dataid" component={Iteminfo} exact  />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
