import React ,{useState} from "react";
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/CartPage';
import ReserveTable from './components/ReserveTable';
import BookingFormContext from "./contexts/context";
import Confirmation from "./components/Confirmation";
import Dessert from "./components/Dessert";



function App() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState(new Date());
  const [persons, setPersons] = useState('');
  const [occasion, setOccasion] = useState('');
  const [site,setSite] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
return (
    <div>
      <BookingFormContext.Provider value={{date,setDate, time,setTime, persons,setPersons, occasion,setOccasion , site,setSite }}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>

     
      <Route path="/CartPage" element={<CartPage />}></Route>
      <Route path="/ReserveTable" element={<ReserveTable />}></Route>
      <Route path="/confirmation" element={<Confirmation />}></Route>

      </Routes>
      </BrowserRouter>
      </BookingFormContext.Provider>
    </div>
  );
}

export default App;
