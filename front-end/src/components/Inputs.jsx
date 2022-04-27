function Input(props) {
  return (
    <label htmlFor={props.for}>
      <input
      type={props.tipo}
      name={props.for}
      id={props.for}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.event(e.target.value)}
      />
    </label>
  )
}

export default Input;