import Script from 'next/script'
import { useEffect } from 'react';

import GhostContentAPI from '@tryghost/content-api';

import { Navbar } from '../components/Navbar'
import { About } from '../components/About'
import { Blog } from '../components/Blog'
import { Work } from '../components/Work'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home(props) {
  
  useEffect(() => {

    const fetchData = async () => {
      const api = new GhostContentAPI({
        url: process.env.NEXT_PUBLIC_GHOST_URL,
        key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
        version: 'v4',
      });
    
      const getPosts = await api.posts.browse()
  
      const paths = getPosts.map(post => (
        { 
            params: { 
                id: JSON.stringify(post.id) 
        }
    }))

    const singlePost = await api.posts.read({ id:'622f40972c00ec001d42307a' })
    console.log(singlePost)

    }
    
    fetchData()
    
  }, [])
  
  
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
     {/* <Blog posts={props.result} /> */}
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_GHOST_URL,
    key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
    version: 'v4',
  });

  const posts = await api.posts
    .browse()    

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      result: posts
    },
  }
}