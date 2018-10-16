import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt='robots' src={`https://robohash.org/${id}.png`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	); //can only return one element which is the reason for wrapping in divs
}

export default Card;