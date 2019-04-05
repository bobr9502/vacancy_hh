import Api from "./services";

class Area {
  getApi() {
    return Api.getArea();
  }

  getArea(vacancy) {
    const areaCountryName = vacancy
      .map(({ area: { main_parent } }) => main_parent)
      .filter(onlyUniqueForProp);
    console.log(vacancy);
    return areaCountryName;
  }
}

function onlyUniqueForProp(value, index, self) {
  const temp = self.map(({ id }) => id);
  return temp.indexOf(value.id) === index;
}

export default new Area();
