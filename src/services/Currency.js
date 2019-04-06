import _ from 'lodash';

class Currency
{
	extract(responseDictionary)
	{
		const listCurrency = responseDictionary.data.currency;
		const result = listCurrency.map(function(item) {
			return {
				code: _.get(item, 'code'),
				abbr: _.get(item, 'abbr'),
				rate: _.get(item, 'rate', 1)
			}
		})
		return result
	}
}

export default new Currency()
