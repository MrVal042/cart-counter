import React, { Component } from 'react';

const Navbar = ({ totalCounters }) => {
	return (
		<React.Fragment>
			<nav>
				<a href="#">
					navbar <span>{totalCounters}</span>
				</a>
			</nav>
			<hr />
		</React.Fragment>
	);
};

export default Navbar;
