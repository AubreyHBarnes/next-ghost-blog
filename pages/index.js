import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import { Navbar } from '../components/Navbar'
import { About } from '../components/About'
import { Blog } from '../components/Blog'
import { Work } from '../components/Work'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className=" col-sm-12">
              <div className="home-info">
                <h1>I&apos;m Aubrey Barnes, a Web Developer looking to make the world (wide web) a more beautiful place.</h1>
                <a href="#contact" className="btn section-btn smoothScroll">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
     </section>
     <About />
     {/* <Blog /> */}
     <Work />
     <Contact />
     <Footer />

      <Script src="/js/jquery.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/jquery.stellar.min.js" />
      <Script src="/js/jquery.magnific-popup.min.js" />
      <Script src="/js/smoothscroll.js" />
      <Script src="/js/custom.js" />
    </>
  )
}

