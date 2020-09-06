import React from "react";
import HeaderFooter from "./HeaderFooter";
import { appendTitle } from "../utilities";
import { Link } from "react-router-dom";
import { titleCase } from "../../professionCodes";

const PractitionerPreviewCard = ({
  photoUrl,
  nameAndTitle,
  selfIdentity,
  languages,
  practitionerId,
}) => {
  return (
    <div className="bio-snippet">
      <img src={photoUrl} className="snippet-thumbnail" alt={nameAndTitle} />
      <h2 className="snippet-name">{nameAndTitle}</h2>
      <div className="snippet-details">
        <p className="snippet-details">{selfIdentity}</p>
        <p className="snippet-details">{languages}</p>
      </div>
      <div className="unclear-icons">
        <i className="fas fa-plus-square"></i>
        <i className="fas fa-plus-square"></i>
      </div>
      <div className="view-profile">
        <Link to={`/practitioner/${practitionerId}`} className="clear-style">
          <h6 className="profile-link">VIEW PROFILE</h6>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const ProfessionSelector = () => {
  return (
    <div className="page-intro">
      <h1 className="page-title filter">You are looking for</h1>
      <div className="filter">
        <select id="professional-dropdown">
          <option value="">Select:</option>
          <option value="couple">Couple and family therapists</option>
          <option value="social-workers">Social workers</option>
          <option value="psychologists">Psychologists</option>
          <option value="sexologists">Sexologists</option>
          <option value="indigenous">Indigenous elders and healers</option>
          <option value="psychotherapists">Psychotherapists</option>
          <option value="other">Other mental health professionals</option>
          <option value="placeholder">Placeholder</option>
        </select>
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
          <ProfessionSelector />
          <div className="category-container">
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
            <PractitionerPreviewCard
              photoUrl="../../static/img/bio-image-thumbnail.jpg"
              nameAndTitle="Dr. Jane Doe, PhD, OPQ"
              selfIdentity="Haitian Créole"
              languages="Speaks English, French and Haitian Créole"
              practitionerId="default"
            />
          </div>
        </div>
      </article>
    </HeaderFooter>
  );
};

export default FilterPage;
