"use client";
import styles from "./TimeButton.module.scss";

type TimeButtonProps = {
    timeRange: string | null;
    onClick: () => void;
    disabled: boolean;
    selected: boolean;
};

const TimeButton = ({
    timeRange,
    onClick,
    disabled,
    selected,
}: TimeButtonProps) => {
    const isDisabled = timeRange === null || disabled;

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={
                isDisabled
                    ? styles.timeButton
                    : selected
                    ? styles.selected
                    : styles.timeButton
            }
        >
            {timeRange ? timeRange : "00-00"}
        </button>
    );
};

export default TimeButton;
