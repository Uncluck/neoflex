import React from 'react';
import s from './Footer.module.css';
import vk from './../../images/VK.svg';
import telegram from './../../images/Telegram.svg';
import whatsapp from './../../images/Whatsapp.svg';
import world from './../../images/World.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.logo_name}>
                QPICK
            </div>
            <div className={s.links}>
                <div className={s.first_column}>
                    <div>Избранное</div>
                    <div>Корзина</div>
                    <div>Контакты</div>
                </div>
                <div className={s.second_column}>
                    <div>Условия сервиса</div>
                    <div className={s.change_lang}>
                        <button>
                            <img src={world} alt=""/>
                        </button>
                        <div>Рус</div>
                        <div>Eng</div>
                    </div>
                </div>
            </div>
            <div className={s.social}>
                <img src={vk} alt=""/>
                <img src={whatsapp} alt=""/>
                <img src={telegram} alt=""/>
            </div>
        </footer>
    )
}


export default Footer