
import React, { useEffect } from 'react';

function Home() {

    const courses = [
    {
      title: "Cabin Crew & Ground Staff Duty Training",
      image: "image/course-img-1.png",
    },
    {
      title: "Hospitality Management Training",
      image: "image/course-img-1.png",
    },
    {
      title: "Travel Management Training",
      image: "image/course-img-1.png",
    },
    {
      title: "Customer Service Training",
      image: "image/course-img-1.png",
    },
  ];

  const partnerLogos = [
    "airindia -logo.png",
    "air-arbia-logo.png",
    "qatar-logo.png",
    "lufthansa-logo.png",
    "aksa-air-logo.png",
    "go-first-logo.png",
    "indigo-logo.png",
    "emirates-logo.png",
    "vistara-logo.png",
    "singapore-logo.png",
    "air-asia-logo.png",
  ];
  useEffect(() => {
    // Wait for DOM & jQuery
    const $ = window.$;
    if ($) {
      $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        },
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ]
      });
    }
  }, []);


  

    return (
        <>
         <section className="video-container">
      <iframe
      width="100%" height="500"
        src="https://www.youtube.com/embed/k2R_6j9Ynso"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>

    <section className="mt-2 mb-3 text-center">
      <img src="/image/Aksa-Logo.svg" alt="Aksa Logo" />
    </section>

    <section>
      <div className="course-img"   style={{ backgroundImage: `url("/image/banner-img.jpg")` }}
      >
        <div className="container">
          <div className="course-img-cnt text-center">
            <img src="/image/course-logo.png" alt="Course Logo" />
            <p className="course-img-descripition">
              Delivering quality education, skills based training and job
              oriented professional certification that serves the need of
              dynamic industries worldwide such as Aviation, Hospitality,
              Tourism, Retail & Customer Services
            </p>
            <h4 className="course-img-tittle">Featured Courses</h4>
          </div>

          <div className="row">
            {courses.map((course, index) => (
              <div className="col-md-3" key={index}>
                <div className="course-block-1">
                  <div className="course-block-cnt">
                    <img src={course.image} alt={course.title} />
                    <h4 className="course-block-tittle">{course.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="why-aksa section-m text-center">
        <div className="container-fluid">
          <h3 className="testimonials-tittle">Why AKSA International</h3>
          <p className="why-aksa-descriptions">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            faucibus suscipit viverra. Nulla faucibus dapibus ante, vitae
            mattis ante cursus quis. Mauris id congue eros. Sed eleifend ornare
            nunc, at interdum orci ultricies eget. Nullam sapien nisi, porta
            sit amet libero quis, euismod egestas magna. Fusce eleifend commodo
            volutpat.
          </p>

          <img src="/image/rajwada.png" alt="Rajwada" />

          <div className="row border-b">
            <div className="col-md-2">
              <div className="slanted-box">
                Our
                <br />
                Placement
                <br />
                Associates
              </div>
            </div>

            <div className="col-md-10">
              <div className="logos-marquee">
                <div className="home-logo-wrapper">
                  <div className="clients-grid logo-animate">
                    {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                      <img
                        key={index}
                        src={`/image/${logo}`}
                        alt={logo.replace(".png", "")}
                        className="client-logo"
                        loading="eager"
                      />
                    ))}
                  </div>

                  <div className="home-logo-left-gradient"></div>
                  <div className="home-logo-left-gradient right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="testimonials text-center section-m">
        <div className="container">
          <h3 className="testimonials-tittle">Testimonials</h3>
          <div className="owl-carousel testimonial-slider owl-theme">
            {[...Array(5)].map((_, i) => (
              <div className="item" key={i}>
                <div className="main-box">
                  <iframe
                    width="320"
                    height="240"
                    src="https://www.youtube.com/embed/rbAXuxWNfzg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="bottom-box">
                    <p className="bottom-box-descripition">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="circle"></div>
                  <div className="speech-bubble">
                    <h4 className="speech-bubble-tittle">Lorem ipsum</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div className="ftr-img" style={{backgroundImage: `url("/image/banner-img.jpg")` }}>
        <div className="container">
          <div className="row">
            {[1, 2].map((_, index) => (
              <div className="col-md-6" key={index}>
                <div className="form-box">
                  <form action="">
                    <div className="form-group">
                      <h4 className="text-center text-white mb-3 fw-bold">
                        {index === 0 ? 'INQUIRY FORM' : 'FEEDBACK'}
                      </h4>
                      <label htmlFor={`fullname-${index}`} className="text-white">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        id={`fullname-${index}`}
                        placeholder="Enter your name"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor={`mobile-${index}`} className="text-white">
                        MOBILE NO.
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        id={`mobile-${index}`}
                        placeholder="Enter your mobile"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor={`email-${index}`} className="text-white">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        id={`email-${index}`}
                        placeholder="Enter your email"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <div className="text-center">
                        <label htmlFor={`feedback-${index}`} className="text-center text-white">
                          FEEDBACK
                        </label>
                      </div>
                      <textarea
                        rows="6"
                        name="feedback"
                        id={`feedback-${index}`}
                        className="ui-autocomplete-input"
                        autoComplete="off"
                        role="textbox"
                        aria-autocomplete="list"
                        aria-haspopup="true"
                        style={{ width: '100%' }}
                      ></textarea>
                    </div>

                    <div className="form-group text-center">
                      <button type="submit" className="submit-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ))}
          </div>

          <div className="btm-ftr text-center">
            <img src="image/footer-logo.png" alt="Footer Logo" />
            <div className="ftr-cnt">
              <p className="mb-0">
                <a href="#" className="ftr-link">
                  Mob. No.: +91 7725 888 880
                </a>
                <a href="#" className="ftr-link">
                  {' '}
                  E-mail : info@aksainternational.com
                </a>
              </p>
              <div className="line"></div>
              <p>
                Opposite TI Mall, 201 Laxmi Tower Near, MG Road Palasia, Indore, Madhya Pradesh 452001
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center">
        <p>
          <a href="#" className="copyright-link">
            &copy; 2025 AKSA Training Institute Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>


    
        </>
    );
}
export default Home;
