import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Inputt from '../Form/Input'
import { useEffect, useRef } from 'react'

function Formulario() {
    const emailRef = useRef(null)

    const initialValues = {
        email: '',
        senha: '',
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('E-mail inválido')
            .required('Campo obrigatório'),
        senha: Yup.string()
            .required('Campo obrigatório')
            .min('6', 'A senha deve ter no mínimo 6 caracteres'),
    })

    const handleSubmit = (values) => {
        console.log(values)
    }

    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus()
        }
    }, [])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <Inputt
                    label="E-mail:"
                    type="email"
                    name="email"
                    inputRef={emailRef}
                    autoFocus
                />
                <Inputt label="Senha:" type="password" name="senha" />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Enviar
                </button>
            </Form>
        </Formik>
    )
}

export default Formulario
