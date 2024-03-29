import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-info">
          <h3>BizPage</h3>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Home</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">About us</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Services</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Terms of service</a></li>
            <li><i className="ion-ios-arrow-right" /> <a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
          <p>
            A108 Adam Street <br />
            New York, NY 535022<br />
            United States <br />
            <strong>Phone:</strong> +1 5589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
          </p>
          <div className="social-links">
            <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
            <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
            <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
            <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
            <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
          <form action method="post">
            <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright <strong>BizPage</strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/*
    All the links in the footer should remain intact.
    You can delete the links only if you purchased the pro version.
    Licensing information: https://bootstrapmade.com/license/
    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
  */}
      Best <a href="https://bootstrapmade.com/">Bootstrap Templates</a> by BootstrapMade
    </div>
  </div>
</footer>{/* #footer */}

    </div>
  )
}

export default Footer
