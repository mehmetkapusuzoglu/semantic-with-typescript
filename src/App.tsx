import * as React from 'react';
import { Fragment } from 'react';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Button, TransitionablePortal, Segment, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Page from './APage';
import logo from './logo.svg';

interface IState {
  count: number;
}

class App extends React.Component<{}, IState> {
  public state = {
    count: 0
  }

  public render() {
    return (
      <Router>
        <Fragment>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload. !!!
        </p>
            <h1>{this.state.count}</h1>
            <Button onClick={this.Count}>Count</Button>
          </div>
          <Route path="/:id" component={Page} />
          <TransitionablePortal open={this.state.count % 2 === 0} transition={{ duration: 1000, animation: 'swing up' }}>
            <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
              <Header>Ateş İstanbul Üsküdar</Header>
              <p>Portals have tons of great callback functions to hook into. Ateş İstanbul Üsküdar </p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </TransitionablePortal>
        </Fragment>
      </Router>
    );
  }

  private Count = () => {
    this.setState({ count: this.state.count + 1 })
  }
}

export default hot(module)(App);
