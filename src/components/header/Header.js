import { useState, React } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const cart = (
	<span className={styles.cart}>
		<Link to="/cart">
			<FaShoppingCart size={20} />
		</Link>
		<p>0</p>
	</span>
);

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const hideMenu = () => {
		setShowMenu(false);
	};

	return (
		<header>
			<div className={styles.header}>
				<div className={styles.logo}>
					<Logo />
				</div>
				<nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
					<div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}></div>
						<ul>
                            <li className={styles["logo-mobile"]}>
                                <Logo/>
                                <FaTimes size={22} color={"#ff9800"} onClick={hideMenu}/>
                            </li>
							<li>
								<NavLink to="/songs" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>Songs</NavLink>
							</li>
							<li>
								<NavLink to="/events" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>Events</NavLink>
							</li>
							<li>
								<NavLink to="/merch" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>Merch</NavLink>
							</li>
						</ul>

						<div className={styles["header-right"]} onClick={hideMenu}>
							<span className={styles.links}>
								<NavLink to="/login" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>Login</NavLink>
								<NavLink to="/join" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>Join</NavLink>
								<NavLink to="/account" className={({ isActive }) => (isActive ? `${styles.active}` : "")}>Account</NavLink>
							</span>
							{cart}
						</div>
				</nav>

				<div className={styles["menu-icon"]}>
					{cart}
					<HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
				</div>
			</div>
		</header>
	);
};

export default Header;
