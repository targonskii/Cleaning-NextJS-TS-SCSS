import Image from "next/image";
import closeImage from "../../assets/icons/close-round.svg";
import { AuthModalProps } from "@/types";

import styles from "./ModalHeader.module.scss";

const ModalHeader = ({ onClose, title }: AuthModalProps) => {
    return (
        <div className={styles.modalHeader}>
            <button onClick={onClose}>
                <Image
                    src={closeImage}
                    alt={"close button"}
                    className={styles.modalHeader__close}
                />
            </button>
            <div className={styles.modalHeader__title}>{title}</div>
        </div>
    );
};

export default ModalHeader;
