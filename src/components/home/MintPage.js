
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { translate, Trans } from "react-i18next";
import TextInput from "../common/TextInput";
// import MetaMaskLoginButton from 'react-metamask-login-button';
import SelectInput from '../common/SelectInput';
import { toast } from "react-toastify";
import {handleError, handleResponse} from "../common/apiUtils";


const handleChange= (event)=> {
  const { name, value } = event.target;
  setSecurity(prevSecurity => ({ prevSecurity,
    [name]: name === "authorId" ? parseInt(value, 10) : value
  }));
}
const baseUrl = process.env.API_URL + "/authors/";

export function sendSecurity(security) {
  return fetch(baseUrl + (security.id || ""), {
    method: security.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(security)
  })
    .then(handleResponse)
    .catch(handleError);
}



const handleSave= (event) =>  {
  event.preventDefault();
  setSaving(true);
  sendSecurity(security)
    .then(() => {
      toast.success("Item Submitted.");
      // history.push("/courses");
    })
    .catch(error => {
      setSaving(false);
      // setErrors({ onSave: error.message });
    });
}

const optsArr = [{name: 'XESG', value :'XESG'},{name: 'poETH', value :'poETH'},{name: 'coETH', value :'coETH '}];
const [security, setSecurity] = useState({ });
const [saving, setSaving] = useState(false);

const MintPage = (security={}, saving = false) => (
  <div >
    <h2><Trans i18nKey="Mint" /></h2>

    <form onSubmit={handleSave}>

      {/*<p>*/}
      <Trans i18nKey="want" />
      <SelectInput
        name="buySellId"
        label="BuySell"
        value={security.derivatives || ""}
        defaultOption="Select Derivative Type"
        options={optsArr.map(bs => ({
          value: bs.name,
          text: bs.value
        }))}
        onChange={handleChange}
      />
      {/*</p>*/}
      <button type="submit" enabled={saving} className="btn btn-primary">
        {saving ? "Submit" : "Submitting..." }
      </button>
    </form>
  </div>
);

// export default HomePage;
export default translate("translations")(MintPage);
