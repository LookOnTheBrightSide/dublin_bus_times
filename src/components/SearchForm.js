import React, { Component } from 'react';

class SearchForm extends Component{
	render(){
		return(
			<div className="uk-grid-small uk-child-width-expand@s uk-text-center uk-grid">
				<div className="uk-width-1-2@m">
					<div className="uk-card uk-card-default uk-card-body">
					<form className="uk-form-stacked" onSubmit={this.props.getTimes}>
						<div className="uk-margin">
			  				<label htmlFor="bus_stop">Stop ID</label>
			  				<div className="uk-form-controls">
			  					<input type="text" className="uk-input" id="form-stacked-text" name="bus_stop" />	
			  				</div>
						</div>
		  				<input className="uk-button uk-button-primary" type="submit" value="Submit"/>
					</form>
					</div>
				</div>
				<div className="uk-width-1-2@m uk-width-expand uk-visible@s">
					<div className="uk-card uk-card-default uk-card-body">
					<div className="uk-grid-item-match">
						<p>Enter your bus stop number on the left. The resulting buses will be appended at the bottom.</p>
					</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchForm;
