interface TextAreaProps {
  id: string;
  rows: number;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

const Textarea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  const { id, rows, placeholder, name, required } = props;
  return (
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder ?? ''}
      name={name ?? ''}
      required={required ?? false}
    />
  );
};

export default Textarea;
