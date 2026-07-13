import { Tabs } from "@base-ui/react";
import MainSearch from "../../../shared/layout/header/search/MainSearch";
import tabs from './tabs.module.css';
import tabsOverride from './tabsOverride.module.css';

export default function HeroSection() {
    return (
        <div className="z-10 mb-50 w-full px-5">

            <Tabs.Root className={`${tabs.Root} ${tabsOverride.Root}`} defaultValue="overview">
                <Tabs.List className={tabs.List}>
                    <Tabs.Tab className={`${tabs.Tab} ${tabsOverride.Tab}`} value="overview">
                        Overview
                    </Tabs.Tab>
                    <Tabs.Tab className={`${tabs.Tab} ${tabsOverride.Tab}`} value="projects">
                        Projects
                    </Tabs.Tab>
                    <Tabs.Tab className={`${tabs.Tab} ${tabsOverride.Tab}`} value="account">
                        Account
                    </Tabs.Tab>
                    <Tabs.Indicator className={tabs.Indicator} />
                </Tabs.List>
                <div className={`${tabs.PanelViewport} ${tabsOverride.PanelViewport}`}>
                    <Tabs.Panel className={`${tabs.Panel} ${tabsOverride.Panel}`} value="overview">
                        <MainSearch />

                    </Tabs.Panel>
                    <Tabs.Panel className={`${tabs.Panel} ${tabsOverride.Panel}`} value="projects">
                        <MainSearch />

                    </Tabs.Panel>
                    <Tabs.Panel className={`${tabs.Panel} ${tabsOverride.Panel}`} value="account">
                        <MainSearch />

                    </Tabs.Panel>
                </div>
            </Tabs.Root>
        </div>
    )
}