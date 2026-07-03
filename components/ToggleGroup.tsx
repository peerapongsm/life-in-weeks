"use client";

interface ToggleOption<T extends string> {
  value: T;
  label: string;
}

interface ToggleGroupProps<T extends string> {
  label: string;
  options: ToggleOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export default function ToggleGroup<T extends string>({ label, options, value, onChange }: ToggleGroupProps<T>) {
  return (
    <div className="toggle-group-field">
      <span className="date-field-label">{label}</span>
      <div className="calendar-toggle" role="group" aria-label={label}>
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={value === opt.value ? "toggle-btn toggle-btn-active" : "toggle-btn"}
            aria-pressed={value === opt.value}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
