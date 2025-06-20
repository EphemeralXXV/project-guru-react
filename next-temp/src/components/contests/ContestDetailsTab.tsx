import Styles from "@/components/contests/ContestDetailsTab.module.scss";

import { Tab } from "@/components/contests/ContestDetails";

interface ContestDetailsTabProps {
    tab: Tab,
    active: boolean,
    onTabClick: (tab: Tab) => void
}

const ContestDetailsTab: React.FC<ContestDetailsTabProps> = ({ tab, active, onTabClick }) => {
    const handleTabChange = (): void => {
        onTabClick(tab);
    }

    return (
        <li className = {`${Styles.tab} ${active && Styles.active}`} onClick = {handleTabChange}>
            {tab[0].toUpperCase() + tab.slice(1)  /* Capitalize first letter */}
        </li>
    );
}

export default ContestDetailsTab;