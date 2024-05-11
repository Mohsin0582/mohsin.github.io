import Href from '../../components/href/Href';
import './Work.css';

const Work = () => {
  return (
    <section className="work-wrapper">
      <div className="work">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="All"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            <div className="projects">
              <div className="project-card">
                <Href iconLink="tf" target="_blank">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Trading Flow
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Trading</div>
                        <div className="badge badge-outline">Stock Market</div>
                      </div>
                    </div>
                  </div>
                </Href>
              </div>

              <div className="project-card">
                <Href iconLink="skull_studio" target="_blank">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Skull Studio
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Photography</div>
                      </div>
                    </div>
                  </div>
                </Href>
              </div>

              <div className="project-card">
                <Href iconLink="nft_trader" target="_blank">
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        NFT Trader
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">NFT</div>
                      </div>
                    </div>
                  </div>
                </Href>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 2"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
