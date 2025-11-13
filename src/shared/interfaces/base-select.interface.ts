export interface BaseSelectProps {
  modelValue?: string | number;
  options: SelectOptions;
  placeholder?: string;
  error?: string;
  helperText?: string;
  label?: string;
}

export type SelectOptions = Array<SelectOptionItem>;

export type SelectOptionItem = string | number | SelectOption;

export interface SelectOption {
  label: string;
  value: string | number | SelectOption;
  disabled?: boolean;
}
