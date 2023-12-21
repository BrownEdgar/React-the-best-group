

import { useState } from 'react';
import './App.scss';
import Posts from './components/Posts/posts';



function App() {
  const [posts] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1599746089331-7818f74830fd?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'BMW',
      name: 'M5',
      desc: `Some cars are big-bodied and some are thrilling. The BMW M5 is both, with a body based on the regular 5-series and a heart-and-lung transplant courtesy of the brand's M performance division. Under the hood lives a spectacular 600-hp twin-turbo V-8 bolted to an eight-speed automatic transmission that powers all four wheels. An optional Competition package turns up the heat with 17 extra horsepower, a more soulful exhaust, stiffer suspension, and Competition badging and trim. That version rocketed to 60 mph in 2.8 seconds in our testing. Built to handle the rigors of mountain hairpins, blasts on the autobahn, and everyday life the M5 offers a premium experience with a penchant for fireworks. Unlike its closest competitor, the Cadillac CT5-V Blackwing, the Bimmer's stealthy packaging isn't offset by a thunderous exhaust but its impressive comfort and refinement make it among the best in the premium sports sedan segment.`,
      body: 'Read more...'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1629450646259-1497be420f99?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Audi',
      name: 'R8',
      desc: `Few supercars actually get driven daily, but the 2023 Audi R8 seems designed for such a task. It offers a reasonably easy-going ride along with its breakneck acceleration. The R8 shares its underpinnings and its powertrain—a mighty V-10 and seven-speed automatic—with the wild Lamborghini Huracán. The Audi is less hardcore than the Lambo, though, less intense on a twisty road or racetrack. What the R8 offers instead is a level of refinement that’s more in line with the rest of the Audi lineup. Its snug, two-seat cabin is lined with high-end materials and features a minimalist design that forgoes the usual center-mounted infotainment display in favor of a digital gauge display that serves both purposes. The interior is comfortable for both driver and passenger, and the R8 would make a fine touring car if it weren’t for a puny cargo area that fits only one carry-on suitcase. If this particular cross-section of performance and luxury appeals to you, now’s the time to act, as this is the final year for Audi’s V-10–powered showpiece.`,
      body: 'Read more...'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1638731042210-e59cab34bfa6?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mercedes-Benz',
      name: 'c63 AMG',
      desc: `Life is short: Skip the SUV and drive a real performance car. Might we suggest the absolutely ballistic 2023 Mercedes-Benz C63 S? This twin-turbo two-door boasts a 503-hp V-8 powertrain and a chassis that delivers laser-focused handling, making it one of the most brutish models in Mercedes-AMG’s product portfolio. It doesn’t ride like a luxury car though it offers plenty of high-end features and premium materials inside its well-equipped cabin. It should be noted that the C63 offered this year rides on the previous-generation C-class platform, so those seeking the latest and greatest should consider waiting for next year’s 2024 model, which will be offered only as a sedan and will be powered by an even-more-ballistic 671-hp, turbocharged four-cylinder hybrid powertrain`,
      body: 'Read more...'

    }
  ])


  return (
    <div className='App'>
      <h1 className='App__title'>Business Machines</h1>
      <Posts posts={posts} />
    </div>
  )
}

export default App
