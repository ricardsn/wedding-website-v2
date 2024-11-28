import './Footer.styles.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="Footer">
            <div className="Footer-Content">
                <h1 className="Footer-Title">{t('J & R')}</h1>
                <p className="Footer-Date">25.01.2025</p>
            </div>
        </footer>
    );
}

export default Footer;
