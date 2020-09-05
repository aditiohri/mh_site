import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SeekingPage from "./SeekingPage";
import OfferingPage from "./OfferingPage";
import WhyPage from "./WhyPage";
import AboutPage from "./AboutPage";
import ResourcesPage from "./ResourcesPage";
import FilterPage from "./FilterPage";
import BioPage from "./BioPage";

const EntryPoint = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/seeking-services" component={SeekingPage} />
      <Route exact path="/offering-services" component={OfferingPage} />
      <Route exact path="/why" component={WhyPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/resources" component={ResourcesPage} />
      {/* these are the dynamic routes for now */}
      {/* need to figure out how to fail effectively */}
      <Route exact path="/filter-by/:providerType" component={FilterPage} />
      <Route exact path="practitioner/:practitionerId" component={BioPage} />
    </Switch>
  );
};

export default EntryPoint;
