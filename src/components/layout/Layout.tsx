import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.tsx';
import Footer from '../../components/footer/Footer.tsx';
// import Contact from '../../components/contact/Contact.tsx';
import { ContactContextProvider } from '../../components/contextProviders/Providers.tsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const handleContact = () => {
//   setClose((prevClose) => !prevClose);
// };

const Layout: React.FC = () => {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother>();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
        normalizeScroll: true,
      });

      ScrollTrigger.matchMedia({
        // desktop
        '(min-width: 640px)': function () {
          ScrollTrigger.create({
            trigger: '.v-card',
            pin: '.v-card-left-side',
            pinSpacing: false,
            start: 'top top',
            end: 'bottom bottom',
            // markers: {
            //   indent: 800,
            //   startColor: 'orange',
            //   endColor: 'orange',
            // },
          });
        },
      });
    },
    { scope: main },
  );

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <div className="web-bg bg-one">
            <div className="web-bg bg-two">
              <div className="container mx-auto">
                <ContactContextProvider>
                  <Navbar />
                  {/* An <Outlet> renders whatever child route is currently active,
                    so you can think about this <Outlet> as a placeholder for
                    the child routes we defined above. */}
                  <Outlet />
                </ContactContextProvider>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
