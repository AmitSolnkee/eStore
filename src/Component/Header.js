import React from 'react';

export const Header = () => {
	return (
		<div>
			<div className="header bg-dark">
				<div className="row nav-content">
					<div className="brand my-1">
						<h1>eStore</h1>
					</div>
					<div className="inp-container w-50 h-25 my-4 p-0">
						<div className="dropdown m-0 p-0">
							<select className="select-btn w-100 m-0 p-0">
								<option>Men</option>
								<option>Women</option>
								<option>Kids</option>
							</select>
						</div>
						<input className="form-control" placeholder="Search..." />
						<button>
							<i className="fa fa-search" />
						</button>
					</div>

					<div className="login-container p-0">
						<i className="fa fa-user-circle user-icon" />
						<h5>
							<a href='#'>Login</a>
						</h5>
						/
						<h5>
							<a href='#'>Register</a>
						</h5>
					</div>

					<div className='wishlist-container'>
                       <ul className='d-flex'>
						<li className='list-icon'><i className='fa fa-heart'/></li>
						<li className='list-icon'><i className='fa fa-shopping-cart'/></li>
					   </ul>
					</div>
				</div>
			</div>
		</div>
	);
};
