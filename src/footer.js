import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="other-ftr">
        <div className="container">
          <div className="btm-ftr text-center">
            <img src="/image/footer-logo.png" alt="Footer Logo" />
            <div className="ftr-cnt">
              <p className="mb-0">
                <a href="#" className="ftr-link">Mob. No.: +91 7725 888 880</a>
                <a href="#" className="ftr-link"> E-mail :info@aksainternational.com</a>
              </p>
              <div className="line"></div>
              <p>Opposite TI Mall, 201 Laxmi Tower Near, MG Road Palasia, Indore, Madhya Pradesh 452001</p>
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
  );
};

export default Footer;
