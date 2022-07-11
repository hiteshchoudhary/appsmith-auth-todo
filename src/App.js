

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
