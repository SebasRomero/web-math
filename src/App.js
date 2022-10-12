import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {AuthProvider} from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Index from './pages/Index';
import Aritmetica from './areas/Aritmetica';
import Algebra from './areas/Algebra';
import Geometria from './areas/Geometria';
import Calculo from './areas/Calculo';
import Estadistica from './areas/Estadistica';
import Trigonometria from './areas/Trigonometria';
import ValorPosicional from './areas/ValorPosicional';
import Tutor from './components/Tutor';
import './firebase'


//  "homepage": "https://sebasromero.github.io/react_firebase" this is cause when i run the code, use react_firebase as mainly path
//Estoy en lo de la alerta!
function App() {
  return (
    <div className="bg-slate-300 h-screeen text-black flex">
      <AuthProvider>
        {/* Routes are created down here */}
        <Routes>
          <Route path={'/web-math'} element={
            // ProtectedRoute is for protect some
            //route specifically
            <ProtectedRoute>
              {/* The logged user will be here after that... */}
              <Home/>
            </ProtectedRoute>
            
          } ></Route>
          {/* Here we are calling the components to changes routes */}
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/index" element={<Index/>}></Route>
          <Route path="/aritmetica" element={<Aritmetica/>}></Route>
          <Route path="/algebra" element={<Algebra/>}></Route>
          <Route path="/geometria" element={<Geometria/>}></Route>
          <Route path="/calculo" element={<Calculo/>}></Route>
          <Route path="/estadistica" element={<Estadistica/>}></Route>
          <Route path="/trigonometria" element={<Trigonometria/>}></Route>
          <Route path="/valorposicional" element={<ValorPosicional/>}></Route>
          <Route path="/tutor" element={<Tutor/>}></Route>
        </Routes>
      </AuthProvider>
      
    </div>

  );
}

export default App;
