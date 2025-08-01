import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center items-center">
      <div className="text-gray-700">
        {label}
      </div>
      <Link className="text-blue-700 font-medium underline hover:text-blue-900 transition" to={to}>
        {buttonText}
      </Link>
    </div>
}