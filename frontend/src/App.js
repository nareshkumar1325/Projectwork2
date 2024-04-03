import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// import Addpatients from './Components/Therapists/Addpatients';
import ProfileEdit from './Components/ProfileEdit/ProfileEdit';
import Profile from './Components/Profile/Profile';
import AddTherapists from './Components/AddTherapists/AddTherapists';
import Addbooks from './Components/Books/Addbooks';
import Book from './Components/Books/Book';
import Therapists from './Components/AddTherapists/Therapists';
function App() {
  return (
    <div >
     <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addbooks" element={<Addbooks />} />
            <Route path="/editprofile" element={<ProfileEdit />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/addtherapist" element={<AddTherapists/>} />
            <Route path="/books" element={<Book/>} />
            <Route path="/therapists" element={<Therapists/>} />





            


      </Routes>
      <Footer/>
     </Router>
     
     </>
    </div>
  );
}

export default App;
