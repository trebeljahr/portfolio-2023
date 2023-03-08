const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
  onChange,
  children = null,
  value,
}) => {
  return (
    <div className='mb-4 font-general-regular'>
      <label className='block mb-1 text-lg text-primary-dark dark:text-primary-light' htmlFor={labelFor}>
        {inputLabel}
      </label>
      <input
        className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md peer'
        type={inputType}
        id={inputId}
        name={inputName}
        value={value}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
        onChange={onChange}
      />
      {children}
    </div>
  )
}

export default FormInput
