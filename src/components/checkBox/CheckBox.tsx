"use client";
import { useEffect, useRef } from "react";

interface CheckBoxProps {
  id: string;
  title?: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox = ({
  id,
  title,
  checked,
  indeterminate,
  onChange,
}: CheckBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [indeterminate]);

  return (
    <div className="checkbox-wrapper-46">
      <input
        ref={inputRef}
        className="inp-cbx"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <label className="cbx flex items-center justify-between" htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        {title && <span className="title-color">{title}</span>}
      </label>
    </div>
  );
};

export default CheckBox;
