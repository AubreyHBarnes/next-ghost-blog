import Image from "next/image";
import Link from "next/link";

export const Work = () => {

    return (
        <>
            <section id="work" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="section-title">
                                <h2>My work</h2>
                                <span className="line-bar">...</span>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="work-thumb">
                                <a href="https://confident-kirch-fa35dc.netlify.app/" className="image-popup">
                                    <Image src="/images/space-site.png" width={750} height={1150} className="img-responsive" alt="Work" />

                                    <div className="work-info">
                                            <h3>Space Tourism</h3>
                                            <small>NextJS, Figma, TailwindCSS</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">

                            <div className="work-thumb">
                                <a href="https://festive-lamarr-eea456.netlify.app/" className="image-popup">
                                    <Image src="/images/cocktail_app.png" width={750} height={1150} className="img-responsive" alt="Work" />

                                    <div className="work-info">
                                            <h3>Full Stack Cocktail App</h3>
                                            <small>NextJS, Supabase, CocktailDB, TailwindCSS</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">

                            <div className="work-thumb">
                                <a href="https://heuristic-carson-78a498.netlify.app/" className="image-popup">
                                    <Image src="/images/uploader.png" width={750} height={1150} className="img-responsive" alt="Work" />

                                    <div className="work-info">
                                            <h3>Image Uploader</h3>
                                            <small>NextJS, Supabase, TailwindCSS</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">

                            <div className="work-thumb">
                                <a href="https://perronfinancialgroup.net/" className="image-popup">
                                    <Image src="/images/financial_group.png" width={750} height={1150} className="img-responsive" alt="Work" />

                                    <div className="work-info">
                                            <h3>Client Insurance Site</h3>
                                            <small>Netlify Forms, TailwindCSS</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}