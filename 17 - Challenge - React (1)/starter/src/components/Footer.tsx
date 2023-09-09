import React from "react";

interface Props {
  destinations: string;
  contact: string;
  stories: string;
}

const Footer = (props: Props) => {
  return (
    <div>
      <div className="main-section">
        <div className="inner-section">
          <p>{props.destinations}</p>
          <p>{props.contact}</p>
          <p>{props.stories}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
