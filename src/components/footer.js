import React from "react";


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>S.S Software</span>
            </strong>
          </div>
          <div class="credits">
            Designed by <a href="https://codinghub.online/">Sanjeev Kumar</a>
          </div>
        </div>
      </footer>

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </>
  );
};

export default Footer;
