import React from "react";

const TeamPage = () => {
    return (
        <div>
            <section id="about" className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="greettxt">About Us</h1>
                            <br/>
                            <p className="aboutus">We are all very different. We were born in different continents, at
                                different times,
                                love different music, food and movies. But we have something that unites us all,
                                it is our desire to bring happiness to people wherever we go.
                            </p>
                            <p>We did our research and we've found that 75% of Americans experience moderate to high
                                stress levels each
                                month.
                                73% of people have stress that impacts their mental health and 48% of people have
                                trouble sleeping because of
                                stress.
                            </p>
                            <p>And with all this data in mind, we created the project Live Happy. With it we are
                                bringing to you positive,
                                uplifting and funny content, that is meant to relieve you from your daily stress.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://source.unsplash.com/random/700x700/?computers" alt=""
                                 className="img-fluid rounded-circle d-none d-md-block about-img"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="staff" className="py-5 text-center bg-dark text-white">
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
                            <p>Born and raised in Bulgaria. Interests include fishing, gaming, gardening. My way
                                of
                                dealing with stress is
                                gaming, listening to bulgarian music and talking about my problems with my
                                family.</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="../../assets/hema.jpg"
                                 alt="Generic placeholder image"
                                 width="140"
                                 height="140"/>
                            <h2 className="p-1">Hema Dwivedi</h2>
                            <p className="p-3"> I belong to India.My hobby is singing,raeading books,and visit
                                new
                                places.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="../../assets/shirley.jpg"
                                 alt="Generic placeholder image"
                                 width="140"
                                 height="140"/>
                            <h2>Shirley Rivera</h2>
                            <p>A native Jersey girl with roots in the NYC that wants to make things that make a
                                difference. I love white
                                sandy beaches and going out with friends. I deal with stress by dancing, working
                                out and
                                listening to good
                                music. </p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="../../assets/madel.png"
                                 alt="Generic placeholder image"
                                 width="140"
                                 height="140"/>
                            <h2>Madel</h2>
                            <p>A native Jersey girl with roots in the NYC that wants to make things that make a
                                difference. I love white
                                sandy beaches and going out with friends. I deal with stress by dancing, working
                                out and
                                listening to good
                                music. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;























