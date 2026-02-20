import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Statistics from '../components/home/Statistics';

const Landing = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
