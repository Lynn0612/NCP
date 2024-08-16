import './App.css';
import './App.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage } from './pages';
import { MyNavbar} from '@/components';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
