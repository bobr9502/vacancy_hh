import React, { Component } from "react";
import VacancyPreview from "./vacancyPreview";

class ListVacancies extends Component {
  showList() {
    const { itemsVacancy } = this.props;
    return (
      <ul>
        {itemsVacancy.map(({id, name, employer, area, salary }) => {
          return (
            <VacancyPreview key={id}
              data={{
                id: id,
                name: name,
                employerName: employer.name,
                areaName: area.Name,
                salary: salary
              }}
            />
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="list__vacancy">
        {this.showList()}
      </div>
    );
  }
}

export default ListVacancies;
