import React from "react";

const TeamPage = () => {
    return (
        <div>
            <section id="about" className="py-3 aboutsection">
                <div className="container">
                <div className="imageus">
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="greettxt">About Us</h1>
                            <br/>
                            <p className="aboutus">We are all very different. We were born in different continents, at
                                different times,
                                love different music, food and books. But we have something that unites us all,
                                it is our desire to bring all book lovers together.
                            </p>
                            <p className="aboutus">Trough our website we are aiming to 
                            </p>
                            <p className="aboutus">And with all this data in mind, we created the project Live Happy. With it we are
                                bringing to you positive,
                                uplifting and funny content, that is meant to relieve you from your daily stress.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section id="staff" className="py-5 text-center text-white contsection">
                <div className="container">
                    <h1>Contributors</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="../../assets/eti.jpg"
                                 alt="Generic placeholder image"
                                 width="140"
                                 height="140"/>
                            <h2>Ekaterina Blagoeva</h2>
                            <p>I am interested in books about evolution, neuroscience,
                            astrophysics, religion and biology. 
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="../../assets/hema.jpg"
                                 alt="Generic placeholder image"
                                 width="140"
                                 height="140"/>
                            <h2 className="p-1">Hema Dwivedi</h2>
                            <p className="p-3"> I am a romantic person and I love reading romantic novels.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="../../assets/shirley.jpg"
                                 alt="Generic placeholder image"
                                 width="140"
                                 height="140"/>
                            <h2>Shirley Rivera</h2>
                            <p>I always enjoyed thriller books. I love the sense of mystery and suspense they give me! </p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="../../assets/madel.png"
                                 alt="Generic placeholder image"
                                 width="140"
                                 height="140"/>
                            <h2>Madel</h2>
                            <p>wwwwwwww </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;























