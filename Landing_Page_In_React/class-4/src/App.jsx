import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Cars from './components/Cars/Cars'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Navbar items={["Home", "About", "Services", "Contact"]}/>

      <Hero
      isDirectionRow = {true}
      heading="M5 Sedan" image="https://platform.cstatic-images.com/in/v2/stock_photos/9f705b67-1b77-4a68-9ef1-03de8845f4b1/ea0e900d-840e-4857-a8c3-48a65bb7015d.png"
      description="The 2025 BMW M5 sedan is a high-performance plug-in hybrid, boasting a combined output of 717 horsepower and 1,000 Nm of torque, thanks to a 4.4-liter twin-turbo V8 engine and an electric motor, accelerating to 0-60 mph in 3.4 seconds.
      "/>
      <Hero image="https://www.stablevehiclecontracts.co.uk/uploads/2021-audi-e-tron-gt-rs-models-revealed-price-specs-release-date-cover.jpg" heading="RS E-tron GT" 
       description="The Audi RS e-tron GT is an all-electric performance car featuring a powerful 800-volt electric powertrain, a dual-speed transmission, and quattro all-wheel drive, offering a range of up to 329-369 miles and a 0-60 mph time of 3.3 seconds.
      "/>

      <Hero
      isDirectionRow = {true}
       heading="Laferrari" image="https://cdn.shopify.com/s/files/1/2784/4966/files/M5905-363_-_Ferrari_La_Ferrari_Aperta_1.18_Scale_-_Front_3.4_2048x2048.jpg?v=1695633212"
      description="The Ferrari LaFerrari is a high-performance hybrid supercar that combines a powerful 6.3-liter V12 engine with a 161-horsepower electric motor, resulting in a total output of 950 horsepower and incredible performance. "
      />

      <Cars/>
      <Footer/>
    </>
  )
}

export default App
