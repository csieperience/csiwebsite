<script setup></script>

<style>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;  /* make sure video covers entire hero section */
  z-index: -1;        /* place it behind content */
}

</style>

<template>
    <main class="main">

        <!-- hero slider -->
<div class="hero-section" style="height: 100vh">
    <!-- background video -->
    <video autoplay muted loop playsinline class="hero-video">
        <source src="home-2.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <div class="hero-slider" >
        <div class="hero-single">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="hero-content">
                            <p data-animation="fadeInLeft" data-delay=".75s">
                                The Experience Company
                            </p>
                            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
                                Where <span>Events</span> <span>Become</span> Memories
                            </h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- hero slider end -->



        <!-- about area -->
        <div class="about-area py-120">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="about-left wow fadeInRight" data-wow-delay=".25s">
                            <div class="about-img">
                                <img class="img-1" src="images/01_2.jpg" alt="">
                                <img class="img-2" src="images/02.jpg" alt="">
                                <img class="img-3" src="images/03.jpg" alt="">
                            </div>
                            <div class="about-experience">
                                <span>360</span>
                                <h5>Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-right wow fadeInLeft" data-wow-delay=".25s">
                            <div class="site-heading mb-3">
                                <!-- <span class="site-title-tagline">About Us</span> -->
                                <h2 class="site-title">
                                    Welcome to <br/><span>CSI Experiential</span>
                                </h2>
                                <div class="site-shadow-text wow fadeInRight" data-wow-delay=".35s">About Us</div>
                            </div>
                            <p class="about-text">CSI Experiential is not just an event production company; we are experience architects.
                                                From concept to curtain call, we engineer moments that move people and create stories
                                                worth telling. We believe events should be felt, not attended.</p>
                            <div class="about-list-wrap">
                                <ul class="about-list list-unstyled">
                                    <li>
                                        <div class="about-item">
                                            <h4><span>01.</span> Lighting &
                                                Special FX.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-item">
                                            <h4><span>02.</span> LED Screen
                                                & Visual Displays.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-item">
                                            <h4><span>03.</span> Branding & Space
                                                Transformation.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-item">
                                            <h4><span>04.</span> Stage Designs
                                                & Installations.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-item">
                                            <h4><span>05.</span> Immersive Photo
                                            & Video Booth
                                            Experiences.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="about-item">
                                            <h4><span>06.</span> Red Carpet
                                                Experience.</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <a href="about.html" class="theme-btn">Discover More<i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- about area end -->


                <!-- partner area -->
                <div class="partner-area partner-bg py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <!-- <span class="site-title-tagline">Sponsors</span> -->
                    
                            <h2 class="site-title">Our <span>Clients</span> and <span>Portfolio</span></h2>
                            <br/>
                        </div>
                    </div>
                </div>
                <div class="partner-wrapper wow fadeInUp" data-wow-delay=".25s">
                    <div class="row g-5 justify-content-center">
                        <div class="col-6 col-md-2">
                            <img src="images/01.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/02.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/03_1.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/04.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/05.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/06.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/07.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/08.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/09.png" alt="thumb">
                        </div>
                        <div class="col-6 col-md-2">
                            <img src="images/10.png" alt="thumb">
                        </div>
                    </div>
                </div>
                <!-- <div class="text-center mt-40 wow fadeInUp" data-wow-delay=".25s">
                    <a href="#" class="theme-btn"><span class="fal fa-users"></span> Become Sponsors</a>
                </div> -->
            </div>
        </div>
        <!-- partner area end -->


        <!-- video area -->
        <div class="video-area">
            <div class="container-fluid px-0">
                <div class="video-content" style="background-image: url(images/01.jpg);">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <div class="video-info">
                                    <div class="site-heading mb-0">
                                        <!-- <span class="site-title-tagline text-white">Latest Video</span> -->
                                        <h2 class="site-title text-white">Our <span>core</span> values</h2>
                                    </div>
                                    <!-- <a href="#" class="theme-btn mt-30">Learn More <i
                                            class="fas fa-arrow-right"></i></a> -->
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="video-wrapper">
                                    <!-- <a class="play-btn popup-youtube"
                                        href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                        <i class="fas fa-play"></i>
                                    </a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- video area end -->


        <!-- feature area -->
        <div class="feature-area fa-negative">
            <div class="container">
                <div class="feature-wrapper">
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInUp" data-wow-delay=".25s">
                                <span class="count">01</span>
                                <div class="feature-icon">
                                    <img src="images/speaker.svg" alt="">
                                </div>
                                <h4 class="feature-title">Great Speakers</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInDown" data-wow-delay=".25s">
                                <span class="count">02</span>
                                <div class="feature-icon">
                                    <img src="images/learn.svg" alt="">
                                </div>
                                <h4 class="feature-title">Learn New Things</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInUp" data-wow-delay=".25s">
                                <span class="count">03</span>
                                <div class="feature-icon">
                                    <img src="images/meet.svg" alt="">
                                </div>
                                <h4 class="feature-title">Meet New People</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInDown" data-wow-delay=".25s">
                                <span class="count">04</span>
                                <div class="feature-icon">
                                    <img src="images/question.svg" alt="">
                                </div>
                                <h4 class="feature-title">Ask Questions</h4>
                                <p>It is a long established fact that a reader will be distracted.</p>
                                <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- feature area end -->



        <!-- speaker area -->
        <div class="team-area py-80">
            
        </div>
        <!-- speaker area end -->


        <!-- cta area -->
        <div class="cta-area pt-60 pb-60" style="background-image: url(images/01_1.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="cta-content wow fadeInUp" data-wow-delay=".25s">
                            <h1>Lets work together</h1>
                            <p>We redefine event experiences by crafting unforgettable moments
                                that inspire connection, creativity, and culture.</p>
                            <a href="#" class="theme-btn">Contact Us Now<i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cta area end -->


        <!-- choose area -->
        <div class="choose-area py-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="choose-img wow fadeInLeft" data-wow-delay=".25s">
                            <img src="images/01_5.jpg" alt="">
                            <a href="#" class="theme-btn">Learn More <i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                            <div class="site-heading mb-0">
                                <div class="site-shadow-text">Why Us</div>
                                <h2 class="site-title mb-10">Why CSI Experience ?</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout.
                                </p>
                            </div>
                            <div class="choose-content-wrap">
                                <div class="choose-item">
                                    <div class="choose-item-icon">
                                        <img src="images/event.svg" alt="">
                                    </div>
                                    <div class="choose-item-info">
                                        <h4>Interactive Sessions</h4>
                                        <p>There are many variations of the passages available suffered.</p>
                                    </div>
                                </div>
                                <div class="choose-item">
                                    <div class="choose-item-icon">
                                        <img src="images/location.svg" alt="">
                                    </div>
                                    <div class="choose-item-info">
                                        <h4>Massive Locations</h4>
                                        <p>There are many variations of the passages available suffered.</p>
                                    </div>
                                </div>
                                <div class="choose-item">
                                    <div class="choose-item-icon">
                                        <img src="images/idea.svg" alt="">
                                    </div>
                                    <div class="choose-item-info">
                                        <h4>Implement Your Idea</h4>
                                        <p>There are many variations of the passages available suffered.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- choose area end -->


        <!-- testimonial-area -->
        <div class="testimonial-area bg py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s" style="visibility: visible; animation-delay: 0.25s; animation-name: fadeInDown;">
                            <!-- <span class="site-title-tagline">Testimonials</span> -->
                            <h2 class="site-title">What <span>Clients Say</span> About Us</h2>
                            <div class="site-shadow-text">Testimonials</div>
                        </div>
                    </div>
                </div>
                <div class="testimonial-slider owl-carousel owl-theme wow fadeInUp owl-loaded owl-drag" data-wow-delay=".25s" style="visibility: visible; animation-delay: 0.25s; animation-name: fadeInUp;">
                    
                    
                    
                    
                <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-2412px, 0px, 0px); transition: 0.25s; width: 4020px;"><div class="owl-item cloned" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/02_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Gordon Novak</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item cloned" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/03_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Lucille Rucker</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item cloned" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/04_1.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Elizabeth Galvan</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/01_6.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Anderson Dele</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/02_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Gordon Novak</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/03_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Lucille Rucker</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item active" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/04_1.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Elizabeth Galvan</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item cloned active" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/01_6.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Anderson Dele</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item cloned active" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/02_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Gordon Novak</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div><div class="owl-item cloned" style="width: 372px; margin-right: 30px;"><div class="testimonial-single">
                        <div class="testimonial-quote">
                            <div class="testimonial-rate">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p>
                                There are many variations of passage available the majority have
                                suffered to alteration in some form making it look like readable by injected humour.
                            </p>
                            <div class="testimonial-quote-icon">
                                <img src="images/quote.svg" alt="">
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <div class="testimonial-author-img">
                                <img src="images/03_3.jpg" alt="">
                            </div>
                            <div class="testimonial-author-info">
                                <h4>Lucille Rucker</h4>
                                <p>Our Guest</p>
                            </div>
                        </div>
                    </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div>
            </div>
        </div>
        <!-- testimonial-area end -->


        <!-- gallery-area -->
        <div class="gallery-area py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <!-- <span class="site-title-tagline">Gallery</span> -->
                            <h2 class="site-title">Some of <span>Our Experiences</span></h2>
                            <div class="site-shadow-text wow fadeInRight" data-wow-delay=".35s">Our Experiences</div>
                        </div>
                    </div>
                </div>
                <div class="row g-4 popup-gallery">
                    <div class="col-md-7">
                        <div class="row g-4">
                            <div class="col-12">
                                <div class="gallery-item wow fadeInDown" data-wow-delay=".25s">
                                    <div class="gallery-img">
                                        <img src="images/02_4.jpg" alt="">
                                        <a class="popup-img gallery-link" href="assets/img/gallery/02.jpg"><i
                                                class="fal fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="gallery-item wow fadeInDown" data-wow-delay=".25s">
                                    <div class="gallery-img">
                                        <img src="images/03_4.jpg" alt="">
                                        <a class="popup-img gallery-link" href="assets/img/gallery/03.jpg"><i
                                                class="fal fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="gallery-item wow fadeInDown" data-wow-delay=".25s">
                                    <div class="gallery-img">
                                        <img src="images/04_2.jpg" alt="">
                                        <a class="popup-img gallery-link" href="assets/img/gallery/04.jpg"><i
                                                class="fal fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="gallery-item wow fadeInUp" data-wow-delay=".25s">
                            <div class="gallery-img">
                                <img src="images/01_7.jpg" alt="">
                                <a class="popup-img gallery-link" href="assets/img/gallery/01.jpg"><i
                                        class="fal fa-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- gallery-area end -->

    </main>
</template>

