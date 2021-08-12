import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="col-md-12">
          <div className="social-icons">
            <span className="m-4">
              <a
                href="mailto:gbgabiola@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-envelope"></i>
              </a>
            </span>
            <span className="m-4">
              <a
                href="https://github.com/gbgabiola"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#333333' }}
              >
                <i className="fab fa-github"></i>
              </a>
            </span>
            <span className="m-4">
              <a
                href="https://linkedin.com/in/gbgabiola"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#0082ca' }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </span>

            <span className="m-4">
              <a
                href="https://twitter.com/gbgabiola"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#55acee' }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
            <span className="m-4">
              <a
                href="https://instagram.com/gbgabiola/"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#ac2bac' }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </span>
            <span className="m-4">
              <a
                href="https://facebook.com/gbgabiola"
                className=""
                target="_blank"
                rel="noreferrer"
                // style={{ backgroundColor: '#3b5998' }}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </span>
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <blockquote>
                {/* "I'm a lazy man so I tend to automate everything."
          "If brain is empty keep coding, else keep order coffee."
          "First, solve the problem. Then, write the code." - John Johnson */}
                "Your future is created by what you do today."
              </blockquote>
              <small>Copyright &copy; 2021, Genesis Gabiola.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
