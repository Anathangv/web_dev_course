import React from 'react';

const SearchBox = ({mySearchChange}) => {
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={mySearchChange}
			/>
		</div>
	);
}

export default SearchBox;