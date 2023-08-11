"use client";
import { useState } from "react";
import { KEYSMENU } from "./menu";
import { TranslateType } from "@/types";

import styles from "./HeaderMenu.module.scss";

type HeaderMenuProps = {
    menu: TranslateType;
    closeMenu: () => void;
};

const HeaderMenu = ({ menu, closeMenu }: HeaderMenuProps) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        setActiveItem(item);
        closeMenu();
    };

    return (
        <div className={styles.menu}>
            <nav className={styles.menu__body}>
                <ul className={styles.menu__list}>
                    {KEYSMENU.map((item) => (
                        <a
                            className={
                                activeItem === item
                                    ? styles.menu__active
                                    : styles.menu__item
                            }
                            key={item}
                            href={`#${item}`}
                            onClick={() => handleItemClick(item)}
                        >
                            <li>{menu[item]}</li>
                        </a>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;
