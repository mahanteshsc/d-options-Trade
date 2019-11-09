import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class TradePage extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        Trade Page
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
export default TradePage;
