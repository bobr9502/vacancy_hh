import Api from './services';
import _ from 'lodash';

class Currency
{
	async get()
	{
		let listCurrency = await Api.getCurrency();
		if (_.get(listCurrency,'currency'))
		{
			listCurrency = listCurrency.currency;
		}
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
