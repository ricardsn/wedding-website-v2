import weddingLogo from './images/wedding-image.webp';
import './Header.styles.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.component';
import CountDown from '../CountDown/CountDown.component';

function Header() {
    const { t } = useTranslation();

    return (
        <header className="Header">
            <LanguageSwitcher />
            <div className="Header-Content">
                <div className='Header-Logo'>
                    <img src={weddingLogo} className="Header-Img" alt="weddingLogo" />
                </div>
                <h1 className="Header-Title">{t('CoupleName')}</h1>
                <p className="Header-Date">{`${t('Date')}`}</p>
                <p className='Header-Place'>{t('Place')}</p>
                <CountDown targetDate={ new Date('January 25, 2025 13:30:00').getTime() } />
            </div>
        </header>
    );
}

export default Header;
