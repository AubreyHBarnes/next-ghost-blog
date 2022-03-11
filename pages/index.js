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
            <div className="col-md-6 col-sm-12">
              <div className="home-info">
                <h1>We make beautiful websites for all people.</h1>
                <a href="#about" className="btn section-btn smoothScroll">Start a project</a>
                <span>
                  CALL US (+66) 010-020-0340
                  <small>For any inquiry</small>
                </span>
              </div>
            </div>
          </div>
        </div>
     </section>
     <About />
     <Blog />
     <Work />
     <Contact />
     <Footer />

      <Script src="/js/jquery.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/jquery.stellar.min.js" />
      <Script src="/js/jquery.magnific-popup.min.js" />
      <Script src="/js/smoothscroll.js" />
      <Script src="/js/custom.js" />
    </>
  )
}
