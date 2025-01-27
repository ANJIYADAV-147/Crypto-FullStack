import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import DemoTrading from './components/DemoTrading';
import CommunityPage from './components/CommunityPage';
import AcademyPage from './components/AcademyPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import NotFound from './components/NotFound';



const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/about' element={<AboutPage />} />
      <Route exact path='/academy' element={<AcademyPage />} />
      <Route exact path='/demo-trading' element={<DemoTrading />} />
      <Route exact path='/community-page' element={<CommunityPage />} />
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/signup' element={<SignupPage />} />
      <Route exact path='/NotFound' element={<NotFound/>}/>
    </Routes>

  </BrowserRouter>
)

export default App;
