const FormTextAreaRow = ({
  name,
  labelText,
  onChange,
  value,
  defaultValue,
  rows,
  cols,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        id={name}
        name={name}
        className="form-textarea"
        onChange={onChange}
        rows={rows || 4}
        cols={cols || 50}
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};
export default FormTextAreaRow;
