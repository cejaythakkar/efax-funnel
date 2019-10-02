import React, { Component } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Pano from "../components/pano/pano";
import ToggleButton from "../components/toggleButton/toggleButton";
import "./App.scss";
class App extends Component {
  state={
    togglebuttonSelectedCategory:'local'
  }
  handleClick = (value) => {
    this.setState({togglebuttonSelectedCategory:value})
  };
  render = () => (
    <>
      <Header></Header>
      <Pano></Pano>

      <div className="choose-number-pg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <ul className="list-unstyled funnel-steps d-flex flex-row justify-content-center">
                <li className="active step1">1. Choose number</li>
                <li className="step2">2. Create Account</li>
              </ul>
            </div>
          </div>

          <div id="chooseNumberDiv">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-center font-semi-bold">
                  Choose your fax number
                </h2>
              </div>
            </div>

            <div className="choose-number-tabs">
              <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-lg-4">
                  <ToggleButton handleClick={this.handleClick} selectedValue={this.state.togglebuttonSelectedCategory}></ToggleButton>
                </div>
              </div>

              <div className="tab-content">
                <div id="local" className="tab-pane active local-number">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-5">
                      <p className="mb-4 text-center">
                        We found a number that’s available!
                      </p>
                      <p className="m-b-25 text-center">
                        <a
                          href="create-account.html"
                          className="cta cta-lg cta-red cta-block"
                        >
                          Choose (310) 222-1215
                        </a>
                      </p>
                      <p className="font-bold m-b-25 text-center">
                        <img
                          className="m-r-10"
                          src="images/icon-fax.svg"
                          alt="I’ll use my current fax number"
                        />
                        <a
                          href="javascript:void(0);"
                          className="dk-grey"
                          id="currentNumberlink"
                        >
                          I’ll use my current fax number
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="lt-grey-bg border-top search-numbers-con">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-6 col-lg-5">
                        <p className="mb-4 text-center">
                          Search for more available numbers
                        </p>
                        <form className="search-numbers mx-auto mb-5">
                          <input
                            type="text"
                            id="searchTextbox"
                            className="form-control mx-auto"
                            placeholder="City or area code"
                          />
                          <a
                            href="javascript:void(0);"
                            className="icon-close"
                            style={{ display: "none" }}
                          >
                            <img src="images/icon-exit.svg" alt="icon close" />
                          </a>
                        </form>
                      </div>
                    </div>
                    <div
                      id="searchResult"
                      className="search-result-con"
                      style={{ display: "none" }}
                    >
                      <div className="row justify-content-center">
                        <div className="col-12 col-md-7 col-lg-5 col-xl-4">
                          <ul className="list-unstyled number-list text-center">
                            <li>
                              <a
                                className="cta cta-blue"
                                href="create-account.html"
                              >
                                (714) 289-2315
                              </a>
                              <span>Fullerton, CA</span>
                            </li>
                            <li>
                              <a
                                className="cta cta-blue"
                                href="create-account.html"
                              >
                                (714) 289-3467
                              </a>
                              <span>Fullerton, CA</span>
                            </li>
                            <li>
                              <a
                                className="cta cta-blue"
                                href="create-account.html"
                              >
                                (714) 289-2486
                              </a>
                              <span>Fullerton, CA</span>
                            </li>
                            <li>
                              <a
                                className="cta cta-blue"
                                href="create-account.html"
                              >
                                (714) 289-3467
                              </a>
                              <span>Fullerton, CA</span>
                            </li>
                            <li>
                              <a
                                className="cta cta-blue"
                                href="create-account.html"
                              >
                                (714) 289-2783
                              </a>
                              <span>Fullerton, CA</span>
                            </li>
                            <li>
                              <a
                                className="cta cta-blue"
                                href="create-account.html"
                              >
                                (714) 289-3532
                              </a>
                              <span>Fullerton, CA</span>
                            </li>
                          </ul>
                          <p className="text-center btn-refresh">
                            <a href="javascript:void(0);">
                              <img src="images/icon-refresh.svg" /> Refresh list
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  id="tollfree"
                  className="tab-pane fade toll-free-number mt-4"
                >
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-7 col-lg-5 col-xl-4 text-center">
                      <div className="dropdown dropdown-list mb-5">
                        <button
                          type="button"
                          className="btn btn-lt-grey dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          US Toll Free (888)
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            (888)
                          </a>
                          <a className="dropdown-item" href="#">
                            (877)
                          </a>
                          <a className="dropdown-item" href="#">
                            (800)
                          </a>
                          <a className="dropdown-item" href="#">
                            (866)
                          </a>
                        </div>
                      </div>
                      <ul className="list-unstyled number-list mb-2">
                        <li>
                          <a
                            className="cta cta-blue"
                            href="create-account.html"
                          >
                            (714) 289-3754
                          </a>
                        </li>
                        <li>
                          <a
                            className="cta cta-blue"
                            href="create-account.html"
                          >
                            (714) 289-2795
                          </a>
                        </li>
                        <li>
                          <a
                            className="cta cta-blue"
                            href="create-account.html"
                          >
                            (714) 289-9632
                          </a>
                        </li>
                        <li>
                          <a
                            className="cta cta-blue"
                            href="create-account.html"
                          >
                            (714) 289-3678
                          </a>
                        </li>
                        <li>
                          <a
                            className="cta cta-blue"
                            href="create-account.html"
                          >
                            (714) 289-2654
                          </a>
                        </li>
                        <li>
                          <a
                            className="cta cta-blue"
                            href="create-account.html"
                          >
                            (714) 289-7986
                          </a>
                        </li>
                      </ul>
                      <p className="text-center btn-refresh">
                        <a href="javascript:void(0);">
                          <img src="images/icon-refresh.svg" /> Refresh list
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="portNumberDiv"
            className="port-number"
            style={{ display: "none" }}
          >
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-center mb-5 font-semi-bold">
                  Enter your current fax number
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="port-number-form mx-auto">
                  <input
                    type="text"
                    id="searchPortfield"
                    className="form-control justify-content-between"
                    placeholder=""
                  />
                  >
                  <img
                    src="images/icon-success.svg"
                    className="icon-success"
                    style={{ display: "none" }}
                  />
                  <a
                    href="javascript:void(0);"
                    className="icon-close"
                    style={{ display: "none" }}
                  >
                    <img src="images/icon-exit.svg" alt="icon close" />
                  </a>
                </div>
                <p className="text-center lt-green small mb-5">
                  Good news, we can port your number to eFax!
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-11 col-md-8 col-lg-6 mb-5">
                <p className="text-center">
                  After you setup your account, you will be assigned a free
                  temporary local eFax number to start receiving faxes
                  immediately.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-md-5 col-lg-4 col-xl-3 text-center">
                <a
                  href="create-account.html"
                  className="cta cta-red cta-lg cta-block mb-5"
                >
                  Continue
                </a>
                <a
                  href="javascript:void(0)"
                  className="font-bold dk-grey"
                  id="chooseNumberlink"
                >
                  or choose a local or toll free number
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
