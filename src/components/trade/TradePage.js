import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { translate, Trans } from "react-i18next";

class TradePage extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
       <h1><Trans i18nKey="redeem" /></h1>
        <h2><Trans i18nKey="redeem_fiat" /></h2>
        <p>
          <Trans i18nKey="bank_account" />
        </p>
        <p >
          <a target="_blank" href={'https://medium.com/uma-project/intro-to-blockchain-based-synthetic-derivatives-d3a61f3e6e79'}>
            <Trans i18nKey="redeem" />
          </a>
        </p>

      </div>
    );
  }

  // handleDeleteCourse =  course => {
  //   toast.success("Course deleted");
  // try {
  //   await this.props.actions.deleteCourse(course);
  // } catch (error) {
  //   toast.error("Delete failed. " + error.message, { autoClose: false });
  // }
  // };


}
// export default TradePage;
export default translate("translations")(TradePage);
