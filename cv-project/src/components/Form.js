import React, { Component } from "react";

class Form extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       name: { text: "" },
  //       email: { text: "" },
  //       number: { text: "" },
  //       school: { text: "" },
  //       major: { text: "" },
  //       graduation: { text: "" },
  //       //   company: { text: "" },
  //       //   position: { text: "" },
  //       //   description: { text: "" },
  //       //   startDate: { text: "" },
  //       //   endDate: { text: "" },
  //     };
  //   }

  //   onSubmitTask = (e) => {
  //     e.preventDefault();
  //     this.setState({});
  //   };
  //   handleChange = (e) => {
  //     if (e.target.id === "nameInput") {
  //       this.setState({
  //         name: {
  //           text: e.target.value,
  //         },
  //       });
  //     }
  //     if (e.target.id === "emailInput") {
  //       this.setState({
  //         email: {
  //           text: e.target.value,
  //         },
  //       });
  //     }
  //     if (e.target.id === "numberInput") {
  //       this.setState({
  //         number: {
  //           text: e.target.value,
  //         },
  //       });
  //     }
  //     if (e.target.id === "schoolInput") {
  //       this.setState({
  //         school: {
  //           text: e.target.value,
  //         },
  //       });
  //     }
  //     if (e.target.id === "majorInput") {
  //       this.setState({
  //         major: {
  //           text: e.target.value,
  //         },
  //       });
  //     }
  //     if (e.target.id === "graduationInput") {
  //       this.setState({
  //         graduation: {
  //           text: e.target.value,
  //         },
  //       });
  //     }
  //     // if (e.target.id === "companyInput") {
  //     //   this.setState({
  //     //     company: {
  //     //       text: e.target.value,
  //     //     },
  //     //   });
  //     // }
  //     // if (e.target.id === "positionInput") {
  //     //   this.setState({
  //     //     position: {
  //     //       text: e.target.value,
  //     //     },
  //     //   });
  //     // }
  //     // if (e.target.id === "descriptionInput") {
  //     //   this.setState({
  //     //     description: {
  //     //       text: e.target.value,
  //     //     },
  //     //   });
  //     // }
  //     // if (e.target.id === "startDateInput") {
  //     //   this.setState({
  //     //     startDate: {
  //     //       text: e.target.value,
  //     //     },
  //     //   });
  //     // }
  //     // if (e.target.id === "endDateInput") {
  //     //   this.setState({
  //     //     endDate: {
  //     //       text: e.target.value,
  //     //     },
  //     //   });
  //     // }
  //   };

  render() {
    const {
      name,
      email,
      number,
      school,
      major,
      graduation,
      //   company,
      //   position,
      //   description,
      //   startDate,
      //   endDate,
    } = this.state;

    return (
      <form onSubmit={this.onSubmitTask}>
        <div className="personalInfo">
          Personal Info
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
        <div className="education">
          Education
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
        {/* 
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
        /> */}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
