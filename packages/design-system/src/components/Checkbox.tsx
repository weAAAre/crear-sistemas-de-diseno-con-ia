import { type ReactNode } from "react";
import {
  CheckboxButton as AriaCheckboxButton,
  CheckboxField as AriaCheckboxField,
  Text as AriaText
} from "react-aria-components/Checkbox";

import type { CheckboxSize } from "../contracts/checkbox";
import "./checkbox.css";

export type CheckboxProps = {
  readonly ariaLabel?: string;
  readonly children?: ReactNode;
  readonly className?: string;
  readonly defaultSelected?: boolean;
  readonly description?: ReactNode;
  readonly disabled?: boolean;
  readonly errorMessage?: ReactNode;
  readonly isSelected?: boolean;
  readonly name?: string;
  readonly onChange?: (isSelected: boolean) => void;
  readonly required?: boolean;
  readonly size?: CheckboxSize;
  readonly tile?: boolean;
  readonly value?: string;
};

export function Checkbox({
  ariaLabel,
  children,
  className,
  defaultSelected,
  description,
  disabled = false,
  errorMessage,
  isSelected,
  name,
  onChange,
  required = false,
  size = "md",
  tile = false,
  value
}: CheckboxProps) {
  const hasVisibleLabel = children !== undefined && children !== null && children !== false;

  if (!hasVisibleLabel && !ariaLabel) {
    throw new Error("Checkbox requires visible `children` or `ariaLabel`.");
  }

  if ((description || errorMessage) && !hasVisibleLabel) {
    throw new Error("Checkbox `description` and `errorMessage` require visible `children`.");
  }

  return (
    <AriaCheckboxField
      aria-label={ariaLabel}
      className={[
        "ds-checkbox-field",
        `ds-checkbox-field--${size}`,
        tile ? "ds-checkbox-field--tile" : "",
        className ?? ""
      ]
        .filter(Boolean)
        .join(" ")}
      defaultSelected={defaultSelected}
      isDisabled={disabled}
      isInvalid={Boolean(errorMessage)}
      isRequired={required}
      isSelected={isSelected}
      name={name}
      onChange={onChange}
      validationBehavior="aria"
      value={value}
    >
      <AriaCheckboxButton className="ds-checkbox">
        <span aria-hidden="true" className="ds-checkbox__control">
          <svg className="ds-checkbox__check" focusable="false" viewBox="0 0 22 22">
            <path d="M8.6 14.6 4.8 10.8 3.4 12.2 8.6 17.4 18.8 7.2 17.4 5.8z" />
          </svg>
        </span>
        {hasVisibleLabel ? (
          <span className="ds-checkbox__content">
            <span className="ds-checkbox__label">
              <span>{children}</span>
              {required ? (
                <span aria-hidden="true" className="ds-checkbox__required">
                  *
                </span>
              ) : null}
            </span>
            {description ? (
              <AriaText className="ds-checkbox__description" slot="description">
                {description}
              </AriaText>
            ) : null}
          </span>
        ) : null}
      </AriaCheckboxButton>
      {errorMessage ? (
        <AriaText className="ds-checkbox__error" slot="errorMessage">
          <span aria-hidden="true" className="ds-checkbox__error-icon">
            !
          </span>
          <span>{errorMessage}</span>
        </AriaText>
      ) : null}
    </AriaCheckboxField>
  );
}
