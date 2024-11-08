import { HeaderMenuInterface } from "@nations-hub/components/UI/Header/interface";
import { ReactNode } from "react";

export interface MainLayoutInterface {
    menus: HeaderMenuInterface[];
    children: ReactNode
}