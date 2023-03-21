export default function ({ placeholder, maxLength, onChange }){
  return(
    <input 
      className="input-component"
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
    />
  )
}