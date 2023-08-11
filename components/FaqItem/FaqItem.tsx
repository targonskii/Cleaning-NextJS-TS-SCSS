"use client";
import { useState } from "react";
import { FaqItemProps } from "@/types";

import styles from "./FaqItem.module.scss";

const FaqItem = ({ faqItem, key }: FaqItemProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqItem}>
            <div key={key} className={styles.faqItem__container}>
                <div
                    className={`${styles.faqItem__question} ${
                        activeIndex === key
                            ? styles.faqItem__question_active
                            : ""
                    }`}
                    onClick={() => handleAccordionClick(key)}
                >
                    {faqItem[0]}
                </div>
            </div>
            {activeIndex === key && (
                <div className={styles.faqItem__answer}>{faqItem[1]}</div>
            )}
        </div>
    );
};

export default FaqItem;
