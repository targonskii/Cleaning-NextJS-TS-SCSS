import { useTranslations } from "next-intl";
import BenefitItem from "../BenefitItem/BenefitItem";
import { icons } from "./icons";
import { TranslateType } from "@/types";

import styles from "./Behefits.module.scss";

const Benefits = () => {
    const tBenefits = useTranslations("Benefits");
    const benefits: TranslateType = {
        levelTitle: tBenefits("level.title"),
        levelContent: tBenefits("level.content"),
        workTitle: tBenefits("work.title"),
        workContent: tBenefits("work.content"),
        scheduleTitle: tBenefits("schedule.title"),
        scheduleContent: tBenefits("schedule.content"),
        shieldTitle: tBenefits("shield.title"),
        shieldContent: tBenefits("shield.content"),
    };
    return (
        <div className={styles.benefits} id="benefits">
            <div className={styles.benefits__container}>
                <BenefitItem
                    imageSrc={icons[0]}
                    title={benefits.levelTitle}
                    content={benefits.levelContent}
                />
                <BenefitItem
                    imageSrc={icons[1]}
                    title={benefits.workTitle}
                    content={benefits.workContent}
                />
                <BenefitItem
                    imageSrc={icons[2]}
                    title={benefits.scheduleTitle}
                    content={benefits.scheduleContent}
                />
                <BenefitItem
                    imageSrc={icons[3]}
                    title={benefits.shieldTitle}
                    content={benefits.shieldContent}
                />
            </div>
        </div>
    );
};

export default Benefits;
