"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { carouselImages } from "./images";
import carouselArrow from "../../assets/icons/carouselArrow.svg";
import { TranslateType } from "@/types";
import { imageDescriptionArray } from "@/utils/imageDescriptionArray";

import styles from "./Carousel.module.scss";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tImage = useTranslations("Carousel");
    const imageDescription: TranslateType = {
        ["living room"]: tImage("living room"),
        kitchen: tImage("kitchen"),
        hallway: tImage("hallway"),
        bathroom: tImage("bathroom"),
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    const description = imageDescriptionArray(imageDescription);

    const isFirstImage = activeIndex === 0;
    const isLastImage = activeIndex === carouselImages.length - 1;

    return (
        <div className={styles.carousel} id="services">
            <div className={styles.carousel__container}>
                <div className={styles.carousel__image_wrapper}>
                    {!isFirstImage && (
                        <button
                            className={styles.carousel__prevButton}
                            onClick={handlePrev}
                        >
                            <Image
                                className={styles.carousel__arrow}
                                priority={true}
                                src={carouselArrow}
                                sizes="(max-width: 833px) width: 11.8px"
                                alt="arrow left"
                            />
                        </button>
                    )}
                    <Image
                        priority={true}
                        src={carouselImages[activeIndex]}
                        alt={`Slide ${activeIndex}`}
                        className={styles.carousel__image}
                    />
                    {!isLastImage && (
                        <button
                            className={styles.carousel__nextButton}
                            onClick={handleNext}
                        >
                            <Image
                                className={styles.carousel__arrow}
                                priority={true}
                                src={carouselArrow}
                                sizes="(max-width: 833px) width: 11.8px"
                                alt="arrow right"
                            />
                        </button>
                    )}
                </div>
                <div className={styles.carousel__description}>
                    <p className={styles.carousel__description_text}>
                        {description[activeIndex][1]}
                        <span>{description[activeIndex][0]}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
