import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import { useRef, useEffect } from 'react'
import Link from 'next/link'

const Signup = () => {
    const name = useRef(null)

    // Valores iniciais do formulário
    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    }

    //  Valida os campos do formulário
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Mínimo de 2 caracteres')
            .max(50, 'Máximo de 50 caracteres')
            .required('Campo obrigatório'),
        email: Yup.string()
            .email('Email inválido')
            .required('Campo obrigatório'),
        password: Yup.string()
            .min(6, 'Mínimo de 6 caracteres')
            .max(50, 'Máximo de 50 caracteres')
            .required('Campo obrigatório'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Senhas não conferem')
            .required('Campo obrigatório'),
    })

    const handleSubmit = (values) => {
        console.log(values)
    }

    // Traz o foco para o campo de nome assim que a página é carregada
    useEffect(() => {
        if (name.current) {
            name.current.focus()
        }
    }, [])

    return (
        <div className="bg-primary min-h-screen flex flex-col justify-center">
            <div className="mx-auto w-full max-w-md px-8 py-6 rounded-lg shadow-lg bg-secondary">
                <h2 className="text-3xl font-bold mb-6 text-title-Login">
                    Cadastre-se
                </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-4 flex items-center border-b border-gray-400 py-2">
                            <label htmlFor="name">
                                <FaUser className="text-secondary mr-2" />
                                <span className="sr-only">Name</span>
                            </label>
                            <Field
                                className="appearance-none bg-secondary border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Nome"
                                innerRef={name}
                            />
                        </div>
                        <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-600 text-xs"
                        />
                        <div className="mb-4 flex items-center border-b border-gray-400 py-2">
                            <label htmlFor="email">
                                <FaEnvelope className="text-secondary mr-2" />
                                <span className="sr-only">Email</span>
                            </label>
                            <Field
                                className="appearance-none bg-secondary border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-600 text-xs"
                        />

                        <div className="mb-4 flex items-center border-b border-gray-400 py-2">
                            <label htmlFor="password">
                                <FaLock className="text-secondary mr-2" />
                                <span className="sr-only">Password</span>
                            </label>
                            <Field
                                className="appearance-none bg-secondary border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Senha"
                            />
                        </div>
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-600 text-xs"
                        />

                        <div className="mb-4 flex items-center border-b border-gray-400 py-2">
                            <label htmlFor="passwordConfirmation">
                                <FaLock className="text-secondary mr-2" />
                                <span className="sr-only">
                                    Confirm Password
                                </span>
                            </label>
                            <Field
                                className="appearance-none bg-secondary border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                                id="passwordConfirmation"
                                type="password"
                                name="passwordConfirmation"
                                placeholder="Confirme a senha"
                            />
                        </div>
                        <ErrorMessage
                            name="passwordConfirmation"
                            component="div"
                            className="text-red-600 text-xs"
                        />

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-button-bg hover:bg-button-bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Cadastrar
                            </button>
                            <Link
                                href="login"
                                className="text-sm text-secondary"
                            >
                                Ja tem uma conta
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Signup
