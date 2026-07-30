import { NavigationMenu } from "@base-ui/react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import navigationMenu from './navigationMenu.module.css'


export function NavDropdown({ item }: { item: any }) {
    return (
        <NavigationMenu.Item>
            <NavigationMenu.Trigger className={navigationMenu.Trigger}>
                {item.title}
                <NavigationMenu.Icon className={navigationMenu.Icon}>
                    <FaCaretDown />
                </NavigationMenu.Icon>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={navigationMenu.Content}>
                <ul className={navigationMenu.GridLinkList}>
                    {item.children?.map((child: any) => (
                        <li key={child.title}>
                            <NavLink className={navigationMenu.LinkCard} to={child.href}>
                                <h3 className={navigationMenu.LinkTitle}>{child.title}</h3>
                                <p className={navigationMenu.LinkDescription}>{child.description}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    )
}

export function NavSimpleLink({ item }: { item: any }) {
    return (
        <NavigationMenu.Item>
            <NavLink className={navigationMenu.Trigger} to={item.href}>
                {item.title}
            </NavLink>
        </NavigationMenu.Item>
    )
}