/// <reference types="react" />
import "./myLabel.css";
export interface IMyLabel {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    text: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size?: "normal" | "h1" | "h2" | "h3";
    /**
     * Este es el tipo de la etiqueta
     */
    type?: "primary" | "secondary" | "tertiary";
    /**
     * Esto pone todo a mayusculas
     */
    allCaps?: boolean;
    /**
     * Color de la letra
     */
    fontColor?: string;
    /**
     * What background color to use
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ text, size, type, allCaps, fontColor, backgroundColor, }: IMyLabel) => JSX.Element;
