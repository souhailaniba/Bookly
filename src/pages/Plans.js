import React from "react";

class Plans extends React.Component{
    
    render(){
        return (
        
        <div>
            <div class="page d-flex">
                <div class="sidebar bg-green p-20 p-relative" > {/* style="background-color: #27ae60;" */}
                    <h3 class="p-relative txt-c mt-0">Profil</h3>
                    <ul>
                    <li>
                        <a class="d-flex align-center fs-14 c-black rad-6 p-10" href="index2.html">
                        <i class="fa-regular fa-chart-bar fa-fw"></i>
                        <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-center fs-14 c-black rad-6 p-10" href="profile.html">
                        <i class="fa-regular fa-user fa-fw"></i>
                        <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-center fs-14 c-black rad-6 p-10" href="settings.html">
                        <i class="fa-solid fa-gear fa-fw"></i>
                        <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a class="active d-flex align-center fs-14 c-black rad-6 p-10" href="files.html">
                        <i class="fa-regular fa-file fa-fw"></i>
                        <span>Files</span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-center fs-14 c-black rad-6 p-10" href="plans.html">
                        <i class="fa-regular fa-credit-card fa-fw"></i>
                        <span>Plans</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="content w-full">
                <h1 class="p-relative">Plans</h1>
                <div class="projects-page d-grid m-20 gap-20">
                <div class="project bg-white p-20 rad-6 p-relative">
                    <span class="date fs-13 c-grey">15/10/2021</span>
                    <h4 class="m-0">Book 1</h4>
                    <br /><img src="assets/imgs/pdf.svg" width="20%" />
                    <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Fyodor Dostoevsky</span>
                    </div>
                    <div class="info between-flex">
                    <h4 class="m-0">Progress</h4>
                    <div class="prog bg-eee">
                        <span class="bg-green" ></span> {/* style="width: 50%" */}
                    </div>
                    </div>
                </div>
                <div class="project bg-white p-20 rad-6 p-relative">
                    <span class="date fs-13 c-grey">15/03/2021</span>
                    <h4 class="m-0">Book 4</h4>
                    <br/><img src="assets/imgs/pdf.svg" width="20%" />
                    <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Vicor Hugo</span>
                    </div>
                    <div class="info between-flex">
                    <h4 class="m-0">Progress</h4>
                    <div class="prog bg-eee">
                        <span class="bg-green" ></span> {/* style="width: 80%" */}
                    </div>
                    </div>
                </div>
                <div class="project bg-white p-20 rad-6 p-relative">
                    <span class="date fs-13 c-grey">01/11/2021</span>
                    <h4 class="m-0">Book 7</h4>
                    <br/><img src="assets/imgs/pdf.svg" width="20%" />
                    <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">Agatha Christie</span>
                    </div>
                    <div class="info between-flex">
                    <h4 class="m-0">Progress</h4>
                    <div class="prog bg-eee">
                        <span class="bg-green" ></span> {/* style="width: 60%" */}
                    </div>
                    </div>
                </div>
                <div class="project bg-white p-20 rad-6 p-relative">
                    <span class="date fs-13 c-grey">01/11/2021</span>
                    <h4 class="m-0">Book 8</h4>
                    <br/><img src="assets/imgs/pdf.svg" width="20%" />
                    <div class="do d-flex">
                    <span class="fs-13 rad-6 bg-eee">William Faulkner</span>
                    </div>
                    <div class="info between-flex">
                    <h4 class="m-0">Progress</h4>
                    <div class="prog bg-eee">
                        <span class="bg-green" ></span> {/* style="width: 25%" */}
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

export default Plans;