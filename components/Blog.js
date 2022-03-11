import Image from "next/image";
import Link from "next/link";

export const Blog = () => {

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

                        <div className="col-md-6 col-sm-6">

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
                        </div>
                            
                    </div>
                </div>
            </section>
        </>
    );
}