"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import burger from "../../assets/icons/burger.svg";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { TranslateType } from "@/types";

import styles from "./Header.module.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tMenu = useTranslations("Header.menu");
    const menu: TranslateType = {
        services: tMenu("services"),
        benefits: tMenu("benefits"),
        about: tMenu("about"),
        filter: tMenu("filter"),
        contacts: tMenu("contacts"),
    };

    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div
                    className={
                        isMenuOpen
                            ? `${styles.header__burger} ${styles.opened}`
                            : styles.header__burger_closed
                    }
                >
                    <div className={styles.header__burger_icon}>
                        <Image
                            src={burger}
                            width={20}
                            height={20}
                            alt="burger-menu"
                            onClick={handleBurgerClick}
                        />
                    </div>
                    {isMenuOpen && (
                        <HeaderMenu menu={menu} closeMenu={closeMenu} />
                    )}
                </div>
                <div className={styles.header__menu}>
                    <HeaderMenu menu={menu} closeMenu={closeMenu} />
                </div>
            </div>
        </header>
    );
};

export default Header;
