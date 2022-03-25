export const Footer = () => {
    return (
        <>
            <footer data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="footer-bottom">
                                    <div className="col-md-6 col-sm-5">
                                        <div className="copyright-text"> 
                                                <p>Copyright &copy; 2022 Aubrey Barnes</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-7">
                                        <div className="phone-contact"> 
                                                <p>Email me at <a href="mailto:aubrey.hbarnes@gmail.com"><span>aubrey.hbarnes@gmail.com</span></a></p>
                                        </div>
                                        <ul className="social-icon">
                                            <li><a href="https://github.com/AubreyHBarnes"><i className="fa fa-github"></i></a></li>
                                            <li><a href="https://twitter.com/HbarnesAu"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/aubrey-barnes/"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </footer>
        </>
    );
}