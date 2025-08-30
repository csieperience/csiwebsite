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

.hero-content {
  position: relative; /* make it a positioning context */
  z-index: 1;
  padding: 20px 0;
}

.hero-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); /* adjust opacity/color */
  z-index: -1; /* keeps it behind the text */
  border-radius: 8px; /* optional, for rounded corners */
}

</style>

<template>
    <main class="main">

        <!-- hero slider -->
<div class="hero-section" style="height: 100vh" id="home">
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
        <div class="about-area py-120" id="about">
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
                            <!-- <a href="about.html" class="theme-btn">Discover More<i class="fas fa-arrow-right"></i></a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- about area end -->

        
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
                                        <h2 class="site-title text-white">Our core values</h2>
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
                                <h4 class="feature-title">Care</h4>
                                <p>We are intentional about people and every detail.</p>
                                <!-- <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a> -->
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInDown" data-wow-delay=".25s">
                                <span class="count">02</span>
                                <div class="feature-icon">
                                    <img src="images/learn.svg" alt="">
                                </div>
                                <h4 class="feature-title">Innovation</h4>
                                <p>We push boundaries with creativity and technology</p>
                                <!-- <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a> -->
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInUp" data-wow-delay=".25s">
                                <span class="count">03</span>
                                <div class="feature-icon">
                                    <img src="images/meet.svg" alt="">
                                </div>
                                <h4 class="feature-title">Performance</h4>
                                <p>We deliver consistently and exceed expectations.</p>
                                <!-- <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a> -->
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="feature-item wow fadeInDown" data-wow-delay=".25s">
                                <span class="count">04</span>
                                <div class="feature-icon">
                                    <img src="images/question.svg" alt="">
                                </div>
                                <h4 class="feature-title">Accountability</h4>
                                <p>We own our process, our results, and your trust.</p>
                                <!-- <a href="contact.html" class="theme-btn mt-20">Learn More<i
                                        class="fas fa-arrow-right"></i></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- feature area end -->


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



        <!-- speaker area -->
        <div class="team-area">
            
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
                                <router-link to="/#contact" class="theme-btn">Contact Us Now<i class="fas fa-arrow-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cta area end -->


        <!-- choose area -->
        <div class="choose-area py-100" id="why-csi">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="choose-img wow fadeInLeft" data-wow-delay=".25s">
                            <img src="images/01_5.jpg" alt="">
                            <!-- <a href="#" class="theme-btn">Learn More <i class="far fa-arrow-right"></i></a> -->
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="choose-content wow fadeInUp" data-wow-delay=".25s">
                            <div class="site-heading mb-0">
                                <div class="site-shadow-text">Why Us</div>
                                <h2 class="site-title mb-10">Why CSI Experience ?</h2>
                                <p style="text-align: justify;">
                                    CSI Experiential is an event production company that believes events should be felt, not just attended. Born from a passion for redefining interaction, CSI specializes in engineering moments that move people and create stories worth remembering. With a commitment to bringing a VIP treatment to every event, CSI focuses on creating immersive experiences with seamless, spectacular execution.
                                </p>

                                <p style="text-align: justify;">
                                    CSI is driven by the belief that events should evoke real emotion, and we achieve this by ensuring that every element of the production—from lighting to interactive experiences—plays a role in creating moments that are not only visually impressive but truly memorable.
                                </p>

                                <p style="text-align: justify;">
                                    CSI’s vision goes beyond business success. Through the Hands on Deck Foundation, CSI is committed to supporting indigent children and orphans, creating opportunities for a brighter future.
                                </p>
                            </div>
                            <div class="choose-content-wrap d-none">
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
        <div class="testimonial-area bg py-120" id="testimonials">
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
        <div class="gallery-area py-120" id="experiences">
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


        <!-- contact area -->
        <div class="contact-area partner-bg py-120" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                            <!-- <span class="site-title-tagline">Gallery</span> -->
                            <h2 class="site-title">Contact <span>Us</span></h2>
                            <div class="site-shadow-text wow fadeInRight" data-wow-delay=".35s">Contact Us</div>
                        </div>
                    </div>
                </div>
                <div class="contact-content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-map-location-dot"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>Office Address</h5>
                                    <p>19 Austin Coker Drive, Harmony estate, Ogba, Lagos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-phone-volume"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>Call Us</h5>
                                    <p>+2348069204058</p>
                                    <p>+2349024861566</p>
                                    <p>+2348062229169</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-envelopes"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>Email Us</h5>
                                    <p>csieventsmedia@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                                <div class="contact-info-icon">
                                    <i class="fal fa-alarm-clock"></i>
                                </div>
                                <div class="contact-info-content">
                                    <h5>Open Time</h5>
                                    <p>Mon - Sat (10.00AM - 05.30PM)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-wrapper">
                    <div class="row g-4">
                        <!-- <div class="col-lg-5">
                            <div class="contact-img">
                                <img src="images/01_1.jpg" alt="">
                            </div>
                        </div> -->
                        <div class="col-lg-12">
                            <div class="contact-form">
                                <div class="contact-form-header">
                                    <h2>Get In Touch</h2>
                                    <!-- <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page randomised words which don't look even slightly when looking
                                        at its layout. </p> -->
                                </div>
                                <form method="post" action="/eventu/assets/php/contact.php" id="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="far fa-user-tie"></i></span>
                                                <input type="text" class="form-control" name="name"
                                                    placeholder="Your Name" required="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="far fa-envelope"></i></span>
                                                <input type="email" class="form-control" name="email"
                                                    placeholder="Your Email" required="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="far fa-pen"></i></span>
                                        <input type="text" class="form-control" name="subject"
                                            placeholder="Your Subject" required="">
                                    </div>
                                    <div class="input-group textarea">
                                        <span class="input-group-text"><i class="far fa-comment-lines"></i></span>
                                        <textarea name="message" cols="30" rows="5" class="form-control"
                                            placeholder="Write Your Message"></textarea>
                                    </div>
                                    <button type="submit" class="theme-btn">Send
                                        Message <i class="far fa-paper-plane"></i></button>
                                    <div class="col-md-12 mt-3">
                                        <div class="form-messege text-success"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end contact area -->

    </main>
</template>

