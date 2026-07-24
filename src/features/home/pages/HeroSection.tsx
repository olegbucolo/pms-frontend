import { Tabs } from "@base-ui/react";
import MainSearch from "../../../shared/layout/header/search/MainSearch";
import tabs from './tabs.module.css';
import tabsOverride from './tabsOverride.module.css';
import BuySearch from "../../buy/components/BuySearch";
import RentSearch from "@/features/rent/components/RentSearch";

export default function HeroSection() {
    return (
        <div className="z-10 mb-50 w-full px-5">

            <Tabs.Root className={`${tabs.Root} ${tabsOverride.Root}`} defaultValue="overview">
                <Tabs.List className={`${tabs.List}`}>
                    <Tabs.Tab className={`THE-TAB ${tabs.Tab} ${tabsOverride.Tab}`} value="buy">
                        Buy
                    </Tabs.Tab>
                    <Tabs.Tab className={`THE-TAB ${tabs.Tab} ${tabsOverride.Tab} `} value="rent">
                        Rent
                    </Tabs.Tab>
                    <Tabs.Tab className={`THE-TAB ${tabs.Tab} ${tabsOverride.Tab}`} value="sell">
                        Sell
                    </Tabs.Tab>
                    <Tabs.Indicator className={`${tabs.Indicator} ${tabsOverride.Indicator}`} />
                </Tabs.List>
                <div className={`${tabs.PanelViewport} ${tabsOverride.PanelViewport} backdrop-blur-sm`}>
                    <Tabs.Panel className={`THE-PANEL ${tabs.Panel} ${tabsOverride.Panel}`} value="buy">
                        <BuySearch />
                    </Tabs.Panel>
                    <Tabs.Panel className={`THE-PANEL ${tabs.Panel} ${tabsOverride.Panel}`} value="rent">
                        <RentSearch />
                    </Tabs.Panel>
                    <Tabs.Panel className={`THE-PANEL ${tabs.Panel} ${tabsOverride.Panel}`} value="sell">
                        <MainSearch />
                    </Tabs.Panel>
                </div>
            </Tabs.Root>
        </div>
    )
}