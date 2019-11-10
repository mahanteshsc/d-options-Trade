import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { translate, Trans } from "react-i18next";

class IssuesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1><Trans i18nKey="buy_tcad" /></h1>

        <p>
          <Trans i18nKey="purchase_1" />
        </p>
        <p>
          <Trans i18nKey="purchase_2" />
        </p>
        <p>
          <Trans i18nKey="purchase_3" />
        </p>


            <p >
              <a target="_blank" href={'https://app.trusttoken.com/signup-or-signin'}>
                <Trans i18nKey="buy_tcad" />
              </a>
            </p>
      </div>
    );
  }



}
export default translate("translations")(IssuesPage);
