import Image from "next/image";

export const About = () => {
    
    return (
        <>
            <section id="about" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-6">
                            <div className="about-info">
                                <div className="section-title">
                                    <h2>Let us introduce</h2>
                                    <span className="line-bar">...</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="about-info skill-thumb">

                            </div>
                        </div>  
                        <div className="col-md-4 col-sm-12">
                            <div className="about-image">
                                <Image 
                                    src="/images/my-headshot.png" 
                                    className="img-responsive" 
                                    layout="responsive"
                                    width={500}
                                    height={500}
                                    alt="" />
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
}