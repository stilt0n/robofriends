import React from 'react';

/*
Props and State:
React reads props it recieves and renders something
Pure/Dumb components, recieve something, return something
deterministic.

Now need to worry about state:
An object that requires your application
State can change

Parent feeds state into child.  Child recieves it as a property.
In order to use state we need to go back to original way of creating
react components.  By creating a class.

Every time a change happens in the search box App tells SearchBox
and SearchBox calls the searchChange() function.  Remember like in DOM
you are ONLY passing a reference to the function NOT running it.  This
is why there is no () at the end.
*/

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='pa2'>
		<input 
			className='pa3 ba b--green bg-lightest-blue'
			type="search" 
			placeholder="search robots"
			onChange={searchChange}
		/>
		</div>
	);
}

export default SearchBox;