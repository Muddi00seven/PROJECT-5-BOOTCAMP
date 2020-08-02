import React from 'react'
import FirstSection from './Sections/First/First';
import SecondSection from './Sections/Second/Second';
import ThirdSection from './Sections/Third/Third';
import Contact from './contact/Contact'
const Home = () => {
    return (
      <>
      <section>
          <FirstSection/>
          </section>
        <section>
          <SecondSection/>
          </section>
          <section>
          <ThirdSection/>
          </section>
          <section>
            <Contact/>
          </section>
  
      </>
    )
}

export default Home
