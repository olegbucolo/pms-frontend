import { NavigationMenu } from "@base-ui/react";
import { Link } from "react-router-dom";
import styles from './index.module.css'
import logo from './final_logo_vecteezy_com.png'

import { FaCaretDown } from "react-icons/fa";

export default function Header() {
    return (
        <header className="">
            <nav className="flex justify-between bg-red-400 ">
                <div className="left w-3xs">
                    {/* logo */}
                    <img src={logo} alt="" />
                </div>
                <div className="middle flex items-center">
                    {/* search bar */}
                    <NavigationMenu.Root className={`${styles.Root} `}>
                        <NavigationMenu.List className={`${styles.List} justify-end`}>
                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className={styles.Trigger}>
                                    Overview
                                    <NavigationMenu.Icon className={styles.Icon}>
                                        <FaCaretDown />
                                    </NavigationMenu.Icon>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className={styles.Content}>
                                    <ul className={styles.GridLinkList}>
                                        {overviewLinks.map((item) => (
                                            <li key={item.href}>
                                                <Link className={styles.LinkCard} to={item.href}>
                                                    <h3 className={styles.LinkTitle}>{item.title}</h3>
                                                    <p className={styles.LinkDescription}>{item.description}</p>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <NavigationMenu.Trigger className={styles.Trigger}>
                                    Handbook
                                    <NavigationMenu.Icon className={styles.Icon}>
                                        <FaCaretDown />
                                    </NavigationMenu.Icon>
                                </NavigationMenu.Trigger>
                                <NavigationMenu.Content className={styles.Content}>
                                    <ul className={styles.FlexLinkList}>
                                        {handbookLinks.map((item) => (
                                            <li key={item.href}>
                                                <Link className={styles.LinkCard} to={item.href}>
                                                    <h3 className={styles.LinkTitle}>{item.title}</h3>
                                                    <p className={styles.LinkDescription}>{item.description}</p>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenu.Content>
                            </NavigationMenu.Item>

                            <NavigationMenu.Item>
                                <Link className={styles.Trigger} to="https://github.com/mui/base-ui">
                                    GitHub
                                </Link>
                            </NavigationMenu.Item>
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
                </div>
                <div className="right w-3xs">
                    {/* login */}

                </div>
            </nav>
        </header>
    )
}

const overviewLinks = [
    {
        href: '/react/overview/quick-start',
        title: 'Quick Start',
        description: 'Install and assemble your first component.',
    },
    {
        href: '/react/overview/accessibility',
        title: 'Accessibility',
        description: 'Learn how we build accessible components.',
    },
    {
        href: '/react/overview/releases',
        title: 'Releases',
        description: 'See what’s new in the latest Base UI versions.',
    },
    {
        href: '/react/overview/about',
        title: 'About',
        description: 'Learn more about Base UI and our mission.',
    },
] as const;

const handbookLinks = [
    {
        href: '/react/handbook/styling',
        title: 'Styling',
        description:
            'Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.',
    },
    {
        href: '/react/handbook/animation',
        title: 'Animation',
        description:
            'Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.',
    },
    {
        href: '/react/handbook/composition',
        title: 'Composition',
        description:
            'Base UI components can be replaced and composed with your own existing components.',
    },
] as const;