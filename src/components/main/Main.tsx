import Icon from '../../components/icon/Icon.tsx';
import Href from '../../components/href/Href.tsx';
import SocialMedia from '../../components/socialMedia/SocialMedia.tsx';
import './Main.css';

const Main: React.FC = () => {
  return (
    <>
      <div className="main-wrap">
        <div className="hidden sm:flex">
          <SocialMedia />
        </div>
        <div className="content-wrap">
          <div className="content">
            <div className="content-img-wrap">
              <div className="content-img">
                <Href iconLink="whatsapp" target="_blank">
                  <Icon iconName="whatsapp" />
                </Href>
                <img
                  src="/imgs/mohsin-portfolio.png"
                  height=""
                  width=""
                  alt="mohsin-img-logo"
                />
              </div>
            </div>

            <div className="content-text-wrap">
              <div className="content-text">
                <p className="heading">M Mohsin Shahzad</p>
                <h2 className="sub-heading">Full-Stack Developer</h2>
                <p className="normal-bold-text">
                  MERN - MongoDB | Express | React | Node
                </p>
              </div>
            </div>

            <div className="sm:hidden mt-4">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      <div className="landing-bottom-spacing"></div>
    </>
  );
};

export default Main;
