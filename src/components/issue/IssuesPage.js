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
