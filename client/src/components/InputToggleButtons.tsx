import { ToggleButtonGroup, ToggleButton } from '@mui/material';

interface Props {
  options: string[];
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (newValue: string | null) => void;
  style?: React.CSSProperties;
}

export const InputToggleButtons: React.FC<Props> = (props) => {
  return (
    <ToggleButtonGroup
      value={props.value}
      exclusive
      onChange={(event, newValue) => {
        props.setValue(newValue);
        props.onChange?.(newValue);
      }}
      style={props.style}
    >
      {props.options.map((option) => (
        <ToggleButton key={option} value={option}>
          {option}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
