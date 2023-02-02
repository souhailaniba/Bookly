import React from "react";

class ReadBook extends React.Component{
    render(){
        return (
        
            <div>

                <header class="header">

                    <div class="header-1">

                        <a href="#" class="logo"> <i class="fas fa-book"></i> Bookly </a>

                        <form action="" class="search-form">
                            <input type="search" name="" placeholder="Search here..." id="search-box" />
                            <label for="search-box" class="fas fa-search"></label>
                        </form>

                        <div class="icons">
                            <div id="search-btn" class="fas fa-search"></div>
                            <div id="login-btn" class="fas fa-user"><a href="./profile.html"  >Profil</a></div> {/* style="font-size:x-large;font-family: 'Times New Roman', Times, serif;" */}
                            <div id="login-btn" class="fas "><a href="./Login.html"  >Deconnexion</a></div> {/* style="font-size:x-large;font-family: 'Times New Roman', Times, serif;" */}
                            
                        </div>

                    </div>

                    <div class="header-2">
                        <nav class="navbar">
                            <a href="index2.html">Home</a>
                            <a href="#arrivals">Other Books</a>
                            <a href="#reviews">Client's Reviews</a>
                        </nav>
                    </div>

                </header>

                <nav class="bottom-navbar">
                    <a href="#home" class="fas fa-home"></a>
                    <a href="#featured" class="fas fa-list"></a>
                    <a href="#arrivals" class="fas fa-tags"></a>
                    <a href="#reviews" class="fas fa-comments"></a>
                    <a href="#blogs" class="fas fa-blog"></a>
                </nav>

                <section class="home" id="home">

                    <div class="row">

                        <div class="content">
                            <h3 >Informations</h3> {/* style="font-size: xx-large;" */}
                            <p><b >Book Name : </b>Book 1</p> {/* style="color: rgb(44, 133, 11);font-family: cursive;font-size: large;" */}
                            <p><b >Author Name : </b>Victor Hugo</p> {/* style="color: rgb(44, 133, 11);font-family: cursive;font-size: large;" */}
                            <p><b >Description : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur adipisci 
                            necessitatibus amet doloribus facilis cupiditate laboriosam ducimus tempore similique. Dignissimos ullam 
                            dolorem deleniti voluptatem nesciunt officiis culpa dolore harum.</p> {/* style="color: rgb(44, 133, 11);font-family: cursive;font-size: large;" */}
                            <button type="submit" action=""><a href="#" class="btn" >Add to wish list</a></button> {/* style="font-size: small;" */}
                            <button type="submit" action=""><a href="#" class="btn" >Add to plan list</a></button> {/* style="font-size: small;" */}
                            <button type="submit" action=""><a href="#" class="btn" >Click Here To Download</a></button> {/* style="font-size: small;" */}
                        </div>

                        <div class="swiper books-slider">
                            <div>
                                <a href="#" class="swiper-slide"><img src="assets/image/book-1.png" alt="" /></a>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>


                <section class="arrivals" id="arrivals">

                    <h1 class="heading"> <span>Other Books</span> </h1>

                    <div class="swiper arrivals-slider">

                        <div class="swiper-wrapper">

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-1.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 1</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div >Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);"  */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-2.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 2</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div>Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-3.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 3</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div >Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-4.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 4</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div >Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-5.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 5</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div >Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                        </div>

                    </div>

                    <div class="swiper arrivals-slider">

                        <div class="swiper-wrapper">

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-6.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 6</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div>Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-7.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 7</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div>Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-8.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 8</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div>Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-9.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 9</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div>Read More</div> {/* style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                            <a href="#" class="swiper-slide box">
                                <div class="image">
                                    <img src="assets/image/book-10.png" alt="" />
                                </div>
                                <div class="content">
                                    <h3>Book 10</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div>Read More</div> {/*  style="font-size: medium;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color: rgb(72, 72, 204);" */}
                                </div>
                            </a>

                        </div>

                    </div>

                </section>


                <section class="reviews" id="reviews">

                    <h1 class="heading"> <span>Client's reviews</span> </h1>

                    <div class="swiper reviews-slider">

                        <div class="swiper-wrapper">

                            <div class="swiper-slide box">
                                <img src="assets/image/pic-1.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>

                            <div class="swiper-slide box">
                                <img src="assets/image/pic-2.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>

                            <div class="swiper-slide box">
                                <img src="assets/image/pic-3.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>
                            <div class="swiper-slide box">
                                <img src="assets/image/pic-4.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>

                            <div class="swiper-slide box">
                                <img src="assets/image/pic-5.png" alt="" />
                                <h3>john deo</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            </div>

                            <div class="swiper-slide box">
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


                {/*

                <div className="loader-container">
                    <img src="assets/assets/image/loader-img.gif" alt="" />
                </div>
                
                    
                    <script src="assets/https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>


                    <script src="assets/js/script.js"></script>

                    */}

                </div>
        
        )
    }
}

export default ReadBook;