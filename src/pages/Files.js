import React from "react";

class Files extends React.Component{
    
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
                    <div class="head bg-white p-15 between-flex">
                    <div class="search p-relative">
                        <input class="p-10" type="search" placeholder="Type A Keyword" />
                    </div>
                    <div class="icons d-flex align-center">
                        <span class="notification p-relative">
                        <i class="fa-regular fa-bell fa-lg"></i>
                        </span>
                        <img src="assets/imgs/avatar.png" alt="" />
                    </div>
                    </div>
                    <h1 class="p-relative">Files Downloads</h1>
                    <div class="files-page d-flex m-20 gap-20">
                    <div class="files-content d-grid gap-20">
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 1</div>
                        <p class="c-grey fs-13">Hugo</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>20/06/2020</span>
                            <span>5.5MB</span>
                        </div>
                        </div>
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 3</div>
                        <p class="c-grey fs-13">Fyodor Dostoevsky</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>16/5/2021</span>
                            <span>12.5MB</span>
                        </div>
                        </div>
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 4</div>
                        <p class="c-grey fs-13">Schekspir</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>16/5/2021</span>
                            <span>2.7MB</span>
                        </div>
                        </div>
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 5</div>
                        <p class="c-grey fs-13">Hugo</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>16/5/2021</span>
                            <span>15.1MB</span>
                        </div>
                        </div>
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 6</div>
                        <p class="c-grey fs-13">William Faulkner</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>16/5/2021</span>
                            <span>2.2MB</span>
                        </div>
                        </div>
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 7</div>
                        <p class="c-grey fs-13">Anne Marie</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>16/5/2021</span>
                            <span>1.1MB</span>
                        </div>
                        </div>
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 8</div>
                        <p class="c-grey fs-13">Agatha Christie</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>16/5/2021</span>
                            <span>2.2MB</span>
                        </div>
                        </div>
                        <div class="file bg-white p-10 rad-10">
                        <i class="fa-solid fa-download c-grey p-absolute"></i>
                        <div class="icon txt-c">
                            <img class="mt-15 mb-15" src="assets/imgs/pdf.svg" alt="" />
                        </div>
                        <div class="txt-c mb-10 fs-14">Book 9</div>
                        <p class="c-grey fs-13">Fyodor Dostoevsky</p>
                        <div class="info between-flex mt-10 pt-10 fs-13 c-grey">
                            <span>16/5/2021</span>
                            <span>1.1MB</span>
                        </div>
                        </div>
                    </div>
                </div><br/><br/><br/><br/><br/>

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

export default Files;