"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import TimeButton from "../TimeButton/TimeButton";
import AuthModal from "../AuthModal/AuthModal";
import { CalendarProps, TranslateType } from "@/types";
import { generateRandomTimeRange } from "@/utils/generateRandomTimeRange";

import styles from "./Calendar.module.scss";

const Calendar = ({ isBlurred, setSelectedCleaning }: CalendarProps) => {
    const [timeRanges, setTimeRanges] = useState<string[]>([]);
    const [selectedButtons, setSelectedButtons] = useState<boolean[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const tFilter = useTranslations("Filter");
    const week: TranslateType = {
        sun: tFilter("week.sun"),
        mon: tFilter("week.mon"),
        tue: tFilter("week.tue"),
        wed: tFilter("week.wed"),
        thu: tFilter("week.thu"),
        fri: tFilter("week.fri"),
        sat: tFilter("week.sat"),
    };
    const order: TranslateType = {
        order: tFilter("order"),
    };

    const daysOfWeek: string[] = Object.values(week);
    const today = new Date();

    useEffect(() => {
        if (isBlurred) {
            const generatedTimeRanges: string[] = [];
            for (let i = 0; i < 7 * 3; i++) {
                generatedTimeRanges.push(generateRandomTimeRange(i) || "");
            }
            setTimeRanges(generatedTimeRanges);
            setSelectedButtons(new Array(7 * 3).fill(false));
            setSelectedCleaning(null);
        }
    }, [isBlurred, setSelectedCleaning]);

    const isAnyButtonSelected = selectedButtons.some(
        (isSelected) => isSelected
    );

    const handleOrderClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div
            className={`${styles.calendarWrapper} ${
                isBlurred ? styles.blurred : ""
            }`}
        >
            <div className={styles.calendar}>
                <div className={styles.calendar__container}>
                    <div className={styles.calendar__days_wrapper}>
                        {daysOfWeek.map((dayOfWeek, index) => {
                            const day = new Date(today);
                            day.setDate(today.getDate() + index);
                            return (
                                <div
                                    key={index}
                                    className={styles.calendar__day}
                                >
                                    <div className={styles.calendar__dayOfWeek}>
                                        {
                                            daysOfWeek[
                                                (today.getDay() + index) % 7
                                            ]
                                        }
                                    </div>
                                    <div
                                        className={styles.calendar__dayOfMonth}
                                    >
                                        {day.getDate()}
                                    </div>
                                    <div
                                        className={styles.calendar__timeButtons}
                                    >
                                        {timeRanges
                                            .slice(index * 3, (index + 1) * 3)
                                            .map((timeRange, idx) => (
                                                <TimeButton
                                                    key={idx}
                                                    timeRange={timeRange}
                                                    onClick={() => {
                                                        console.log(
                                                            `Button for ${dayOfWeek} clicked`
                                                        );
                                                        const newSelectedButtons =
                                                            [
                                                                ...selectedButtons,
                                                            ];
                                                        newSelectedButtons[
                                                            index * 3 + idx
                                                        ] =
                                                            !newSelectedButtons[
                                                                index * 3 + idx
                                                            ];
                                                        setSelectedButtons(
                                                            newSelectedButtons
                                                        );
                                                    }}
                                                    disabled={timeRange === ""}
                                                    selected={
                                                        selectedButtons[
                                                            index * 3 + idx
                                                        ]
                                                    }
                                                />
                                            ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className={styles.calendar__btn_submit}
                        onClick={handleOrderClick}
                        disabled={!isAnyButtonSelected}
                    >
                        {order.order}
                    </button>
                </div>
            </div>
            {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default Calendar;
