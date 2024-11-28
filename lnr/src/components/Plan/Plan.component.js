import { useTranslation } from 'react-i18next';
import hotel from './images/hotel.svg';
import establishment from './images/establishment.svg';
import photo from './images/photo.svg';
import restaurant from './images/restaurant.svg';
import wedding from './images/wedding.svg';
import weddingCake from './images/wedding-cake.svg';
import jacuzzi from './images/jacuzzi.svg';
import champagne from './images/champagne.svg';
import breakfast from './images/breakfast.svg';
import car from './images/car.svg';

import './Plan.styles.scss';

function Plan () {
    const { t } = useTranslation();

    const planItems = [
        {
            icon: establishment,
            time: '13:10',
            text: t('Arrival'),
            place: <p className='Plan-Item_Place'>Rīgas pilsētas Pārdaugavas Dzimtsarakstu nodaļa</p>,
            button:  <a className="Plan-Item_Button" href="https://maps.google.com/maps?hl=lv&amp;gl=lv&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;sa=X&amp;ftid=0x46eecffe53db6f23:0x38bb12d2058a8027" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https%3A%2F%2Fmaps.google.com%2Fmaps%3Fhl%3Dlv%26gl%3Dlv%26um%3D1%26ie%3DUTF-8%26fb%3D1%26sa%3DX%26ftid%3D0x46eecffe53db6f23%3A0x38bb12d2058a8027&amp;ved=0CBEQ4kBqFwoTCNCvmsm24IkDFQAAAAAdAAAAABAG&amp;opi=89978449"  target='_blank'><span>{t('Map')}</span></a>
        },
        {
            icon: wedding,
            time: '13:30',
            text: t('Ceremony')
        },
        {
            icon: champagne,
            time: '13:45',
            text: t('Buffet')
        },
        {
            icon: hotel,
            time: '14:30',
            text: t('Hotel'),
            place: <p className='Plan-Item_Place'>Hotel Jūrmala Spa</p>,
            button:  <a className="Plan-Item_Button" href="https://www.google.com/maps/place/Hotel+J%C5%ABrmala+Spa/@56.9737511,23.8035882,17z/data=!3m1!4b1!4m9!3m8!1s0x46eedd1c6bb6ec37:0xccfc41ce453b1314!5m2!4m1!1i2!8m2!3d56.9737511!4d23.8035882!16s%2Fg%2F1tcyjqzx?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"  target='_blank'><span>{t('Map')}</span></a>,
            additional: <p className='Plan-Item_Additional'>{t('Additional')}</p>
        },
        {
            icon: photo,
            time: '15:00',
            text: t('Photo'),
        },
        {
            icon: restaurant,
            time: '16:00',
            text: t('Restaurant'),
            place: <p className='Plan-Item_Place'>Yerevan Pandok</p>,
            button:  <a className="Plan-Item_Button" href="https://www.google.com/maps/place/Yerevan+Pandok,+arm%C4%93%C5%86u+restor%C4%81ns,+m%C4%81jas+virtuves+veikals/@56.9723913,23.792875,17z/data=!3m1!4b1!4m6!3m5!1s0x46eedd5f05c84afd:0xd64e1f8e119e8c3d!8m2!3d56.9723913!4d23.7954499!16s%2Fg%2F11rfm4bswg?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"  target='_blank'><span>Karte</span></a>
        },
        {
            icon: weddingCake,
            time: '19:00',
            text: t('Cake')
        },
        {
            icon: jacuzzi,
            time: '20:00-23:00',
            text: t('SpaBar')
        },
        {
            divider: true,
            time: t('NextDay')
        },
        {
            icon: breakfast,
            time: '7:30-11:00',
            text: t('Breakfast')
        },
        {
            icon: car,
            time: '12:00',
            text: t('Checkout'),
            additional: <p className='Plan-Item_Additional'>{t('LateCheckout')}</p>
        },
    ];

    return (
        <div className="Plan">
            <p className='Plan-Title'>{t('Plan')}</p>
            <div className='Plan-List'>
                { planItems.map((item, index) => (
                    <div className='Plan-Item scroll-animation' key={`Item-${index}`}>
                        <p className='Plan-Item_Time'>{ item.time }</p>
                        { item.divider ? null : <img className='Plan-Item_Icon' src={ item.icon } alt={`Item-${index}`} />}
                        <p className='Plan-Item_Text'>{ item.text }</p>
                        { item.place ?? null }
                        { item.button ?? null }
                        { item.additional ?? null }
                    </div>
                )) }
            </div>
        </div>
    );
}

export default Plan;
