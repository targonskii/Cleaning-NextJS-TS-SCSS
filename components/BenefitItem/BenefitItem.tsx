import Image from "next/image";
import { BenefitItemProps } from "@/types";

import styles from "./BenefitItem.module.scss";

const BenefitItem = ({ imageSrc, title, content }: BenefitItemProps) => {
    return (
        <div className={styles.benefitItem}>
            <div className={styles.benefitItem__wrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    className={styles.benefitItem__image}
                />
            </div>
            <h2 className={styles.benefitItem__title}>{title}</h2>
            <p className={styles.benefitItem__content}>{content}</p>
        </div>
    );
};

export default BenefitItem;
