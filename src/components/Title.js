import React, { Component } from 'react';

class Title extends Component{
	render(){
		return(
			<div className="uk-grid-small uk-child-width-expand@s uk-text-center uk-grid">
				<div className="uk-width-1-1">
					<h3>Dublin Bus App</h3>
					<p>Get bus times from the Dublin Bus Api</p>
				</div>
			</div>
		)
	}
}
export default Title;
