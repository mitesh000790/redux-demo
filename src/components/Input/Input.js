import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, label, value, onChange, type = 'text', textArea, width, placeholder } = this.props
        const handleChange = event => onChange(id, event.target.value)

        return (
            <div>
                <div className="mb-5">
                    <label htmlFor={id}
                           className="block mb-2 dark:text-slate-200 text-sm font-medium text-gray-600">{label}</label>

                    {textArea === "textarea" ?
                        <textarea
                            value={value || ''}
                            onChange={handleChange}
                            className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                        /> :
                        <input
                            type={type}
                            value={value || ''}
                            onChange={handleChange}
                            className={`block ${width === 'half' ? '' : 'w-full' } p-3 rounded bg-gray-200 border border-transparent focus:outline-none`}
                            placeholder={placeholder}
                        />}

                </div>
            </div>
        )
    }
}

export default Input
