import { NavigationMenu } from "@base-ui/react"
import { footerQuickLinks, footerLegal, footerResources, footerSocial } from "./footerData"
import { Link, NavLink } from "react-router-dom"
import navigationMenu from '@/shared/layout/header/nav/navigationMenu.module.css'

export default function Footer() {
    return (
        <footer className="text-white">
            <div className="footer-top block py-15 bg-slate-800">
                <NavigationMenu.Root className={`${navigationMenu.Root} flex justify-center gap-8 `}>
                    <NavigationMenu.List className={`${navigationMenu.List} flex flex-col items-start text-white`}>
                        <span className="ps-3">Quick Links</span>
                        {footerQuickLinks.map(e => (
                            <NavLink className={`${navigationMenu.Trigger} text-white! hover:text-slate-800!`} to={e.href}>{e.title}</NavLink>
                        ))}
                    </NavigationMenu.List>
                    <NavigationMenu.List className={`${navigationMenu.List} flex flex-col items-start text-white`}>
                        <span className="ps-3">Legal</span>
                        {footerLegal.map(e => (
                            <NavLink className={`${navigationMenu.Trigger} text-white! hover:text-slate-800!`} to={e.href}>{e.title}</NavLink>
                        ))}
                    </NavigationMenu.List>
                    <NavigationMenu.List className={`${navigationMenu.List} flex flex-col items-start text-white`}>
                        <span className="ps-3">Resources</span>
                        {footerResources.map(e => (
                            <NavigationMenu.Item key={e.title} >
                                <NavLink className={`${navigationMenu.Trigger} text-white! hover:text-slate-800!`} to={e.href}>{e.title}</NavLink>
                            </NavigationMenu.Item>
                        ))}
                    </NavigationMenu.List>
                    <NavigationMenu.List className={`${navigationMenu.List} flex flex-col items-start text-white`}>
                        <span className="ps-3">Social</span>
                        {footerSocial.map(e => (
                            <NavLink className={`${navigationMenu.Trigger} text-white! hover:text-slate-800!`} to={e.href}>{e.title}</NavLink>
                        ))}
                    </NavigationMenu.List>
                </NavigationMenu.Root>
            </div>
            <div className="footer-bottom bg-slate-800 h-15 flex justify-center items-center">
                <span>Copyright fa©</span>
            </div>
        </footer>
    )
}