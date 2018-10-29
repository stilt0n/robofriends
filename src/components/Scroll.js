import React from 'react';
//props
//state
//children props.children allows access to components wrapped by this one

const divStyle = {
	overflowY: 'scroll',
	border: '2px solid black',
	height: '800px'
};

const Scroll = (props) => {
	return (
		<div style={divStyle}>
			{props.children}
		</div>
	);
}

export default Scroll;