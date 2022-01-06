export default function Select({
  name,
  label,
  value,
  display = 'normal',
  options,
  register,
}: {
  name: string;
  label: string;
  value: {
    label: string;
    value: string;
  }[];
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
}) {
  return (
    <div className={`cf-form-field ${display === 'inline' ? 'flex' : ''}`}>
      <label
        className="text-xs mb-0.5 font-normal leading-none text-gray-700"
        id={[name, 'label'].join('-')}
        htmlFor={[name, 'input'].join('-')}
      >
        {label}{' '}
        {options?.required ? <span title="Required">*</span> : undefined}
      </label>
      {display === 'normal' ? <br /> : null}
      <div className="inline-block relative w-64">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          {...register(name, { ...options })}
          required={options?.required}
          id={[name, 'input'].join('-')}
        >
          {value.map(option => {
            return (
              <option
                key={`${[name, 'input'].join('-')}-option-${option.value}`}
                value={option.value}
              >
                {option.label}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
