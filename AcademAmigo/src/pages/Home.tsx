import { useState } from 'react'
import Hero from '../components/frontpage/Hero.tsx'
import Card1 from '../components/frontpage/Card1'
import Card2 from '../components/frontpage/Card2'
import Footer from '../components/Footer.tsx'
import {useEffect} from 'react';

function Home() {
  useEffect(() => {
    document.body.classList.add('home');
  }, []);
  return (
    <>
      <Hero></Hero>
      <Card1></Card1>
      <Card2></Card2>
      <Footer></Footer>
    </>
  );
}

export default Home
