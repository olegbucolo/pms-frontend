import { NavigationMenu } from "@base-ui/react";
import navigationMenu from './navigationMenu.module.css'
import { navItems } from './navData';
import { NavDropdown, NavSimpleLink } from "./NavDropdown";

export default function MainNav() {
    return (
        <NavigationMenu.Root className={`${navigationMenu.Root} `}>
            <NavigationMenu.List className={`${navigationMenu.List} justify-center`}>
                {navItems.map(item =>
                    item.children?.length
                        ? <NavDropdown key={item.title} item={item} />
                        : <NavSimpleLink key={item.title} item={item} />)}
            </NavigationMenu.List>

            <NavigationMenu.Portal>
                <NavigationMenu.Positioner
                    className={navigationMenu.Positioner}
                    sideOffset={10}
                    collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
                    collisionAvoidance={{ side: 'none' }}
                >
                    <NavigationMenu.Popup className={navigationMenu.Popup}>
                        <NavigationMenu.Arrow className={navigationMenu.Arrow} />
                        <NavigationMenu.Viewport className={navigationMenu.Viewport} />
                    </NavigationMenu.Popup>
                </NavigationMenu.Positioner>
            </NavigationMenu.Portal>
        </NavigationMenu.Root>
    )
}

