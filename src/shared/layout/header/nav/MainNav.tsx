import { NavigationMenu } from "@base-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import styles from './index.module.css'
import { navItems } from './navData';
import { NavDropdown, NavSimpleLink } from "./NavDropdown";

/*

<NavDropdown styles={} links={} />

*/

export default function MainNav() {
    return (
        <NavigationMenu.Root className={`${styles.Root} `}>
            <NavigationMenu.List className={`${styles.List} justify-center`}>
                {navItems.map(navItems =>
                    navItems.children?.length
                        ? <NavDropdown key={navItems.title} item={navItems} />
                        : <NavSimpleLink key={navItems.title} item={navItems} />)}
            </NavigationMenu.List>

            <NavigationMenu.Portal>
                <NavigationMenu.Positioner
                    className={styles.Positioner}
                    sideOffset={10}
                    collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
                    collisionAvoidance={{ side: 'none' }}
                >
                    <NavigationMenu.Popup className={styles.Popup}>
                        <NavigationMenu.Arrow className={styles.Arrow} />
                        <NavigationMenu.Viewport className={styles.Viewport} />
                    </NavigationMenu.Popup>
                </NavigationMenu.Positioner>
            </NavigationMenu.Portal>
        </NavigationMenu.Root>
    )
}

