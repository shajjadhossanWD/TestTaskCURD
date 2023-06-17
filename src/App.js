import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Component/Common/Header/Header';
import Home from './Component/Pages/Home/Home';
import Footer from './Component/Common/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
