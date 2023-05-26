import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from "./componets/public/Footer";
import Main from './componets/public/Main';
import { Navbar } from "./componets/public/Navbar";
import { Detail } from './componets/public/Detail';
import { UserForm } from './componets/public/UserForm';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Main/>} />
        <Route path="/details/:id" element={<Detail/>} />
        <Route path="/user-form" element={<UserForm/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
