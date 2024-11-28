import './Ceremony.styles.scss';
import { useTranslation } from 'react-i18next';

function Ceremony() {
    const { t } = useTranslation();

    return (
        <div className="Ceremony">
            <p className='Ceremony-Title'>Ceremonijas vieta</p>
            <p className='Ceremony-Text'>Rīgas pilsētas Pārdaugavas Dzimtsarakstu nodaļa.</p>
            <a 
                className="Ceremony-Address" 
                href="https://maps.google.com/maps?hl=lv&amp;gl=lv&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;sa=X&amp;ftid=0x46eecffe53db6f23:0x38bb12d2058a8027" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https%3A%2F%2Fmaps.google.com%2Fmaps%3Fhl%3Dlv%26gl%3Dlv%26um%3D1%26ie%3DUTF-8%26fb%3D1%26sa%3DX%26ftid%3D0x46eecffe53db6f23%3A0x38bb12d2058a8027&amp;ved=0CBEQ4kBqFwoTCNCvmsm24IkDFQAAAAAdAAAAABAG&amp;opi=89978449" 
                target='_blank'
            >
                <span>Karte</span>
            </a>
        </div>
    );
}

export default Ceremony;
