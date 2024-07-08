import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react"
import * as Sentry from '@sentry/react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const App = () => {
  return (
    
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      <div><SpeedInsights /></div>
      

    </main>
  )
}

export default Sentry.withProfiler(App);