import { Header, Sidebar } from './components';
import { Requests } from './pages';
import './scss/app.scss';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="wrapper">
        <Sidebar />
        <Requests />
      </div>
    </div>
  );
}

export default App;
