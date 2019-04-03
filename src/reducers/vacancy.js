import * as selectorsSort from "./sortVacancy";
import * as selectorsFilter from "./filterVacancyCountry";
import _ from "lodash";

const initialState = [];

export default function vacancy(state = initialState, action) {
  if (action.type === "ADD_LIST_VACANCY") {
    return [...state, ...action.items];
  }
  return state;
}

export function getVacancy(state) {
  const sortVacancy = selectorsSort.getSort(state);
  let vacancyFilterSort = state.vacancy.filter(vacancy =>
    vacancy.area.main_parent.id.includes(selectorsFilter.getFilter(state))
  );
  switch (sortVacancy) {
	  case "Название":
	  	return vacancyFilterSort.sort(compareName);
	  case "Зарплата от":
	  	return vacancyFilterSort.sort(compareSalaryFrom);
	  case "Зарплата до":
	  	return vacancyFilterSort.sort(compareSalaryTo)
	  default:
		  return vacancyFilterSort;
  }
}

//выдача инфы для графика
export function CountAndSalaryVacancy(vacancy) {
  const salaryArray = vacancy
    .filter(item => !isNaN(item.salary.from) && !isNaN(item.salary.to))
    .map(function(item) {
      const from = _.get(item, "salary.from_rur", 0);
      const to = _.get(item, "salary.to_rur", 0);
      let n = 0;
      n = from > 0 ? n + 1 : n;
      n = to > 0 ? n + 1 : n;
      const avgSalary = ((from > 0 ? from : 0) + (to > 0 ? to : 0)) / n;
      return avgSalary;
    });

  let data = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: "rgba(65,131,196,0.4)",
        hoverBackgroundColor: "rgba(65,131,196,1)"
      }
    ]
  };

  if (salaryArray.length > 0) {
    let maxSalary = Math.max.apply(null, salaryArray);
    //console.log("MaxSalary:"+maxSalary);
    let countPlot = 5;
    let plot = Math.floor(maxSalary / countPlot);
    let temp = 0;

    for (let i = 0; i < countPlot; i++) {
      //ranges.push({from: temp, to: temp+plot-1});
      data.labels.push(String(temp) + " - " + String(temp + plot - 1));
      temp = temp + plot;
    }
    data.labels[countPlot - 1] = temp - plot + "+";

    let osX = new Array(countPlot).fill(0);
    for (let i = 0; i < salaryArray.length; i++) {
      let plotSalary = Math.floor(salaryArray[i] / (plot - 1));
      if (plotSalary >= countPlot) plotSalary -= 1;
      osX[plotSalary] += 1;
    }
    data.datasets[0].data = osX;
    //console.log(data);
  }
  return data;
}

function compareName(a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}

function compareSalaryFrom(a, b) {
  if (a.salary === undefined || a.salary.from_rur === undefined) {
    return 1;
  } else if (b.salary === undefined || b.salary.from_rur === undefined) {
    return -1;
  } else if (a.salary.from_rur === b.salary.from_rur) {
    return 0;
  } else {
    return a.salary.from_rur < b.salary.from_rur ? 1 : -1;
  }
}

function compareSalaryTo(a, b) {
  if (a.salary === undefined || a.salary.to_rur === undefined) {
    return 1;
  } else if (b.salary === undefined || b.salary.to_rur === undefined) {
    return -1;
  } else if (a.salary.to_rur === b.salary.to_rur) {
    return 0;
  } else {
    return a.salary.to_rur < b.salary.to_rur ? 1 : -1;
  }
}
