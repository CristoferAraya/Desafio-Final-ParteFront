import  HomeView from './views/HomeView';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginView  from './views/LoginView';
import RegisterView  from './views/RegisterView';
import PerfilView from './views/PerfilView';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from './components/Navigation';
import FavoritesList from './components/FavoritesListView';



const App = () => {
  return (
    <Router>
      <Barra/>
        <Routes>

        <Route path= '/'
               element={<HomeView/>}/>
        <Route path= '/login'
               element={<LoginView/>}/>
        <Route path= '/registro'
               element={<RegisterView/>}/>
        <Route path= '/perfil'
               element={<PerfilView/>}/>  
         
        <Route path= '/favoritos'
               element={<FavoritesList/>}/>
       <Route path= '/mis peluqierioas'
               element={<mis-peluquerias/>}/>
    
     


      </Routes>
      <Footer />
    </Router>
  ) ;
}


export default App;

