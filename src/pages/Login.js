import React from "react";

class Login extends React.Component{
    
    render(){
        return (
        
        <div>
            
            <header className="header">

                <div className="header-1">

                    <a href="#" className="logo"> <i className="fas fa-book"></i> Bookly </a>
                    <div className="icons">
                        <div id="search-btn" className="fas fa-search"></div>
                        <a href="./Login.html"  >Sign In</a> {/* style="font-size:x-large;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" */}
                        <a href="./Register.html" >Sign Up</a> {/* style="font-size:x-large;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" */}
                    </div>

                </div>

                <div className="header-2">
                    <nav className="navbar">
                        <a href="index.html">Home</a>
                        <a href="index.html">Books</a>
                        <a href="index.html">Information</a>
                        <a href="index.html">Client's Reviews</a>
                    </nav>
                </div>

            </header>


                <div className="main">
                    
                    <section className="sign-in">
                        <div className="container">
                            <div className="signin-content">
                                <div className="signin-image">
                                    
                                    <figure><img src="assets/images/Back.png" alt="sing up image" /></figure> {/* style="border-radius: 4%;" */}
                                    <a href="./Register.html" className="signup-image-link">Create an account</a>
                                </div>

                                <div className="signin-form">
                                    <h2 className="form-title">Sign up</h2>
                                    <form method="POST" className="register-form" id="login-form">
                                        <div className="form-group">
                                            <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                            <input type="text" name="name" id="your_name" placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                            <input type="password" name="pass" id="your_pass" placeholder="Password"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                            <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                        </div>
                                        <div className="form-group form-button">
                                            <a href="./index2.html" name="signin" id="signin" className="form-submit" >Log in</a> {/* style="background-color: #27ae60;" */}
                                        </div>
                                    </form>
                                    <div className="social-login">
                                        <span className="social-label">Or login with</span>
                                        <ul className="socials">
                                            <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                            <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                            <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
        )
    }
}

export default Login;