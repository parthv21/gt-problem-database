import React from "react";

const SponsorInformation = ({ sponsor }) => {
  return (
    <div>
      <span className="sponsor-title">Sponsor: </span>
      <span className="sponsor-name">{sponsor}</span>
    </div>
  );
};

export default SponsorInformation;
