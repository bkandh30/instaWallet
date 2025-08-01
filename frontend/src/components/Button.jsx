export function Button({label, onClick}) {
    return <button onClick={onClick} 
            type="button" 
            class="w-full text-white bg-black hover:bg-gray-800 
                border border-gray-900 rounded-md inline-flex 
                items-center justify-center py-2 px-5 text-center 
                text-base font-medium transition">{label}</button>
}
