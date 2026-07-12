export const overviewLinks = [
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
];

export const handbookLinks = [
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
];

export const navItems = [
    { title: 'Home', href: 'https://www.google.com' },
    { title: 'Explore', children: overviewLinks },
    { title: 'Handbook', children: handbookLinks },
];