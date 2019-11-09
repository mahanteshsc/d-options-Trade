import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class IssuesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }
  // state = {
  //   redirectToAddCoursePage: false
  // }

  componentDidMount() {
    const { issues, trade, actions } = this.props;
  }

  render() {
    return (
      <div>
        {/*{this.state.redirectToAddCoursePage && <Redirect to="/issue" />}*/}
        <h2>Issues</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              // onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Issue
            </button>

            {/*<CourseList*/}
              {/*onDeleteClick={this.handleDeleteIssue}*/}
              {/*courses={this.props.courses}*/}
            {/*/>*/}
          </div>
        )}
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
 export default IssuesPage;
