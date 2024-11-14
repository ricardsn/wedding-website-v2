import './Welcome.styles.scss';
import { useTranslation } from 'react-i18next';
import Calendar from '../Calendar/Calendar.component';

function Welcome() {
    const { t } = useTranslation();

    return (
        <div className="Welcome">
            <p className='Welcome-Heading'>{ t('WelcomeHeading') }</p>
            <p className='Welcome-Text'>{ t('Welcome') }</p>
            <Calendar />
        </div>
    );
}

export default Welcome;
