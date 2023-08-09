import React from 'react';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="relative my-[45px] mx-0">
    <input className="bg-none bg-slate-50 text-slate-400 text-md p-[10px] pl-[5px] block w-full border-none rounded-none border-b-slate-400 mt-[25px] focus:outline-none focus:-top-[14px] focus:text-sm focus:text-slate-900 tracking-wide" onChange={handleChange} {...props} />
    {label ? (
      <label className={[`text-slate-400 text-sm font-[Urbanist] pointer-events-none absolute z-10 left-[5px] top-[10px] transition-all ease-linear`, `{ ${props.value.length}` ? `shrink` : '']}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
