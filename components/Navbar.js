import Link from "next/link";

export const Navbar = () => {

    return (
        <>
            <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                        </button>
                        <a href="index.html" className="navbar-brand">AHB<br />DEV</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-nav-first">
                            <li><a href="#home" className="smoothScroll">Home</a></li>
                            <li><a href="#about" className="smoothScroll">About</a></li>
                            {/* <li><a href="#blog" className="smoothScroll">Blog</a></li> */}
                            <li><a href="#work" className="smoothScroll">Our Work</a></li>
                            <li><a href="#contact" className="smoothScroll">Contacts</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://github.com/AubreyHBarnes"><i className="fa fa-github"></i></a></li>
                            <li><a href="https://twitter.com/HbarnesAu"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/aubrey-barnes/"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}