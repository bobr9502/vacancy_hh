import React from 'react'
import _ from 'lodash'
import * as selectorsCurrency from './reducers/Currency'

const helpers = {
	//генерация элемента с классом или без
	generateVacancyItem(vacancyElement, className=null) {

		if (className==null)
			return vacancyElement==null ? (""):(<div>{vacancyElement}</div>)
		else
			return vacancyElement==null ? (""):(<div className={className}>{vacancyElement}</div>)
	},
	//генерация строки с зарплатой
	generateSalary (item, currency) {
		//console.log(item);
		const abbr = selectorsCurrency.getAbbr(item, currency);
		if (_.get(item,'salary.from') && _.get(item,'salary.to'))
			if (item.salary.from === item.salary.to)
				if (item.salary.currency!=='RUR')
					return (<span className="employer__salary">{item.salary.from} {abbr}
						<span className="employer__salary__rur">{item.salary.from_rur} руб.</span></span>)
				else
					return (<span className="employer__salary">{item.salary.from} {abbr}</span>)
				else
					if (item.salary.currency!=='RUR') 
						return (<span className="employer__salary">от {item.salary.from} до {item.salary.to} {abbr}
							<span className="employer__salary__rur">от {item.salary.from_rur} до {item.salary.to_rur} руб.</span></span> )
					else
						return (<span className="employer__salary">от {item.salary.from} до {item.salary.to} {abbr}</span> )
					else if (_.get(item,'salary.from'))
						if (item.salary.currency!=='RUR')
							return (<span className="employer__salary">от {item.salary.from} {abbr}
								<span className="employer__salary__rur">от {item.salary.from_rur} руб.</span></span>)
						else
							return (<span className="employer__salary">от {item.salary.from} {abbr}</span>)
						else if (_.get(item,'salary.to'))
						{
							if (item.salary.currency!=='RUR')
								return (<span className="employer__salary">до {item.salary.to} {abbr}
									<span className="employer__salary__rur">до {item.salary.to_rur} руб.</span></span>)
							else
								return (<span className="employer__salary">до {item.salary.to} {abbr}</span>)
						}
					}
				}

				export default helpers;

