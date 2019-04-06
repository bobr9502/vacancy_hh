import _ from "lodash";
import Api from "./Services";
//import Currency from './currency'
//import Area from './area'

class Vacancy {
  async get(numberPage, listCurrency, listArea) {
    const data = await Api.getVacancies(50, numberPage);
    const result = await Promise.all(
      data.items.map(async function(item) {
        const main_parent = identifyMainParentByRegionId(
          _.get(item, "area.id"),
          listArea
        ); //ищем страну
        const rurConvert = convertToRUR(item, listCurrency);
        //console.log(main_parent);
        return {
          id: _.get(item, "id"),
          address: {
            city: _.get(item, "address.city"),
            street: _.get(item, "address.street"),
            building: _.get(item, "address.building")
          },
          area: {
            id: _.get(item, "Area.js.id"),
            name: _.get(item, "Area.js.name"),
            main_parent: {
              id: _.get(main_parent, "id"),
              name: _.get(main_parent, "name")
            }
          },
          contacts: {
            email: _.get(item, "contacts.email"),
            name: _.get(item, "contact.name")
          },
          requirement: _.get(item, "snippet.requirement"),
          responsibility: _.get(item, "snippet.responsibility"),
          employer: {
            name: _.get(item, "employer.name")
          },
          name: _.get(item, "name"),
          salary: {
            currency: _.get(item, "salary.currency"),
            from: _.get(item, "salary.from"),
            to: _.get(item, "salary.to"),
            from_rur: _.get(rurConvert, "from_rur"),
            to_rur: _.get(rurConvert, "to_rur")
          }
        };
      })
    );

    return result;
  }
}

export default new Vacancy();

//конвертируем в RUR
function convertToRUR(vacancyItem, listCurrency) {
  if (vacancyItem.salary) {
    const currentCurrency = listCurrency.find(
      itemCurrency => itemCurrency.code === vacancyItem.salary.currency
    );
    if (currentCurrency) {
      return {
        from_rur: Math.round(vacancyItem.salary.from / currentCurrency.rate),
        to_rur: Math.round(vacancyItem.salary.to / currentCurrency.rate)
      };
    }
  }
}

//поиск по дереву
function findNode(id, currentNode) {
  let i, currentChild, result;

  if (id === currentNode.id) {
    return currentNode;
  } else {
    for (i = 0; i < currentNode.areas.length; i += 1) {
      currentChild = currentNode.areas[i];
      result = findNode(id, currentChild);
      if (result !== false) {
        return result;
      }
    }
    return false;
  }
}

//поиск главное родителя (страны) по региону
function identifyMainParentByRegionId(id, listArea) {
  for (let i = 0; i < listArea.length; i++) {
    let findNodeResult = findNode(id, listArea[i]);
    if (findNodeResult !== false) return listArea[i];
  }
}

//export const getVacancyApi = (numberPage=0)  => async dispatch => {
//загрузка справочника с валютами для перевода в RUR
//	const listCurrency = await Currency.get();
//получаем справочник регионов
//const listArea = await Api.getArea();

//	var v = new Vacancy();
//	const listVacancy = await v.get(numberPage, listCurrency, listArea);

//генерируем список всех стран, вакансии которых были загружены и удаляем дубли
//const listOnlyAreaByCurrentVacancy = await Area.getAll(listVacancy);

//dispatch({type: 'ADD_LIST_CURRENCY', items: listCurrency});
//dispatch({type: 'ADD_LIST_VACANCY', items: listVacancy});
//dispatch({type: 'ADD_LIST_AREA', items: listOnlyAreaByCurrentVacancy});
//}

//async function getAreaOnlyCurrentVacancy(api_data_url_vacancies) //получить массив стран загруженных вакансий
//{
//	let areaListId = api_data_url_vacancies.items.map(function(item) {
//		return item.area.id;
//	});
//	areaListId = areaListId.filter(onlyUnique);

//	let areaCountryName = await Promise.all(areaListId.map(async function(item) {
//		return await getAreaCountryVacancy(item);
//	}));

//	areaCountryName = areaCountryName.filter(onlyUniqueForProp);
//	return areaCountryName;
//}

//async function getAreaCountryVacancy(item) //получить последний родительский area(страну) по id area вакансии
//{
//	var apiUrlAreaId = await fetch('https://api.hh.ru/areas/'+item);
// if (checkStatus(apiUrlAreaId))
//	{
//		var apiDataAreaId = await apiUrlAreaId.json();
//		while (apiDataAreaId.parent_id != null)
//		{
//			apiUrlAreaId = await fetch('https://api.hh.ru/areas/'+apiDataAreaId.parent_id);
//			if (checkStatus(apiUrlAreaId)){
//				apiDataAreaId = await apiUrlAreaId.json();
//			}
//		};
//		return apiDataAreaId;
//	}
//}

//function onlyUnique(value, index, self) {
//	return self.indexOf(value) === index;
//}
