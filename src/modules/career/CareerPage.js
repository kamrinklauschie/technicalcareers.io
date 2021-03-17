import React from "react";
import NavBar from "./shared/NavBar";

function CareerPage() {
  return (
    <div className="CareerPage">
      You made a career page too! Woohoo!
      <NavBar/>
      <CareerTable careers={CAREERS} />
    </div>
  );
}

class CareerCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class CareerRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.career.name}</td>
        <td>{this.props.career.price}</td>
      </tr>
    );
  }
}

class CareerTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.careers.forEach((career) => {
      if (career.category !== lastCategory) {
        rows.push(
          <CareerCategoryRow
            category={career.category}
            key={career.category} />
        );
      }
      rows.push(
        <CareerRow
          career={career}
          key={career.name} />
      );
      lastCategory = career.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class FilterableCareersTable extends React.Component {
  render() {
    return (
      <div>
        <CareerTable careers={this.props.careers} />
      </div>
    );
  }
}


const CAREERS = [
  {category: 'Engineering', price: '$49.99', name: 'Software Engineer'},
  {category: 'Engineering', price: '$9.99', name: 'Front End Engineer'},
  {category: 'Engineering', price: '$9.99', name: 'Back End Engineer'},
  {category: 'Engineering', price: '$9.99', name: 'Data Engineer'},
  {category: 'Engineering', price: '$9.99', name: 'DevOps Engineer'},
  {category: 'Mobile Engineering', price: '$9.99', name: 'iOs Engineer'},
  {category: 'Mobile Engineering', price: '$9.99', name: 'Android Engineer'},
  {category: 'Blended Engineering', price: '$29.99', name: 'Developer Advocate'},
  {category: 'Blended Engineering', price: '$99.99', name: 'Customer Success Engineer'},
  {category: 'Blended Engineering', price: '$399.99', name: 'Sales Engineer'},
  {category: 'Blended Engineering', price: '$199.99', name: 'Technical Writer'},
  {category: 'Blended Engineering', price: '$199.99', name: 'QA Engineer'},
  {category: 'Blended Engineering', price: '$199.99', name: 'Teaching Engineer'},
  {category: 'Emerging Engineering', price: '$199.99', name: 'Machine Learning Engineer'},
  {category: 'Emerging Engineering', price: '$199.99', name: 'AR/VR Engineer'},
  {category: 'Emerging Engineering', price: '$199.99', name: 'Autonomous Vehicle Engineer'},
];

export default CareerPage;
