"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FilterColumn from "../FilterColumn/FilterColumn";
import Calendar from "../Calendar/Calendar";
import { TranslateType } from "@/types";

import styles from "./Filter.module.scss";

const Filter = () => {
    const tFilter = useTranslations("Filter");
    const titleFilter: TranslateType = {
        title: tFilter("title"),
    };
    const frequencyFilter: TranslateType = {
        title: tFilter("frequency.title"),
        oneTime: tFilter("frequency.oneTime"),
        twiceAWeek: tFilter("frequency.twiceAWeek"),
        everyWeek: tFilter("frequency.everyWeek"),
    };
    const allergyFilter: TranslateType = {
        title: tFilter("allergy.title"),
        none: tFilter("allergy.none"),
        cat: tFilter("allergy.cat"),
        dog: tFilter("allergy.dog"),
    };
    const cleaningFilter: TranslateType = {
        title: tFilter("cleaning.title"),
        regularCleaning: tFilter("cleaning.regularCleaning"),
        windowCleaning: tFilter("cleaning.windowCleaning"),
        afterRepairing: tFilter("cleaning.afterRepairing"),
        afterRelocation: tFilter("cleaning.afterRelocation"),
    };
    const addressFilter: TranslateType = {
        placeholder: tFilter("address.placeholder"),
        button: tFilter("address.button"),
    };

    const [selectedFrequency, setSelectedFrequency] = useState<string | null>(
        null
    );
    const [selectedAllergy, setSelectedAllergy] = useState<string | null>(null);
    const [selectedCleaning, setSelectedCleaning] = useState<string | null>(
        null
    );
    const [address, setAddress] = useState<string>("");
    const [isCalendarBlurred, setIsCalendarBlurred] = useState<boolean>(true);

    const handleFrequencyChange = (value: string) => {
        setSelectedFrequency(value);
        setSelectedCleaning(null);
    };

    const handleAllergyChange = (value: string) => {
        setSelectedAllergy(value);
    };

    const handleCleaningChange = (value: string) => {
        setSelectedCleaning(value);
    };

    const handleAddressChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setAddress(event.target.value);
    };

    const isSearchEnabled =
        ![selectedFrequency, selectedAllergy, selectedCleaning].includes(
            null
        ) && address.trim() !== "";

    const handleSearch = () => {
        if (isSearchEnabled) {
            setIsCalendarBlurred(false);
        }
    };

    const isOneTimeCleaning = selectedFrequency === frequencyFilter.oneTime;
    const isTwiceTimeCleaning =
        selectedFrequency === frequencyFilter.twiceAWeek ||
        selectedFrequency === frequencyFilter.everyWeek;

    const disabledBtn = [
        {
            item: cleaningFilter.regularCleaning,
            disabled: isOneTimeCleaning,
        },
        {
            item: cleaningFilter.afterRepairing,
            disabled: isTwiceTimeCleaning,
        },
        {
            item: cleaningFilter.afterRelocation,
            disabled: isTwiceTimeCleaning,
        },
    ];

    return (
        <>
            <div className={styles.filter} id="filter">
                <div className={styles.filter__container}>
                    <h2 className={styles.filter__title}>
                        {titleFilter.title}
                    </h2>
                    <div className={styles.filter__filterButtons}>
                        <FilterColumn
                            title={frequencyFilter.title}
                            items={frequencyFilter}
                            selected={selectedFrequency}
                            onItemClick={handleFrequencyChange}
                        />
                        <FilterColumn
                            title={allergyFilter.title}
                            items={allergyFilter}
                            selected={selectedAllergy}
                            onItemClick={handleAllergyChange}
                        />
                        <FilterColumn
                            title={cleaningFilter.title}
                            items={cleaningFilter}
                            selected={selectedCleaning}
                            onItemClick={handleCleaningChange}
                            disabledItems={disabledBtn}
                        />
                    </div>
                    <div className={styles.filter__address}>
                        <input
                            type="text"
                            placeholder={addressFilter.placeholder}
                            value={address}
                            onChange={handleAddressChange}
                        />
                        <button
                            onClick={handleSearch}
                            className={`${styles.filter__searchButton} ${
                                isSearchEnabled
                                    ? styles.filter__searchButtonActive
                                    : ""
                            }`}
                        >
                            {addressFilter.button}
                        </button>
                    </div>
                </div>
            </div>
            <Calendar
                isBlurred={isCalendarBlurred}
                setSelectedCleaning={setSelectedCleaning}
            />
        </>
    );
};

export default Filter;
