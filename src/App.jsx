import { useEffect } from 'react';
import './App.css'
import BeautyHappens from './components/BeautyHappens';
import BookYourConsultation from './components/BookYourConsultation';
import CardSpecialty from './components/CardSpecialty';
import Faq from './components/Faq';
import HairPrp from './components/HairPrp';
import HappyClients from './components/HappyClients';
import OurDoctor from './components/OurDoctor';
import ReduceExcessive from './components/ReduceExcessive';
import TreanentProcess from './components/TreanentProcess';
import Video from "./components/Video"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsApp from './components/WhatsApp';
import TopCall from './components/TopCall';

function App() {

  return (
    <>
      <div className="relative-container">
        <Video />       
        <TopCall />      
        <HairPrp />      
        <CardSpecialty />
        <WhatsApp />     
      </div>

      <TreanentProcess/>
      <ReduceExcessive/>
      <OurDoctor/>
      <BeautyHappens/>
      <HappyClients/>
      <Faq/>
      <BookYourConsultation/>
    </>
  )
}

export default App