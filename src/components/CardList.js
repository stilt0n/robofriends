import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
	const cardArray = robots.map( (user,i) => {
		return (<Card key={i} id={robots[i].id} name={robots[i].name} 
		email={robots[i].email}/>);
	}); //Want to give a key to these so that React can keep 
	//track of them and not need to update entire DOM
	return (
		<div>
			{cardArray}
		</div> 
	);
}

export default CardList;