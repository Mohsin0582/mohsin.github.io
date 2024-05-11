import Icon from '../../components/icon/Icon.tsx';
import './About.css';

function About() {
  return (
    <section className="v-card-wrapper">
      <div className="v-card">
        <div className="v-card-left-side">
          <div className="img-resizer">
            <img
              src="/imgs/mohsin-about.png"
              alt="mohsin about"
              width=""
              height=""
            />
          </div>
        </div>
        <div className="v-card-right-side">
          <div className="intro about-spacing">
            <div className="name">
              <p>Hello, I&apos;m</p>
              <h1>M Mohsin</h1>
              <span>Shahzad</span>
            </div>
            <div className="field">
              <p>Industry Proven</p>
              <h1>Full-Stack</h1>
              <span>Developer</span>
            </div>
          </div>

          <div className="line"></div>

          <div className="skills about-spacing">
            <p className="about-heading">
              <span>My</span> Skills
            </p>

            <div className="skill-blocks">
              <div className="skill-block">
                <div className="skill-name">
                  <Icon iconName="javascript" />
                  <span>JavaScript</span>
                </div>
                <span className="skill-percentage">97%</span>
                <div className="skill-progressbar">
                  <progress
                    className="progress progress-info"
                    value="97"
                    max="100"
                  ></progress>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">
                  <Icon iconName="react" />
                  <span>React</span>
                </div>
                <span className="skill-percentage">95%</span>
                <div className="skill-progressbar">
                  <progress
                    className="progress progress-info"
                    value="95"
                    max="100"
                  ></progress>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">
                  <Icon iconName="node" />
                  <span>Node</span>
                </div>
                <span className="skill-percentage">90%</span>
                <div className="skill-progressbar">
                  <progress
                    className="progress progress-info"
                    value="90"
                    max="100"
                  ></progress>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">
                  <Icon iconName="mongodb" />
                  <span>MongoDB</span>
                </div>
                <span className="skill-percentage">87%</span>
                <div className="skill-progressbar">
                  <progress
                    className="progress progress-info"
                    value="87"
                    max="100"
                  ></progress>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">
                  <Icon iconName="postgresql" />
                  <span>SQL</span>
                </div>
                <span className="skill-percentage">87%</span>
                <div className="skill-progressbar">
                  <progress
                    className="progress progress-info"
                    value="87"
                    max="100"
                  ></progress>
                </div>
              </div>

              <div className="skill-block">
                <div className="skill-name">
                  <Icon iconName="git" />
                  <span>GitHub</span>
                </div>
                <span className="skill-percentage">92%</span>
                <div className="skill-progressbar">
                  <progress
                    className="progress progress-info"
                    value="90"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>

          <div className="line"></div>

          {/* Experience */}
          <div className="experience about-spacing">
            <p className="about-heading">
              <span>Working</span> Experience
            </p>
            <div className="experience-blocks">
              <div className="vertical-line"></div>

              <div className="experience-block">
                <div className="year">
                  <div className="year-dot"></div>
                  <span>2020 - Present</span>
                </div>
                <div className="company">
                  Senior Developer <small>[ at MetaPK ]</small>
                </div>
                <ul className="description">
                  <li>
                    Developed websites using Tailwind CSS, Styled Components and
                    modern frameworks like React.js
                  </li>
                  <li>
                    Translating business requirements into technical
                    specifications and development plans
                  </li>
                  <li>
                    Collaborated with design teams to improve user engagement
                    and conversion rates
                  </li>
                  <li>
                    Code reviews to ensure code quality, maintainability, and
                    adherence to best practices
                  </li>
                  <li>
                    Researched and recommended emerging technologies and best
                    practices
                  </li>
                  <li>
                    Participated in cross-functional teams to ensure seamless
                    integration of web apps
                  </li>
                </ul>
              </div>

              <div className="experience-block">
                <div className="year">
                  <div className="year-dot"></div>
                  <span>2019 - 2020</span>
                </div>
                <div className="company">
                  Web Developer <small>[ AT Codium Tech]</small>
                </div>
                <ul className="description">
                  <li>
                    Developed responsive websites using Bootstrap, Ant Design,
                    and ECMAScript (JavaScript)
                  </li>
                  <li>
                    Implemented front-end library like React.js to create
                    dynamic user interfaces
                  </li>
                  <li>
                    Contributed to web development using back-end framework
                    Express.js
                  </li>
                  <li>
                    Implemented database designs with NoSQL database (MongoDB)
                    for data storage and retrieval
                  </li>
                  <li>
                    Built RESTful APIs and integrated them with front-end
                    components for seamless functionality
                  </li>
                </ul>
              </div>

              <div className="experience-block">
                <div className="year">
                  <div className="year-dot"></div>
                  <span>2018 - 2019</span>
                </div>
                <div className="company">
                  Junior Developer
                  <small>[ at The Social Cubes ]</small>
                </div>
                <ul className="description">
                  <li>
                    Assisted senior developers in front-end and back-end
                    development tasks
                  </li>
                  <li>
                    Create reusable components and dynamically rendered data
                    server-side data using EJS
                  </li>
                  <li>
                    Gained hands-on experience with industry-standard tools and
                    technologies
                  </li>
                  <li>
                    Utilized JavaScript libraries (jQuery, Moment.js) to enhance
                    functionality
                  </li>
                  <li>
                    Conducted cross-browser testing to ensure proper
                    functionality
                  </li>
                </ul>
              </div>

              <div className="experience-block last-block">
                <div className="year">
                  <div className="year-dot"></div>
                  <span>2018 - 2018</span>
                </div>
                <div className="company">
                  Front-End Developer
                  <small>[ at Techhive ]</small>
                </div>
                <ul className="description">
                  <li>
                    Developed and deployed static websites using HTML and CSS
                  </li>
                  <li>Worked on revamping HR recruitment software</li>
                  <li>
                    Troubleshooting for mobile responsive and cross browser
                    compatibilities
                  </li>
                  <li>
                    Collaborated with clients to understand their requirements
                    and deliver customized solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
