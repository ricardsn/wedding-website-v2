import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header.component';
import Welcome from './components/Welcome/Welcome.component';

function App() {
  return (
    <div className="Wedding">
        <Header />
        <Welcome />
    </div>
  );
}

export default App;
