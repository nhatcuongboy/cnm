import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/Common/NotFound';
import Header from './components/Common/Header';
import './App.scss';

const AppComponent = React.lazy(() => import('./components/App/App'));
const Counter = React.lazy(() => import('./components/Counter/Counter'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/app" />
            <Route path="/app" component={AppComponent} />
            <Route path="/counter" component={Counter} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
