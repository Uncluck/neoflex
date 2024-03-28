import React, {useState} from 'react';
import s from './Footer.module.css';
import vk from './../../images/VK.svg';
import telegram from './../../images/Telegram.svg';
import whatsapp from './../../images/Whatsapp.svg';
import world from './../../images/World.png';
import {Link, useLocation} from "react-router-dom";

const Footer = () => {
    const [activeElement, setActiveElement] = useState(1);
    const {pathname} = useLocation();

    const kazUrl = pathname === '/cart';


    const handleToggleElement = () => {
        if (kazUrl) {
            setActiveElement(activeElement === 3 ? 1 : activeElement + 1);
        } else {
            setActiveElement(activeElement === 1 ? 2 : 1)
        }
    };


    return (
        <footer className={s.footer}>
            <div className={s.logo_name}>
                <Link to={'/'} className={s.name}>QPICK</Link>
            </div>
            <div className={s.links}>
                <div className={s.first_column}>
                    <div>Избранное</div>
                    <Link to={'/cart'}>
                        <div>Корзина</div>
                    </Link>
                    <div>Контакты</div>
                </div>
                <div className={s.second_column}>
                    <div>Условия сервиса</div>
                    <div className={s.change_lang}>
                        <button onClick={() => handleToggleElement()}>
                            <img src={world} alt=""/>
                        </button>
                        {kazUrl
                            ? <div className={activeElement === 3 ? s.active : null}>Каз</div>
                            : null}
                        <div className={activeElement === 1 ? s.active : null}>Рус</div>
                        <div className={activeElement === 2 ? s.active : null}>Eng</div>
                    </div>
                </div>
            </div>
            <div className={s.social}>
                <a href="https://vk.com/gy_mandarin" target={"_blank"} className={s.link_img}>
                    <img src={vk} alt=""/>
                </a>
                <a href="https://vk.com/gy_mandarin" target={"_blank"} className={s.link_img}>
                    {/*Скинул еще одну ссылку на ВК, не нашел ссылку на WhatsApp)*/}
                    <img src={whatsapp} alt=""/>
                </a>
                <a href="https://t.me/gy_mandarin" target={"_blank"} className={s.link_img}>
                    <img src={telegram} alt=""/>
                </a>
            </div>
        </footer>
    )
}


export default Footer