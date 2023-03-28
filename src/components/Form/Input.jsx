import { Field, ErrorMessage } from 'formik'

const Inputt = ({ label, type, name }) => {
    return (
        <div className="flex flex-col gap-1 mt-5">
            <label className="text-primary">{label}</label>
            <Field
                type={type}
                name={name}
                className="text-primary shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-red-400 text-xs">
                {<ErrorMessage name={name} />}
            </p>
        </div>
    )
}

export default Inputt
