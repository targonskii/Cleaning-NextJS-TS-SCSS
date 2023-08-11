import { objectToArrayWithoutTitle } from "@/utils/objectToArrayWithoutTitle";
import { FilterColumnProps } from "@/types";

import styles from "./FilterColumn.module.scss";

const FilterColumn = ({
    title,
    items,
    selected,
    onItemClick,
    disabledItems,
}: FilterColumnProps) => {
    const arrayFromItems = objectToArrayWithoutTitle(items);
    return (
        <div
            className={
                title === "Allergy"
                    ? styles.filterColumn__allergy
                    : styles.filterColumn
            }
        >
            <h2 className={styles.filterColumn__title}>{title}</h2>
            {arrayFromItems.map((item) => {
                const isDisabled = disabledItems?.find(
                    (disabledItem) => disabledItem.item === item
                )?.disabled;
                return (
                    <button
                        key={item}
                        className={`${
                            selected === item ? styles.selected : ""
                        } ${isDisabled ? styles.disabled : ""}`}
                        onClick={() => onItemClick(item)}
                        disabled={isDisabled}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

export default FilterColumn;
