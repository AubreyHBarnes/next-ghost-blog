import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import GhostContentAPI from '@tryghost/content-api';

export function Blog({ posts }) {
  

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
                        {/* publish date is being commented out until I can figure out how to format it correctly */}
                        {posts.map(post => (
                            <div key={post.id} className="">

                                <div className="blog-card-container">
                                    <div className="img-container">
                                        <a href="blog-detail.html"><Image src={post.feature_image} width={1200} height={800} className="img-responsive" alt="" /></a>
                                    </div>
                                    <div className="copy-container">
                                        <p className='blog-date'><i className="fa fa-clock-o"></i>{post.published_at.split('T')[0]}</p>
                                        <h3><a href="blog-detail.html">{post.title}</a></h3>
                                        <p className='blog-excerpt'>{post.excerpt}</p>
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