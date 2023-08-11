import { useTranslations } from "next-intl";
import { TranslateType } from "@/types";

import styles from "./About.module.scss";

const About = () => {
    const tAbout = useTranslations("About");
    const about: TranslateType = {
        title: tAbout("title"),
        content: tAbout("content"),
    };

    return (
        <div className={styles.about} id="about">
            <div className={styles.about__container}>
                <h2>{about.title}</h2>
                <p className={styles.about__content}>{about.content}</p>
            </div>
        </div>
    );
};

export default About;
