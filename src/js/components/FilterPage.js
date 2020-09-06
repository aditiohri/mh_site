import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";
import { Link } from "react-router-dom";

//providerType is of format "type-of-profession"
//for page title we want "Type Of Profession"
const titleCase = (providerType) =>
  providerType
    .split("-")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");

const ProviderPreviewCard = () => {
  return (
    <div className="bio-snippet">
      <img
        src="../../static/img/bio-image-thumbnail.jpg"
        className="snippet-thumbnail"
      />
      <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
      <div className="snippet-details">
        <p className="snippet-details">Haitian Créole</p>
        <p className="snippet-details">
          Speaks English, Fench and Haitian Créole
        </p>
      </div>
      <div className="unclear-icons">
        <i className="fas fa-plus-square"></i>
        <i className="fas fa-plus-square"></i>
      </div>
      <div className="view-profile">
        <Link to="/practitioner/default" className="clear-style">
          <h6 className="profile-link">VIEW PROFILE</h6>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const FilterPage = ({ match }) => {
  //this works!
  const { providerType } = match.params;
  appendTitle(titleCase(providerType));
  return (
    <HeaderFooter className="services">
      <article className="content">
        <div className="wrapper professional-filter inner">
          <div className="page-intro">
            <h1 className="page-title filter">You are looking for</h1>
            <div className="filter">
              <select id="professional-dropdown">
                <option value="">Select:</option>
                <option value="couple">Couple and family therapists</option>
                <option value="social-workers">Social workers</option>
                <option value="psychologists">Psychologists</option>
                <option value="sexologists">Sexologists</option>
                <option value="indigenous">
                  Indigenous elders and healers
                </option>
                <option value="psychotherapists">Psychotherapists</option>
                <option value="other">Other mental health professionals</option>
                <option value="placeholder">Placeholder</option>
              </select>
            </div>
          </div>
          <div className="category-container">
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="bio-snippet">
              <img
                src="img/bio-image-thumbnail.jpg"
                className="snippet-thumbnail"
              />
              <h2 className="snippet-name">Dr. Jane Doe, PhD, OPQ</h2>
              <div className="snippet-details">
                <p className="snippet-details">Haitian Créole</p>
                <p className="snippet-details">
                  Speaks English, French and Haitian Créole
                </p>
              </div>
              <div className="unclear-icons">
                <i className="fas fa-plus-square"></i>
                <i className="fas fa-plus-square"></i>
              </div>
              <div className="view-profile">
                <a href="bio-page.html" className="clear-style">
                  <h6 className="profile-link">VIEW PROFILE</h6>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default FilterPage;
