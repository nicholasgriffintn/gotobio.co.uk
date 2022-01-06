export default function Input({
  name,
  label,
  type = 'text',
  autoComplete = 'off',
  display = 'normal',
  options,
  register,
  placeholder,
}: {
  name: string;
  label: string;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  autoComplete: 'off' | 'on';
  display?: 'normal' | 'inline';
  options?: {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
  };
  register: any;
  placeholder?: string;
}) {
  return (
    <div className="cf-form-field">
      <label
        className="text-xl font-normal dark-gray"
        id={[name, 'label'].join('-')}
        htmlFor={[name, 'input'].join('-')}
      >
        {label}{' '}
        {options?.required ? <span title="Required">*</span> : undefined}
      </label>
      {display === 'normal' ? <br /> : null}
      <input
        className="inline-block w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:border-indigo-700"
        autoComplete={autoComplete}
        id={[name, 'input'].join('-')}
        required={options?.required}
        type={type}
        placeholder={placeholder}
        {...register(name, { ...options })}
      />
    </div>
  );
}
