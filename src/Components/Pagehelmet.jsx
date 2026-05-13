import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    const { pageTitle } = this.props;
    return (
      <>
        <Helmet>
          <title>
            {pageTitle
              ? `${pageTitle} | PROFX SUMMIT 2026`
              : "PROFX SUMMIT 2026"}
          </title>
          <meta
            name="description"
            content="PROFX SUMMIT 2026 - Join industry leaders, innovators, and visionaries at the forefront of Forex technology. Explore cutting-edge developments, network with experts, and shape the future of decentralized finance."
          />
          {/* You can add other dynamic meta tags here as needed */}
        </Helmet>
      </>
    );
  }
}

export default PageHelmet;
