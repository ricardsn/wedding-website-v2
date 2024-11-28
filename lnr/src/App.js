import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header.component';
import Welcome from './components/Welcome/Welcome.component';
import Ceremony from './components/Ceremony/Ceremony.component';
import Plan from './components/Plan/Plan.component';
import Footer from './components/Footer/Footer.component';
import Divider from './components/Divider/Divider.component';

function App() {
  return (
    <div className="Wedding">
        <Header />
        <Divider />
        <Welcome />
        <Divider />
        <Plan />
        <Divider />
        <Footer />
    </div>
  );
}

export default App;
