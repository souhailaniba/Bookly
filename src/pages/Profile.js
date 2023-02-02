import React from "react";

class Profile extends React.Component{
    
    render(){
        return (
        
        <div>
            <div className="page d-flex">
                <div className="sidebar bg-green p-20 p-relative" > {/* style="background-color: #27ae60;" */}
                    <h3 className="p-relative txt-c mt-0">Profil</h3>
                    <ul>
                    <li>
                        <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="index2.html">
                        <i className="fa-regular fa-chart-bar fa-fw"></i>
                        <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="profile.html">
                        <i className="fa-regular fa-user fa-fw"></i>
                        <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="settings.html">
                        <i className="fa-solid fa-gear fa-fw"></i>
                        <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a className="active d-flex align-center fs-14 c-black rad-6 p-10" href="files.html">
                        <i className="fa-regular fa-file fa-fw"></i>
                        <span>Files</span>
                        </a>
                    </li>
                    <li>
                        <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="plans.html">
                        <i className="fa-regular fa-credit-card fa-fw"></i>
                        <span>Plans</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="content w-full">
                    <div className="head bg-white p-15 between-flex">
                    <div className="search p-relative">
                        <input className="p-10" type="search" placeholder="Type A Keyword" />
                    </div>
                    <div className="icons d-flex align-center">
                        <span className="notification p-relative">
                        <i className="fa-regular fa-bell fa-lg"></i>
                        </span>
                        <img src="assets/imgs/avatar.png" alt="" />
                    </div>
                    </div>
                    <h1 className="p-relative">Profile</h1>
                    <div className="wrapper d-grid gap-20">
                    <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
                        <div className="intro p-20 d-flex space-between bg-eee">
                        <div>
                            <h2 className="m-0">Welcome</h2>
                            <p className="c-grey mt-5" name="name">Nom de l'utilisateur</p>
                        </div>
                        <img className="hide-mobile" src="assets/imgs/welcome.png" alt="" />
                        </div>
                        <img src="assets/imgs/avatar.png" alt="" className="avatar" />
                        <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
                        <div>Nom Complet <span className="d-block c-grey fs-14 mt-10">Ahmed Ahmed</span></div>
                        <div>Id<span className="d-block c-grey fs-14 mt-10">2336212254</span></div>
                        </div>
                    </div>
                    <div className="latest-uploads p-20 bg-white rad-10">
                        <h2 className="mt-0 mb-20">Latest Downloads</h2>
                        <ul className="m-0">
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                            <img className="mr-10" src="assets/imgs/pdf.svg" alt="" />
                            <div>
                                <span className="d-block">Book 1.pdf</span>
                                <span className="fs-15 c-grey">Victor Hugo</span>
                            </div>
                            </div>
                            <div className="bg-eee btn-shape fs-13">2.9mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                            <img className="mr-10" src="assets/imgs/pdf.svg" alt="" />
                            <div>
                                <span className="d-block">Book 3.pdf</span>
                                <span className="fs-15 c-grey">Agatha Christie</span>
                            </div>
                            </div>
                            <div className="bg-eee btn-shape fs-13">4.9mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                            <img className="mr-10" src="assets/imgs/pdf.svg" alt="" />
                            <div>
                                <span className="d-block">Book 4.pdf</span>
                                <span className="fs-15 c-grey">Fyodor Dostoevsky</span>
                            </div>
                            </div>
                            <div className="bg-eee btn-shape fs-13">4.5mb</div>
                        </li>
                        <li className="between-flex pb-10 mb-10">
                            <div className="d-flex align-center">
                            <img className="mr-10" src="assets/imgs/pdf.svg" alt="" />
                            <div>
                                <span className="d-block">Book 5.pdf</span>
                                <span className="fs-15 c-grey">William Faulkner</span>
                            </div>
                            </div>
                            <div className="bg-eee btn-shape fs-13">8.9mb</div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="profile-page m-20">
                    <div className="overview bg-white rad-10 d-flex align-center">
                    <div className="avatar-box txt-c p-20">
                        <img className="rad-half mb-10" src="assets/imgs/avatar.png" alt="" />
                        <h3 className="m-0">Ahmed Ahmed</h3>
                    </div>
                    <div className="info-box w-full txt-c-mobile">
                        <div className="box p-20 d-flex align-center">
                        <div className="fs-14">
                            <span className="c-grey">Full Name : </span>
                            <span> Ahmed Ahmed</span>
                        </div>
                        </div>
                        <div className="box p-20 d-flex align-center">
                        <div className="fs-14">
                            <span className="c-grey">Email:</span>
                            <span>Ahmed@gmail.com</span>
                        </div>
                        </div>
                        <div className="box p-20 d-flex align-center">
                        <div className="fs-14">
                            <span className="c-grey">Password : </span>
                            <span>123456</span>
                        </div>
                        </div>
                        <div className="box p-20 d-flex align-center">
                        <div className="fs-14">
                            <span className="c-grey">Id : </span>
                            <span>2336212254</span>
                        </div>
                        </div>
                        <div className="box p-20 d-flex align-center">
                        <a href="settings.html" className="visit d-block fs-14 bg-blue c-white w-fit btn-shape" >Modify</a> {/* style="background-color: #27ae60;" */}
                        </div>
                    </div>
                    </div>
                </div>

            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>Our location</h3>
                        <a href="#"> <i className="fas fa-map-marker-alt"></i> Casablanca, Sidi Othman.</a>
                    </div>

                    <div className="box">
                        <h3>Quick links</h3>
                        <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> books </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> clients reviews </a>
                        <a href="#"> <i className="fas fa-arrow-right"></i> information </a>
                    </div>

                    <div className="box">
                        <h3>Contact info</h3>
                        <a href="#"> <i className="fas fa-phone"></i> 0620222023 </a>
                        <a href="#"> <i className="fas fa-envelope"></i> bookly@ensam-casa.ma </a>
                    </div>
                    
                </div>

                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>

                <div className="credit"> Made by <span>SAKINI Oussama | ANIBA Souhail | BELHIAK Salah-Eddine</span></div>

                </section>

                </div>
            </div>
            
        </div>
        )
    }
}

export default Profile;