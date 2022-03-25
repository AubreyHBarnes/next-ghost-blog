import Image from "next/image";

export const About = () => {
    
    return (
        <>
            <section id="about" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="about-row ">
                        <div className="about-txt-container">
                            <div className="about-info">
                                <div className="section-title">
                                    <h2>Nice to meet you!</h2>
                                    <span className="line-bar">...</span>
                                </div>
                                <p>I have worked in Web Development for nearly two years,
                                    mostly in a WordPress environment at Marketing Agencies around Lafayette, LA.
                                    I am interested in branching out into Jamstack development.
                                    While I am not a designer, I do have an eye for translating a design file into
                                    an interactive pixel-perfect User Interface.</p>
                            </div>
                        </div>

                        {/* <div className="">
                            <div className="about-info skill-thumb">

                            </div>
                        </div>   */}
                        <div className="">
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