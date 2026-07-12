import { NavigationMenu } from "@base-ui/react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import styles from './index.module.css'


export function NavDropdown({ item }: { item: any }) {
    return (
        <NavigationMenu.Item>
            <NavigationMenu.Trigger className={styles.Trigger}>
                {item.title}
                <NavigationMenu.Icon className={styles.Icon}>
                    <FaCaretDown />
                </NavigationMenu.Icon>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={styles.Content}>
                <ul className={styles.GridLinkList}>
                    {item.children?.map((child: any) => (
                        <li key={child.title}>
                            <NavLink className={styles.LinkCard} to={child.href}>
                                <h3 className={styles.LinkTitle}>{child.title}</h3>
                                <p className={styles.LinkDescription}>{child.description}</p>
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
            <NavLink className={styles.Trigger} to={item.href}>
                {item.title}
            </NavLink>
        </NavigationMenu.Item>
    )
}