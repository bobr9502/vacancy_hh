import Api from "./services";

class Area {
    getApi() {
        return Api.getArea();
    }

    getArea(vacancy) {
        const areaCountryName = vacancy
            .map(function (item) {
                return item.area.main_parent;
            })
            .filter(onlyUniqueForProp);
        return areaCountryName;
    }
}

function onlyUniqueForProp(value, index, self) {
    const temp = self.map(function (item) {
        return item.id;
    });
    return temp.indexOf(value.id) === index;
}

export default new Area();
