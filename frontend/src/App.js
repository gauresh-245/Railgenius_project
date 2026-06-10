import React from 'react';
import {Navigate, Route,Routes} from 'react-router-dom'
import './App.css';


import Home from './Pages/HomePage/Home';
import Register from './Pages/HomePage/Register';
import Login from './Pages/HomePage/Login';
import BookTickets from './Pages/Book_TicketsFiles/BookTickets';
import TicketSelection from './Pages/Book_TicketsFiles/TicketSelection';
import DetailsConfirmation from './Pages/Book_TicketsFiles/DetailsConfirmation';
import PassengerDetails from './Pages/Book_TicketsFiles/PassengerDetails';
import LocalTrain from './Pages/LocalTrainData/LocalTrain';
import MetroTrain from './Pages/MetroTrainData/MetroTrain';
import TrainList from './Pages/LocalTrainData/TrainList';

import Map from './Pages/LocalTrainData/Map';
import SessionTicket from './Pages/LocalTrainData/SessionTicket';
import TrainTicketForm from './Pages/LocalTrainData/TrainTicketForm';
import E_Catering from './Pages/HomePage/E_Catering';
import Weather from './Pages/HomePage/Weather';
import Contact_Us from './Pages/HomePage/Contact_Us';









function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-tickets/Express" element={<BookTickets />} />
        <Route path="/book-tickets/Local" element={<LocalTrain />} />
        <Route path="/book-tickets/Metro" element={<MetroTrain />} />
        <Route path="/TicektSelection" element={<TicketSelection />} />
        <Route path="/passenger-details" element={<PassengerDetails />} />
        <Route path="/DetailsConfirmation" element={<DetailsConfirmation />} />
        <Route path="/trains" element={<TrainList />} />

        <Route path="/map" element={<Map />} />
        <Route path="/TrainTicketForm" element={<TrainTicketForm />} />
        <Route path="/sessionTicket" element={<SessionTicket />} />
        <Route path="/E_Catering" element={<E_Catering />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Contact_Us" element={<Contact_Us />} />

        {/* Add a default route to redirect to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;
