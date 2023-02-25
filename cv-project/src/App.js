import styles from "./App.module.css";
import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: { text: "", id: uniqid() },
      email: { text: "", id: uniqid() },
      number: { text: "", id: uniqid() },
      school: { text: "", id: uniqid() },
      major: { text: "", id: uniqid() },
      graduation: { text: "", id: uniqid() },
      company: { text: "", id: uniqid() },
      position: { text: "", id: uniqid() },
      description: { text: "", id: uniqid() },
      startDate: { text: "", id: uniqid() },
      endDate: { text: "", id: uniqid() },
      // showing: true,
      // overviewShowing: false,

      personalInfoArray: [],
      educationArray: [],
      workHistoryArray: [],
    };
  }

  onSubmitTask = (e) => {
    e.preventDefault();

    this.setState({
      personalInfoArray: [this.state.name, this.state.email, this.state.number],
      educationArray: [
        this.state.school,
        this.state.major,
        this.state.graduation,
      ],
      workHistoryArray: [
        this.state.company,
        this.state.position,
        this.state.description,
        this.state.startDate,
        this.state.endDate,
      ],

      name: { text: "", id: uniqid() },
      email: { text: "", id: uniqid() },
      number: { text: "", id: uniqid() },
      school: { text: "", id: uniqid() },
      major: { text: "", id: uniqid() },
      graduation: { text: "", id: uniqid() },
      company: { text: "", id: uniqid() },
      position: { text: "", id: uniqid() },
      description: { text: "", id: uniqid() },
      startDate: { text: "", id: uniqid() },
      endDate: { text: "", id: uniqid() },

      // showing: false,
      // overviewShowing: true,
    });
  };
  handleChange = (e) => {
    if (e.target.id === "nameInput") {
      this.setState({
        name: {
          text: e.target.value,
          id: this.state.name.id,
        },
      });
    }
    if (e.target.id === "emailInput") {
      this.setState({
        email: {
          text: e.target.value,
          id: this.state.email.id,
        },
      });
    }
    if (e.target.id === "numberInput") {
      this.setState({
        number: {
          text: e.target.value,
          id: this.state.number.id,
        },
      });
    }
    if (e.target.id === "schoolInput") {
      this.setState({
        school: {
          text: e.target.value,
        },
      });
    }
    if (e.target.id === "majorInput") {
      this.setState({
        major: {
          text: e.target.value,
        },
      });
    }
    if (e.target.id === "graduationInput") {
      this.setState({
        graduation: {
          text: e.target.value,
        },
      });
    }
    if (e.target.id === "companyInput") {
      this.setState({
        company: {
          text: e.target.value,
        },
      });
    }
    if (e.target.id === "positionInput") {
      this.setState({
        position: {
          text: e.target.value,
        },
      });
    }
    if (e.target.id === "descriptionInput") {
      this.setState({
        description: {
          text: e.target.value,
        },
      });
    }
    if (e.target.id === "startDateInput") {
      this.setState({
        startDate: {
          text: e.target.value,
        },
      });
    }
    if (e.target.id === "endDateInput") {
      this.setState({
        endDate: {
          text: e.target.value,
        },
      });
    }
  };

  render() {
    const {
      name,
      email,
      number,
      school,
      major,
      graduation,
      company,
      position,
      description,
      startDate,
      endDate,
      // showing,
      // overviewShowing,

      personalInfoArray,
      educationArray,
      workHistoryArray,
    } = this.state;

    return (
      <div className={styles.App} id={"app"}>
        <div className={styles.cvGen}>Cv Generator</div>
        <form
          // style={{ display: showing ? "flex" : "none" }}
          onSubmit={this.onSubmitTask}
        >
          <div className={styles.personalInfoHead}>Personal Info</div>
          <div className={styles.personalInfo}>
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={name.text}
              id="nameInput"
            />
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              onChange={this.handleChange}
              value={email.text}
              id="emailInput"
            />
            <label htmlFor="numberInput">Phone number</label>
            <input
              type="number"
              onChange={this.handleChange}
              value={number.text}
              id="numberInput"
            />
          </div>
          <div className={styles.educationHead}>Education</div>
          <div className={styles.education}>
            <label htmlFor="schoolInput">School</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={school.text}
              id="schoolInput"
            />
            <label htmlFor="majorInput">Field of study</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={major.text}
              id="majorInput"
            />
            <label htmlFor="graduationInput">Graduation date</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={graduation.text}
              id="graduationInput"
            />
          </div>
          <div className={styles.workHistoryHead}>Work History</div>
          <div className={styles.workHistory}>
            <label htmlFor="companyInput">Previous company</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={company.text}
              id="companyInput"
            />

            <label htmlFor="positionInput">Role at Company</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={position.text}
              id="positionInput"
            />

            <label htmlFor="descriptionInput">Describe your role</label>
            <input
              type="textarea"
              onChange={this.handleChange}
              value={description.text}
              id="descriptionInput"
            />

            <label htmlFor="startDateInput">Start date</label>
            <input
              type="date"
              onChange={this.handleChange}
              value={startDate.text}
              id="startDateInput"
            />

            <label htmlFor="endDateInput">End date</label>
            <input
              type="date"
              onChange={this.handleChange}
              value={endDate.text}
              id="endDateInput"
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        <Overview
          personalInfoArray={personalInfoArray}
          educationArray={educationArray}
          workHistoryArray={workHistoryArray}
        />
      </div>
    );
  }
}

export default App;
