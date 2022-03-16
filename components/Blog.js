import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GhostContentAPI from '@tryghost/content-api';

export function Blog() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_GHOST_URL,
    key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
    version: 'v4',
  });

  // fetch 6 posts, including related tags and authors
  useEffect(() => {
    api.posts
      .browse({ limit: 6, include: 'tags,authors' })
      .then((res) => setPosts(res))
      .catch((err) => {
        console.error(err);
      });
  }, [api.posts]);

  // this useEffect is for making sure the blog posts actually display once the data is received. Previously,
  //The Blog section would remain blank until the user refreshes the browser a number of times.

  useEffect(() => {
    if(posts.length <= 0) {setLoading(true)} else if (posts.length > 0) {setLoading(false)}
  }, [posts])

  if (loading) return (
      <>
        <p>Loading...</p>
      </>
  );

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