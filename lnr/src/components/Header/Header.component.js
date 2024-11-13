import weddingLogo from './images/wedding-image.webp';
import './Header.styles.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.component';

function Header() {
    const { t } = useTranslation();

    const getDayX = (targetDate) => {
        const today = new Date();
        const target = new Date(targetDate);

        // Calculate the difference in time (milliseconds)
        const differenceInTime = target.getTime() - today.getTime();

        // Convert the time difference to days
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

        return differenceInDays;
    };

    return (
        <header className="Header">
            <LanguageSwitcher />
            <div className="Header-Content">
                <img src={weddingLogo} className="Header-Logo" alt="weddingLogo" />
                <h1 className="Header-Title">{t('CoupleName')}</h1>
                <p className="Header-Date">{`${t('Date')} • ${t('Place')}`}</p>
                <p className="Header-DaysLeft">{ t('DaysLeft', {DaysLeft: getDayX('2025-01-25')}) }</p>
            </div>
        </header>
    );
}

export default Header;
