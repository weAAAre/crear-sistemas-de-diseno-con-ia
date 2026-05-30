import { useId, type ReactNode } from "react";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components/Button";

import type { ButtonShape, ButtonSize, ButtonVariant } from "../contracts/button";
import "./button.css";

export type ButtonProps = Omit<AriaButtonProps, "aria-label" | "children" | "className" | "isDisabled"> & {
  readonly ariaLabel?: string;
  readonly ariaDescription?: string;
  readonly children?: ReactNode;
  readonly className?: string;
  readonly disabled?: boolean;
  readonly iconOnlyLabel?: string;
  readonly prefixIcon?: ReactNode;
  readonly suffixIcon?: ReactNode;
  readonly shape?: ButtonShape;
  readonly size?: ButtonSize;
  readonly variant?: ButtonVariant;
  readonly inverted?: boolean;
};

export function Button({
  ariaDescription,
  ariaLabel,
  children,
  className,
  disabled = false,
  iconOnlyLabel,
  inverted = false,
  prefixIcon,
  shape = "rectangle",
  size = "md",
  suffixIcon,
  type = "button",
  variant = "filled",
  ...buttonProps
}: ButtonProps) {
  const isCircle = shape === "circle";
  const generatedDescriptionId = useId();
  const { "aria-describedby": ariaDescribedBy, ...ariaButtonProps } = buttonProps;
  const accessibleName = isCircle
    ? iconOnlyLabel ?? ariaLabel ?? (typeof children === "string" ? children : undefined)
    : ariaLabel;
  const descriptionId = ariaDescription
    ? buttonProps.id
      ? `${buttonProps.id}-description`
      : generatedDescriptionId
    : undefined;

  if (isCircle && !accessibleName) {
    throw new Error("Icon-only Button requires `iconOnlyLabel` or `ariaLabel`.");
  }

  const describedBy = [ariaDescribedBy, descriptionId].filter(Boolean).join(" ") || undefined;

  return (
    <AriaButton
      {...ariaButtonProps}
      aria-describedby={describedBy}
      aria-label={accessibleName}
      className={[
        "ds-button",
        `ds-button--${variant}`,
        `ds-button--${size}`,
        `ds-button--${shape}`,
        inverted ? "ds-button--inverted" : "",
        className ?? ""
      ]
        .filter(Boolean)
        .join(" ")}
      isDisabled={disabled}
      type={type}
    >
      {isCircle ? (
        <span aria-hidden="true" className="ds-button__icon ds-button__icon--circle">
          {prefixIcon ?? suffixIcon ?? "+"}
        </span>
      ) : (
        <>
          {prefixIcon ? (
            <span aria-hidden="true" className="ds-button__icon ds-button__icon--prefix">
              {prefixIcon}
            </span>
          ) : null}
          <span className="ds-button__label">{children}</span>
          {suffixIcon ? (
            <span aria-hidden="true" className="ds-button__icon ds-button__icon--suffix">
              {suffixIcon}
            </span>
          ) : null}
        </>
      )}
      {ariaDescription ? (
        <span className="ds-button__description" id={descriptionId}>
          {ariaDescription}
        </span>
      ) : null}
    </AriaButton>
  );
}
