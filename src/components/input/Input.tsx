import './Input.css';

interface InputProps {
  type: string;
  placeholder?: string;
  id?: string;
  name?: string;
  autofocus?: boolean;
  required?: boolean;
}

// Map the icon names to their corresponding components
const inputType: string[] = [
  'checkbox',
  'button',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { type, id, name, placeholder, required } = props;
  const isInputType = inputType.indexOf(props.type);

  if (!isInputType) {
    return 'Provide correct input type!';
  }

  return (
    //null coalesc for falsy values
    <input
      type={type}
      id={id ?? ''}
      name={name ?? ''}
      placeholder={placeholder ?? ''}
      required={required ?? false}
    />
  );
};

export default Input;
