import React from "react";

class Settings extends React.Component{
    
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
                        <img src="assets\imgs/avatar.png" alt="" />
                    </div>
                    </div>
                    <h1 className="p-relative">Settings</h1>
                        <div className="settings-page m-20 d-grid gap-20">
                        <form action="" method="">
                            <div className="p-20 bg-white rad-10">
                            <h2 className="mt-0 mb-10">Modify Info</h2>
                            <div className="mb-15">
                                <label className="fs-14 c-grey d-block mb-10" for="first">First Name</label>
                                <input
                                className="b-none border-ccc p-10 rad-6 d-block w-full"
                                type="text"
                                id="first"
                                placeholder="First Name"
                                />
                            </div>
                            <div className="mb-15">
                                <label className="fs-14 c-grey d-block mb-5" for="last">Last Name</label>
                                <input
                                className="b-none border-ccc p-10 rad-6 d-block w-full"
                                id="last"
                                type="text"
                                placeholder="Last Name"
                                />
                            </div>
                            <div className="mb-15">
                                <label className="fs-14 c-grey d-block mb-5" for="email">E-Mail</label>
                                <input
                                className="b-none border-ccc p-10 rad-6 d-block w-full"
                                id="email"
                                type="email"
                                placeholder="E-Mail"
                                />
                            </div>
                            <div className="mb-15">
                                <label className="fs-14 c-grey d-block mb-5" for="password">Password</label>
                                <input
                                className="b-none border-ccc p-10 rad-6 d-block w-full"
                                id="password"
                                type="password"
                                placeholder="Password"
                                />
                            </div>
                            </div>
                            <br/><center><button className="button bg-green c-white btn-shape" type="submit" action="">Change</button></center>
                            
                            </form>
                            </div>
                        </div>
                  </div>
          
        </div>
        )
    }
}

export default Settings;