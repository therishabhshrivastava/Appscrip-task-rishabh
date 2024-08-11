'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import headerTopLogo from '../../public/icons/nav-top-logo.svg'
import Logo from '../../public/icons/company-logo.svg'
import { CiSearch, CiHeart, CiMenuBurger } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import './Navbar.css'


const Header = () => {

	const menuBarList = [
		"Home",
		"Shop",
		"Skills",
		"About",
		"Contact Us"
	]
	const [sideNavbarOpen, setSideNavbarOpen] =  useState(false);

	return (
		<header>
			<section className="header-top">
				<div className="header-top-item mobile">
					<Image src={headerTopLogo} alt="headerTopLogo" />
					<p>Lorem ipsum dolor</p>
				</div>
				<div className='header-top-item mobile'>
					<Image src={headerTopLogo} alt="headerTopLogo" />
					<p>Lorem ipsum dolor</p>
				</div>
				<div className='header-top-item'>
					<Image src={headerTopLogo} alt="headerTopLogo" />
					<p>Lorem ipsum dolor</p>
				</div>
			</section>

			<section className="header-body">
				<div className="company-logo">
					<div onClick={() => setSideNavbarOpen((prev) => !prev)} className="burger-icon-link" href="#">
						<CiMenuBurger className='burger-icon' />
					</div>
					<Link href="#">
						<Image src={Logo} alt="Company-Logo" />
					</Link>

					{sideNavbarOpen && <div className="header-navbar-list-cont">
						<IoMdClose onClick={() => setSideNavbarOpen((prev) => !prev)} className="close-icon"  />
						<div className="nav-lists">
							{menuBarList.map((list, index) => {
								return (
									<Link key={index} href='#' className="nav-items">
										{list}
									</Link>
								)
							} )}
						</div>
					</div>
					}

				</div>
				<div className="company-title">
					<h1>LOGO</h1>
				</div>
				<div className="header-nav-icons">
					<div>
						<Link href="#">
							<CiSearch className='nav-icons'  />
						</Link>
					</div>
					<div>
						<Link href="#">
							<CiHeart className='nav-icons'  />
						</Link>
					</div>
					<div>
						<Link href="#">
							<LiaShoppingBagSolid  className='nav-icons' />
						</Link>
					</div>
					<div className='mobile'>
						<Link href="#">
							<IoPersonOutline className='nav-icons' />
						</Link>
					</div>
					<div className="mobile">
						<select name="languages" className='select'>
							<option value="ENG">ENG</option>
							<option value="ESP">ESP</option>
							<option value="FRA">FRA</option>
						</select>
					</div>
				</div>
			</section>

			<section className='header-footer'>
				<nav>
					<div className="footer-item footer-item-active">
						<Link href="#"  className='link-txt'>
							<p>HOME</p>
						</Link>
						<p className='divider'>|</p>
					</div>
					<div className="footer-item">
						<Link href="#" className='link-txt'>
							<p>SHOP</p>
						</Link>
					</div>
					<div className="footer-item mobile">
						<Link href="#" className='link-txt'>
							<p>SKILLS</p>
						</Link>
					</div>
					<div className="footer-item mobile">
						<Link href="#" className='link-txt'>
							<p>STORIES</p>
						</Link>
					</div>
					<div className="footer-item mobile">
						<Link href="#" className='link-txt'>
							<p>ABOUT</p>
						</Link>
					</div>
					<div className="footer-item mobile">
						<Link href="#" className='link-txt'>
							<p>CONTACT US</p>
						</Link>
					</div>
				</nav>

			</section>
		</header>
	)
}

export default Header
