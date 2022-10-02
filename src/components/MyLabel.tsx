import "./myLabel.css";
import { AllCaps } from "../stories/components/MyLabel.stories";

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

export const MyLabel = ({
  text,
  size = "normal",
  type,
  allCaps = false,
  fontColor = "",
  backgroundColor = "transparent",
}: IMyLabel) => {
  const typeClass = type ? `text-${type}` : "";
  return (
    <span
      style={{ color: fontColor, backgroundColor }}
      className={`label ${size} ${typeClass}`}
    >
      {allCaps ? text.toUpperCase() : text}
    </span>
  );
};
