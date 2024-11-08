import { ReactNode } from "react";

export interface CardComponentInterface {
    image?: {
        link: string;
        alt: string;
    }
    content: ReactNode;
    action?: {
        link: string;
        label: string;
    };
}