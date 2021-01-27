import { Switch, Route } from 'react-router-dom';

import { Header, Sidebar } from './components';
import { Calendar, Requests } from './pages';

import './scss/app.scss';

function App() {

  return (
    <div className="app">
      <Header />

      <div className="wrapper">
        <Sidebar />

        <Switch>
          <Route path="/" component={Requests} exact />
          <Route path="/requests" component={Requests} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
