export const Contact = () => {

    return (
        <>
             <section id="contact" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">

                            <div className="col-md-12 col-sm-12">
                                <div className="section-title">
                                    <h2>Let's Keep In Touch</h2>
                                    <span className="line-bar">...</span>
                                </div>
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <form name="contact" action="/success" id="contact-form" role="form" data-netlify="true" method="post">
                                    <div className="col-sm-12 col-md-12">
                                        <input type="text" className="form-control" placeholder="Full Name" id="cf-name" name="cf-name" required="" />
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <input type="email" className="form-control" placeholder="Your Email" id="cf-email" name="cf-email" required="" />
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <input type="tel" className="form-control" placeholder="Your Phone" id="cf-number" name="cf-number" required="" />
                                    </div>

                                    <div className="col-md-12 col-sm-12">
                                        <textarea className="form-control" rows="6" placeholder="What can I do for you?" id="cf-message" name="cf-message" required=""></textarea>
                                    </div>

                                    <div className="col-md-4 col-sm-12">
                                        <input type="submit" className="form-control" name="submit" value="Send Message" />
                                    </div>

                                </form>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}