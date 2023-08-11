import { useTranslations } from "next-intl";
import { TranslateType } from "@/types";
import FaqItem from "../FaqItem/FaqItem";

import styles from "./Faq.module.scss";

const Faq = () => {
    const tFaq = useTranslations("Faq");
    const faqData: TranslateType = {
        faq: tFaq("faq"),
        q1: tFaq("ques1.q"),
        a1: tFaq("ques1.a"),
        q2: tFaq("ques2.q"),
        a2: tFaq("ques2.a"),
        q3: tFaq("ques3.q"),
        a3: tFaq("ques3.a"),
        q4: tFaq("ques4.q"),
        a4: tFaq("ques4.a"),
        q5: tFaq("ques5.q"),
        a5: tFaq("ques5.a"),
        q6: tFaq("ques6.q"),
        a6: tFaq("ques6.a"),
        q7: tFaq("ques7.q"),
        a7: tFaq("ques7.a"),
    };

    const faqDataArray = Object.keys(faqData)
        .filter((key) => key.startsWith("q"))
        .map((key) => [faqData[key], faqData[`a${key.slice(1)}`]]);
    return (
        <div className={styles.faq}>
            <div className={styles.faq__container}>
                <h2>{faqData.faq}</h2>
                {faqDataArray.map((item, index) => (
                    <FaqItem faqItem={item} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Faq;
