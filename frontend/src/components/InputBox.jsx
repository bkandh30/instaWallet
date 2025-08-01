export function InputBox({label, placeholder, onChange}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border rounded-lg bg-white focus:outline-none focus:ring-1 focus-ring-indigo-300 focus:border-transparent placeholder:text-gray-400 border-slate-200" />
    </div>
}