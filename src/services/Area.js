
class Area {
  extract(response) {
    return response.data;
  }

  getArea(vacancy) {
    const areaCountryName = vacancy
      .map(({ area: { main_parent } }) => main_parent)
      .filter(onlyUniqueForProp);
    return areaCountryName;
  }
}

function onlyUniqueForProp(value, index, self) {
  const temp = self.map(({ id }) => id);
  return temp.indexOf(value.id) === index;
}

export default new Area();
