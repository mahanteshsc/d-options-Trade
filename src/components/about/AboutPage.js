import React from "react";
import { translate, Trans } from "react-i18next";

const AboutPage = () => (
  <div>
    <h1><Trans i18nKey="about_us" /></h1>
    <h2><Trans i18nKey="responsible_investing" /></h2>
    <p>
      <Trans i18nKey="summary_1" />
    </p>
    <p>
      <Trans i18nKey="summary_2" />
    </p>
    <p>
      <Trans i18nKey="summary_3" />
    </p>
    <h2><Trans i18nKey="assets" /></h2>
    <p>
      <Trans i18nKey="assets_1" />
    </p>
    <h2><Trans i18nKey="trade" /></h2>
    <p>
      <Trans i18nKey="trade_1" />
      <a target="_blank" href={'https://medium.com/uma-project/intro-to-blockchain-based-synthetic-derivatives-d3a61f3e6e79'}>
        <Trans i18nKey="derivatives" />
      </a>
    </p>
    <br></br>
    <p>
      <Trans i18nKey="powered_by" /> <a target="_blank" href="https://umaprotocol.org">UMA</a> <Trans i18nKey="and" /> <a target="_blank" href="https://0x.org">Ox</a>
    </p>
  </div>
);

// export default AboutPage;
export default translate("translations")(AboutPage);
