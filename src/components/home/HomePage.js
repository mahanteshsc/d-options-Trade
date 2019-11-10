import React from "react";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import TextInput from "../common/TextInput";
// import MetaMaskLoginButton from 'react-metamask-login-button';
import SelectInput from '../common/SelectInput'

const handleSubmit= (event) => {
  // console.log('A name was submitted: ' + this.state.value);
  event.preventDefault();
};

const buySellA = [{name: 'Buy', value :'Buy'},{name: 'Sell', value :'Sell'}];
const optsArr = [{name: 'call', value :'call Options'},{name: 'put', value :'put options'}];
const assetArr = [{name: 'tcad', value :'TCAD'}];

const HomePage = (security) => (
  <div >
    <h1><Trans i18nKey="title_etf" /></h1>
    <h2><Trans i18nKey="promoting" /></h2>

    <form onSubmit={handleSubmit}>

    {/*<p>*/}
      <Trans i18nKey="want" />
      <SelectInput
        name="buySellId"
        label="BuySell"
        value={security.buySell || ""}
        defaultOption="Select Order Type"
        options={buySellA.map(bs => ({
          value: bs.value,
          text: bs.name
        }))}
        onChange={security.onChange}
      />
      <SelectInput
        name="optsId"
        label="opts"
        value={security.opts || ""}
        defaultOption="Select Options"
        options={optsArr.map(opts => ({
          value: opts.value,
          text: opts.name
        }))}
        onChange={security.onChange}
      />
      <Trans i18nKey="asset" />
      <SelectInput
        name="assetId"
        label="asset"
        value={security.asset || ""}
        defaultOption="Select Asset"
        options={assetArr.map(asset => ({
          value: asset.value,
          text: asset.name
        }))}
        onChange={security.onChange}
      />

    {/*</p>*/}
    {/*<p>*/}
      <Trans i18nKey="strike_price" />
      <TextInput
        name="prideId"
        label="Price"
        value={security.title}
        onChange={security}
      />
    {/*</p>*/}
    {/*<p>*/}
      <Trans i18nKey="expiring" /><TextInput
        name="dateId"
        label="Date"
        value={security.title}
        onChange={security}
      />
    {/*</p>*/}
    </form>
  </div>
);

// export default HomePage;
export default translate("translations")(HomePage);
