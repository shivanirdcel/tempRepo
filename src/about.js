import Footer from "./footer"; 
function About() {
  return (
    <>
      <section>
        <div className="about-us section-m border-r">
          <div className="container">
            <div>
              <img src="/image/about-logo.png" alt="About Logo" />
            </div>
            <div>
              <p className="about-descripotion">
                “A state-of-the-art campus, situated in financial capital of
                Madhya Pradesh, Indore. From the date of its inception in 2014,
                AKSA International (AKSA Training Institute Pvt Ltd) has grown
                into one of India’s leading Aviation Training Institutions.“
              </p>
            </div>
            <div>
              <img src="/image/rajwada.png" alt="Rajwada" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="about-us section-m">
          <div className="container">
            <div>
              <img src="/image/about-logo.png" alt="About Logo" />
            </div>
            <div>
              <p className="about-descripotion">
                AKSA International Air Hostess Training Institute is a 10 year
                old venture. We are a team of professionals who believe catering
                our training services to the well-deserved candidates so that
                their dream of serving the aviation industry holds true. We
                impart quality vocational education to the young students who
                are ready to serve the real world instantly.
              </p>
            </div>
            <div>
              <p className="about-descripotion mt-3">
                Our advisory board consists from higher accolades of aviation
                and hospitality industry. We keep on updating our training
                programs to match with the current trends and practices. We do
                not boast that we are the best but our testimonials do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="about-us p-0 section-m">
        <div className="container">
          <div>
            <h3 className="about-us-tittle text-left">Our Leadership Team</h3>
          </div>

          <div className="leaders-team">
            <img className="team-img" src="/image/team-1.png" alt="Rahul Kumar Pandey" />
            <div className="leader-head">
              <h4 className="leader-name">Mr. Rahul Kumar Pandey</h4>
              <span className="leader-post">Chairman</span>
            </div>
            <div className="leader-descripition">
              <p>
                AKSA International Air Hostess Training Institute is a company devoted to developing human capital.
                Our mission is to help students in getting promising career to improve their lives.
                We motivate and encourage our students to achieve their own personal and professional fulfillment.
              </p>
            </div>
          </div>

          <div className="leaders-team">
            <img className="team-img" src="/image/team-2.png" alt="Manisha Pandey" />
            <div className="leader-head">
              <h4 className="leader-name">Mrs. Manisha Pandey</h4>
              <span className="leader-post">Managing Director</span>
            </div>
            <div className="leader-descripition">
              <p>
                AKSA International Air Hostess Training Institute is a company devoted to developing human capital.
                Our mission is to help students in getting promising career to improve their lives.
                We motivate and encourage our students to achieve their own personal and professional fulfillment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />  {/* Footer will appear on all pages */}

    </>
  );
}
export default About;
