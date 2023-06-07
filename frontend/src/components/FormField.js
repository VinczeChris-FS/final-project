// FormField component

function FormField(props) {
  return (
    <div className="form-field">
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} required />
    </div>
  );
}

export default FormField;
