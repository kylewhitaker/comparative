import { Autocomplete, SxProps, TextField } from '@mui/material';

interface Props {
  id: string;
  label: string;
  options: string[];
  style?: SxProps;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  onChange?: (newValue: string | null) => void;
}

export const InputAutocomplete: React.FC<Props> = (props) => {
  return (
    <Autocomplete
      disablePortal
      id={`input-combo-box-${props.id}`}
      options={props.options}
      sx={props.style}
      renderInput={(params) => <TextField {...params} label={props.label} />}
      value={props.value}
      onChange={(_, newValue) => {
        props.setValue(newValue);
        props.onChange?.(newValue);
      }}
    />
  );
};
