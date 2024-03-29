//* CheckField div, label, and checkbox input component

function CheckField(props) {
  return (
    <div className="form-field form-field-check">
      <input
        type="checkbox"
        id={props.id}
        checked={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default CheckField;
