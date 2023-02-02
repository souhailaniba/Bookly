import React from "react";

class Home2 extends React.Component{
    render(){
        return (
        
            <div>
    
                <header className="header">
                
                    <div className="header-1">
                
                        <a href="#" className="logo"> <i className="fas fa-book"></i> Bookly </a>
                
                        <form action="" className="search-form">
                            <input type="search" name="" placeholder="Search here..." id="search-box" />
                            <label for="search-box" className="fas fa-search"></label>
                        </form>
                
                        <div className="icons">
                            <div id="search-btn" className="fas fa-search"></div>
                            <div id="login-btn" className="fas fa-user"><a href="./profile.html"  >Profil</a></div> {/* style="font-size:x-large;font-family: 'Times New Roman', Times, serif;" */}
                            <div id="login-btn" className="fas "><a href="./Login.html"  >Deconnexion</a></div> {/* style="font-size:x-large;font-family: 'Times New Roman', Times, serif;" */}
                            
                        </div>
                
                    </div>
                
                    <div className="header-2">
                        <nav className="navbar">
                            <a href="#home">Home</a>
                            <a href="#featured">Books</a>
                            <a href="#arrivals">Information</a>
                            <a href="#reviews">Client's Reviews</a>
                        </nav>
                    </div>
                
                </header>
                
                
                
                <nav className="bottom-navbar">
                    <a href="#home" className="fas fa-home"></a>
                    <a href="#featured" className="fas fa-list"></a>
                    <a href="#arrivals" className="fas fa-tags"></a>
                    <a href="#reviews" className="fas fa-comments"></a>
                    <a href="#blogs" className="fas fa-blog"></a>
                </nav>
                
                
                
                <section className="home" id="home">
                
                    <div className="row">
                
                        <div className="content">
                            <h3>Welcome</h3>
                            <p>To our book website! Here you will find a wide selection of books in various genres including fiction, non-fiction, mystery, romance, and more. Our easy-to-use website allows you to browse and purchase books with just a few clicks.</p>
                        </div>
                
                        <div className="swiper books-slider">
                            <div className="swiper-wrapper">
                                <a href="#" className="swiper-slide"><img src="assets/image/book-1.png" alt="" /></a>
                                <a href="#" className="swiper-slide"><img src="assets/image/book-2.png" alt="" /></a>
                                <a href="#" className="swiper-slide"><img src="assets/image/book-3.png" alt="" /></a>
                                <a href="#" className="swiper-slide"><img src="assets/image/book-4.png" alt="" /></a>
                                <a href="#" className="swiper-slide"><img src="assets/image/book-5.png" alt="" /></a>
                                <a href="#" className="swiper-slide"><img src="assets/image/book-6.png" alt="" /></a>
                            </div>
                            <img src="assets/image/stand.png" className="stand" alt="" />
                        </div>
                
                    </div>
                
                </section><br /><br />
                
                
                <center><h1 className="heading" > <span>Our Services</span></h1></center> {/* style="padding-top: 2%;" */}
                <section className="icons-container">
                    <div className="icons">
                        <img src="assets/image/Discovery2.png" width="40%" />
                        <div className="content">
                            <h3>Access and discovery</h3>
                            
                        </div>
                    </div>
                
                    <div className="icons">
                        <img src="assets/image/Secure2.png" width="50%" />
                        <div className="content">
                            <h3>Digital lending</h3>
                            
                        </div>
                    </div>
                
                    <div className="icons">
                        <img src="assets/image/archive.png" width="40%" />
                        <div className="content">
                            <h3>Special collections</h3>
                        </div>
                    </div>
                
                    <div className="icons">
                        <img src="assets/image/Ebook.png" width="40%" />
                        <div className="content">
                            <h3>E-book downloads</h3>
                        </div>
                    </div>
                
                </section>
                
                
                
                <section>
                    
                </section>
                
                
                
                <section className="featured" id="featured">
                
                    <h1 className="heading"> <span>Books</span> </h1>
                
                    <div className="swiper featured-slider">
                
                        <div className="swiper-wrapper">
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-1.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 1</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-2.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 2</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-3.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 3</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-4.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 4</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-5.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 5</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-6.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 6</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-7.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 7</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-8.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 8</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-9.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 9</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-10.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 10</h3>
                                    <div className="price">Author: <b>Victor Hugo</b></div>
                                    <a href="#" className="btn">Add to wish list</a>
                                    <a href="#" className="btn">Add to plan list</a>
                                </div>
                            </div>
                
                        </div>
                
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                
                    </div>
                
                </section>
                
                
                
                
                <section className="arrivals" id="arrivals">
                
                    <h1 className="heading"> <span>Information</span> </h1>
                
                    <div className="swiper arrivals-slider">
                
                        <div className="swiper-wrapper">
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-1.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 1</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div > {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>                
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-2.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 2</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div > {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>                
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-3.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 3</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>                
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-4.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 4</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-5.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 5</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>                
                                </div>
                            </div>
                
                        </div>
                
                    </div>
                
                    <div className="swiper arrivals-slider">
                
                        <div className="swiper-wrapper">
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-6.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 6</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-7.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 7</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-8.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 8</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>                
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-9.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 9</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>
                                </div>
                            </div>
                
                            <div className="swiper-slide box">
                                <div className="image">
                                    <img src="assets/image/book-10.png" alt="" />
                                </div>
                                <div className="content">
                                    <h3>Book 10</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                        <a href="ReadBook.html">Read More</a>
                                    </div>                
                                </div>
                            </div>
                
                        </div>
                
                    </div>
                
                </section>
                
                
                
                <section className="reviews" id="reviews">
                
                    <h1 className="heading"> <span>Client's reviews</span> </h1>
                
                    <div className="swiper reviews-slider">
                
                        <div className="swiper-wrapper">
                
                            <div className="swiper-slide box">
                                <img src="assets/image/pic-1.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>
                
                            <div className="swiper-slide box">
                                <img src="assets/image/pic-2.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>
                
                            <div className="swiper-slide box">
                                <img src="assets/image/pic-3.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>
                            <div className="swiper-slide box">
                                <img src="assets/image/pic-4.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>
                
                            <div className="swiper-slide box">
                                <img src="assets/image/pic-5.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>
                
                            <div className="swiper-slide box">
                                <img src="assets/image/pic-6.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>
                        </div>
                
                    </div>
                    
                </section>
                
                
                
                <section className="footer">
                
                    <div className="box-container">
                
                        <div className="box">
                            <h3>our locations</h3>
                            <a href="#"> <i className="fas fa-map-marker-alt"></i> Casablanca Sidi Othman </a>
                        </div>
                
                        <div className="box">
                            <h3>quick links</h3>
                            <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
                            <a href="#"> <i className="fas fa-arrow-right"></i> books </a>
                            <a href="#"> <i className="fas fa-arrow-right"></i> client'reviews </a>
                            <a href="#"> <i className="fas fa-arrow-right"></i> information </a>
                        </div>
                
                        <div className="box">
                            <h3>contact info</h3>
                            <a href="#"> <i className="fas fa-phone"></i> 060000000 </a>
                            <a href="#"> <i className="fas fa-envelope"></i> EnsamCasa@gmail.com </a>
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
                
            
                {/* 
                
                <div className="loader-container">
                    <img src="assets/image/loader-img.gif" alt="" />
                </div>
                
                
                <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
                
                <script src="js/script.js"></script>

                */}
                
                
    

            </div>
        
        )
    }
}

export default Home2;