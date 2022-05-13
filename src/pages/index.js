import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { 
    homeObjOne, 
    homeObjTwo, 
    homeObjThree 
} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
    //First value is name of state, second is function that's updating it
    const [isOpen, setIsOpen] = useState(false)
    //This is a function that updates the state and changes it to reverse
    const toggle = () => {
        // Saying set state to go from false to true then back and forth/toggling it
        // In order for toggle to work need to pass it in to Side and Navbar
        // Might not work at start cause maybe not passed it in yet, only said it can be accepted as value
        setIsOpen(!isOpen)
    }

    // Need to add completed sections here for them to be shown
    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />   
         <HeroSection />
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <Services />
         <InfoSection {...homeObjThree} />
         <Footer />
        </>
    );
};

export default Home;
