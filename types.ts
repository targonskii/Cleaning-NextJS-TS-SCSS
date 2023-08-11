export type TranslateType = {
    [key: string]: string;
};

export type BenefitItemProps = {
    imageSrc: string;
    title: string;
    content: string;
};

export type FilterColumnProps = {
    title: string;
    items: TranslateType;
    selected: string | null;
    onItemClick: (value: string) => void;
    disabledItems?: {
        item: string;
        disabled: boolean;
    }[];
};

export type CalendarProps = {
    isBlurred: boolean;
    setSelectedCleaning: (value: string | null) => void;
};

export type FaqItemProps = { faqItem: string[]; key: number };

export type AuthModalProps = {
    onClose: () => void;
    onClick?: () => void;
    title?: string;
    auth?: TranslateType;
};
