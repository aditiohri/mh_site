import React from "react";
import { capitaliseFirstLetter } from "../../professionCodes";
import { curriedFillInStaticTextByLang, enAndFrContent } from "../../utilities";

const AccessibilityIcon = ({ fasClass }) => {
  return (
    <li>
      <i className={`access-icon fas ${fasClass}`}></i>
    </li>
  );
};

const AccessibilityIcons = ({ accessibilityBooleans }) => {
  const iconFasClasses = {
    wheelchair: "fa-wheelchair",
    trans: "fa-transgender-alt",
    slidingScale: "fa-balance-scale",
  };
  return (
    <ul className="accessibility-icons">
      {Object.keys(accessibilityBooleans).map((iconType) =>
        accessibilityBooleans[iconType] ? (
          <AccessibilityIcon
            key={iconFasClasses[iconType]}
            fasClass={iconFasClasses[iconType]}
          />
        ) : null
      )}
    </ul>
  );
};

const staticText = {
  paymentTitle: enAndFrContent("Payment", "Payment"),
  // individualSessions,
  // studentIndividualRate,
  // coupleFamilyRate,
  // coupleFamilyStudentRate,
  // payBy,
  // insuranceAccepted,
  accessibilityTitle: enAndFrContent(
    "Accessibility information",
    "Accessibility information"
  ),
};

const BioPayment = ({
  lang,
  paymentRates,
  paymentMethods,
  insuranceAccepted,
  accessibilityBooleans,
}) => {
  const fillText = curriedFillInStaticTextByLang(lang);
  const paymentMethodsString = paymentMethods
    .map(capitaliseFirstLetter)
    .join(", ");
  const insuranceAcceptedString = insuranceAccepted
    .map(capitaliseFirstLetter)
    .join(", ");
  return (
    <div className="bio payment bio-box">
      <h2>{fillText(staticText.paymentTitle)}</h2>
      <ul className="payment-rates">
        <li>{`Individual sessions: ${paymentRates.individual}$ per hour`}</li>
        <li>{`Student individual rate: ${paymentRates.studentIndividual}$ per hour`}</li>
        <li>{`Couple / Family: ${paymentRates.coupleFamily}$ per hour`}</li>
        <li>{`Student couple / family rate: ${paymentRates.studentCoupleFamily}$ per hour`}</li>
      </ul>
      <ul className="payment-methods">
        <li>{`Pay by: ${paymentMethodsString}`}</li>
        <li>{`Insurance plans accepted: ${insuranceAcceptedString}`}</li>
      </ul>
      <h2>{fillText(staticText.accessibilityTitle)}</h2>
      <AccessibilityIcons accessibilityBooleans={accessibilityBooleans} />
    </div>
  );
};

export default BioPayment;
