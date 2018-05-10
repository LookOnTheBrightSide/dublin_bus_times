import React, { Component } from 'react';
class BusTimes extends Component{

	render(){
		return(
			<div className="uk-grid-small uk-child-width-expand@s uk-text-center uk-grid">
			{
				this.props.data.results.length > 0 ? this.props.data.results.map((bus, ind) => {
				return(<div className="results uk-width-1-3@m" key={ind}>
						<div className="uk-card uk-card-default uk-card-hover uk-card-body">
							<h3 className="uk-card-title number uk-badge">{ind + 1}</h3>
							<div className="details">
								<div className="details-row"><span className="right-align">Duetime </span><span className='bus'>{!isNaN(bus.duetime) ? bus.duetime + " minutes" : bus.duetime}</span></div>
								<div className="details-row"><span className="right-align">Bus Number </span><span className='bus'>{bus.route}</span></div>
								<div className="details-row"><span className="right-align">Destination </span><span className='bus'>{bus.destination}</span></div>
								<div className="details-row"><span className="right-align">Arrival Datetime </span><span className='bus'>{bus.arrivaldatetime}</span></div>
								<div className="details-row"><span className="right-align">Scheduled Arrival Datetime </span><span className='bus'>{bus.scheduledarrivaldatetime}</span></div>
								<div className="details-row"><span className="right-align">Coming From </span><span className='bus'>{bus.origin}</span></div>
							</div>
						</div>
					</div>)
				}): (
					<div className="uk-width-1-3@m"><p>No results ...</p></div>
					)
			}
			</div>
		)
	}
}
export default BusTimes;
