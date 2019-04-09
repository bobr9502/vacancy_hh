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
	generateSalary (salaryVacancy, currency) {
		//console.log(item);
		const abbr = selectorsCurrency.getAbbr(salaryVacancy, currency);
		if (_.get(salaryVacancy,'from') && _.get(salaryVacancy,'to'))
			if (salaryVacancy.from === salaryVacancy.to)
				if (salaryVacancy.currency!=='RUR')
					return (<span className="employer__salary">{salaryVacancy.from} {abbr}
						<span className="employer__salary__rur">{salaryVacancy.from_rur} руб.</span></span>)
				else
					return (<span className="employer__salary">{salaryVacancy.from} {abbr}</span>)
				else
					if (salaryVacancy.currency!=='RUR')
						return (<span className="employer__salary">от {salaryVacancy.from} до {salaryVacancy.to} {abbr}
							<span className="employer__salary__rur">от {salaryVacancy.from_rur} до {salaryVacancy.to_rur} руб.</span></span> )
					else
						return (<span className="employer__salary">от {salaryVacancy.from} до {salaryVacancy.to} {abbr}</span> )
					else if (_.get(salaryVacancy,'from'))
						if (salaryVacancy.currency!=='RUR')
							return (<span className="employer__salary">от {salaryVacancy.from} {abbr}
								<span className="employer__salary__rur">от {salaryVacancy.from_rur} руб.</span></span>)
						else
							return (<span className="employer__salary">от {salaryVacancy.from} {abbr}</span>)
						else if (_.get(salaryVacancy,'to'))
						{
							if (salaryVacancy.currency!=='RUR')
								return (<span className="employer__salary">до {salaryVacancy.to} {abbr}
									<span className="employer__salary__rur">до {salaryVacancy.to_rur} руб.</span></span>)
							else
								return (<span className="employer__salary">до {salaryVacancy.to} {abbr}</span>)
						}
					}
				}

				export default helpers;

