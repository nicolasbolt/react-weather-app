import React from 'react';

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Indianapolis" />
		<input type="text" name="country" placeholder="US" />
		<button className="button">Get Weather</button>
	</form>
);

export default Form;