import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.styles.scss';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='LanguageSwitcher-Content'>
            <button className='LanguageSwitcher-Button' onClick={() => changeLanguage('lv')}><p>LV</p></button>
            <button className='LanguageSwitcher-Button' onClick={() => changeLanguage('ru')}><p>RU</p></button>
            <button className='LanguageSwitcher-Button' onClick={() => changeLanguage('en')}><p>EN</p></button>
        </div>
    );
}

export default LanguageSwitcher;
