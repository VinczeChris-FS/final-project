//* FormField div, label, and input component

function FormField(props) {
  return (
    <div className="form-field">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

export default FormField;
