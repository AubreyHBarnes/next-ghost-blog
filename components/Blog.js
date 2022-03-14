import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GhostContentAPI from '@tryghost/content-api';

export function Blog() {
  const [posts, setPosts] = useState([]);
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_GHOST_URL,
    key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
    version: 'v4',
  });

  // fetch 5 posts, including related tags and authors
  useEffect(() => {
    api.posts
      .browse({ limit: 6, include: 'tags,authors' })
      .then((res) => setPosts(res))
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
        <section id="blog" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                            <h2>Our Blog</h2>
                            <span className="line-bar">...</span>
                        </div>
                    </div>

                    {/* <div className="col-md-6 col-sm-6">

                        <div className="media blog-thumb">
                            <div className="media-object media-left">
                                <a href="blog-detail.html"><Image src="/images/blog-image1.jpg" width={800} height={1200} className="img-responsive" alt="" /></a>
                            </div>
                            <div className="media-body blog-info">
                                <small><i className="fa fa-clock-o"></i> December 22, 2017</small>
                                <h3><a href="blog-detail.html">How To Find Out Beautiful Workspace.</a></h3>
                                <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                                <a href="blog-detail.html" className="btn section-btn">Read article</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">

                        <div className="media blog-thumb">
                            <div className="media-object media-left">
                                <a href="blog-detail.html"><Image src="/images/blog-image2.jpg" width={800} height={1200} className="img-responsive" alt="" /></a>
                            </div>
                            <div className="media-body blog-info">
                                <small><i className="fa fa-clock-o"></i> December 18, 2017</small>
                                <h3><a href="blog-detail.html">woman sportwear.</a></h3>
                                <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                                <a href="blog-detail.html" className="btn section-btn">Read more</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">

                        <div className="media blog-thumb">
                            <div className="media-object media-left">
                                <a href="blog-detail.html"><Image src="/images/blog-image3.jpg" width={800} height={1200} className="img-responsive" alt="" /></a>
                            </div>
                            <div className="media-body blog-info">
                                <small><i className="fa fa-clock-o"></i> December 14, 2017</small>
                                <h3><a href="blog-detail.html">new creative fashion.</a></h3>
                                <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                                <a href="blog-detail.html" className="btn section-btn">Read article</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">

                        <div className="media blog-thumb">
                            <div className="media-object media-left">
                                <a href="blog-detail.html"><Image src="/images/blog-image4.jpg" width={800} height={1200} className="img-responsive" alt="" /></a>
                            </div>
                            <div className="media-body blog-info">
                                <small><i className="fa fa-clock-o"></i> December 10, 2017</small>
                                <h3><a href="blog-detail.html">minimalist design trend in 2018.</a></h3>
                                <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis.</p>
                                <a href="blog-detail.html" className="btn section-btn">View Detail</a>
                            </div>
                        </div>
                    </div> */}
                    <ul className='blog-wrapper'>
                        {posts.map(post => (
                            <div key={post.id} className="">

                                <div className="blog-card-container">
                                    <div className="img-container">
                                        <a href="blog-detail.html"><Image src={post.feature_image} width={1200} height={800} className="img-responsive" alt="" /></a>
                                    </div>
                                    <div className="copy-container">
                                        <small><i className="fa fa-clock-o"></i>{post.published_at}</small>
                                        <h3><a href="blog-detail.html">{post.title}</a></h3>
                                        <p>{post.excerpt}</p>
                                        <a href="blog-detail.html" className="btn section-btn">View Detail</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        
    </>
);
}


// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { getPosts } from "../lib/posts";

// export const Blog = (props) => {

//    useEffect(()=> {
//     console.log(props)
//    }, [props])
        

// }

// export async function getStaticProps(context) {
//     const posts = await getPosts()
  
//     if (!posts) {
//       return {
//         notFound: true,
//       }
//     }
  
//     return {
//       props: { posts }
//     }
//   }