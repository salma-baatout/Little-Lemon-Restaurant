import React from 'react'
import "./styles/Footer.css";


const Footer = () => {
  return (
    <div className="container site-footer">
					<div className="row">
						<div className="col-md-4">
							<div className="widget">
								<address><strong>Little Lemon. INC</strong> <br/>590 Avenue Street, New York</address>
								<a href="tel:(423)324424534">(423) 324 424 534</a>
								<a href="mailto:office@companyname.com">office@littlelemon.com</a>
							</div>
						</div>

						<div className="col-md-3">
							<ul className="no-bullet">
								<li><a href="#">FACEBOOK</a></li>
								<li><a href="#">TWITTER</a></li>
								<li><a href="#">GOOGLE+</a></li>
								<li><a href="#">PINTEREST</a></li>
							</ul>
						</div>

						<div className="col-md-5">
							<div className="widget">
								<div className="subscribe-form">
									<form action="#">
										<input type="email" placeholder="Enter your email"/>
										<input type="submit" value="Subscribe"/>
									</form>
								</div>
							</div>
						</div>

					</div>

					<div className="colophon"><p>Copyright 2014 Little Lemon. Designed by Salma bt. All rights reserved.</p></div>
				</div> 
  )
}

export default Footer