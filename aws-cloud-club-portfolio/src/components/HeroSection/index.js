import React from 'react'

 //imports the CSS file named "App.css." This file likely contains additional styles 
import './App.css';
// imports an image file named "apple-splash.png" from the "images" directory and assigns it to the variable bg. 
import bg from "./images/aws.png"


function App() {

  const HeroSection = () => { 
    backgroundImage: `url(${bg})`;
    backgroundSize: 'cover';
    backgroundRepeat: 'no-repeat';
    backgroundPosition: 'center';
  };

  return (
    <main className='h-screen w-screen' style={styles}>

      <div className='h-full w-full flex flex-col justify-center px-[4rem] ' >
          <h1 className='text-[#98EC65] font-bold text-[5rem]' >Welcome</h1>
          <h3 className='text-white text-[2rem] font-bold ' >AWS cloud club</h3>

          <button className='w-[10rem] py-[6px] rounded-3xl bg-[#98EC65] hover:bg-[#81E047] mt-[1rem]' >Explore Now</button>
      </div>

    </main>
  );
}
 


export default HeroSection
