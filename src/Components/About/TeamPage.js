import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const TeamPage = () => {
    return (
        <MDBCard className="my-5 px-5 pb-1 text-center">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                    Our amazing team
                </h2>
                <p className="grey-text w-responsive mx-auto mb-5">
                    We had an amazing journey coming to where we are today, and
                    now we feel confident that we can provide you a professional
                    and effective solution in a timely manner.
                </p>
                <MDBRow className="text-md-left">
                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBAvatar
                                img src="\src\assets\eti.jpg"
                                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                tag="img"
                                alt="Eti B "
                            />
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right">
                            <h4 className="font-weight-bold mb-3">Ekaterina Blagoeva</h4>
                            <h6 className="font-weight-bold grey-text mb-3">
                                Full Stack Developer
                            </h6>
                            <p className="grey-text">
                                Born and raised in Bulgaria. Interests include fishing, gaming, gardening and
                                listening to bulgarian music.
                             </p>
                            <a href="#!" className="p-2 fa-lg github-ic">
                                <MDBIcon fab icon="github" />
                            </a>
                            <a href="#!" className="p-2 fa-lg li-ic">
                                <MDBIcon fab icon="linkedin-in" />
                            </a>
                            <a href="#!" className="p-2 fa-lg ins-ic">
                                <MDBIcon fab icon="instagram" />

                            </a>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBAvatar
                                img src="\src\assets\hema.jpg"
                                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                tag="img"
                                alt="Hema D"
                            />
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right">
                            <h4 className="font-weight-bold mb-3">Hema Dwivedi</h4>
                            <h6 className="font-weight-bold grey-text mb-3">
                                Full Stack Developer
              </h6>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                eos id officiis hic tenetur.
              </p>
                            <a href="#!" className="p-2 fa-lg github-ic">
                                <MDBIcon fab icon="github" />
                            </a>
                            <a href="#!" className="p-2 fa-lg li-ic">
                                <MDBIcon fab icon="linkedin-in" />
                            </a>
                            <a href="#!" className="p-2 fa-lg ins-ic">
                                <MDBIcon fab icon="instagram" />
                            </a>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBAvatar
                                img src="src\assets\madel.png"
                                className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                tag="img"
                                alt="Madel L"
                            />
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right">
                            <h4 className="font-weight-bold mb-3">Madel Liquido</h4>
                            <h6 className="font-weight-bold grey-text mb-3">
                                Full Stack Developer
                            </h6>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                eos id officiis hic tenetur.
                            </p>

                            <a href="#!" className="p-2 fa-lg github-ic">
                                <MDBIcon fab icon="github" />
                            </a>
                            <a href="#!" className="p-2 fa-lg li-ic">
                                <MDBIcon fab icon="linkedin-in" />
                            </a>
                            <a href="#!" className="p-2 fa-lg ins-ic">
                                <MDBIcon fab icon="instagram" />
                            </a>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBAvatar
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
                                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                tag="img"
                                alt="Sample avatar"
                            />
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right">
                            <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
                            <h6 className="font-weight-bold grey-text mb-3">
                                Front-end Developer
              </h6>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                eos id officiis hic tenetur.
              </p>
                            <a href="#!" className="p-2 fa-lg gplus-ic">
                                <MDBIcon fab icon="google-plus-g" />
                            </a>
                            <a href="#!" className="p-2 fa-lg li-ic">
                                <MDBIcon fab icon="linkedin-in" />
                            </a>
                            <a href="#!" className="p-2 fa-lg email-ic">
                                <MDBIcon icon="envelope" />
                            </a>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TeamPage;























