import Head from 'next/head'
import Link from 'next/link'
import { RiMailLine, RiLockPasswordLine } from 'react-icons/ri'
import { useRef, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginPage = () => {
    const emailRef = useRef(null)

    // Valores iniciais do formulário
    const initialValues = {
        email: '',
        password: '',
    }

    // Valida os campos do formulário
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Email inválido')
            .required('Campo obrigatório'),
        password: Yup.string()
            .min(6, 'Senha deve ter no mínimo 6 caracteres')
            .required('Campo obrigatório'),
    })

    const handleSubmit = (values) => {
        console.log(values)
    }

    // Traz o foco para o campo de email assim que a página é carregada
    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.focus()
        }
    }, [])

    return (
        <>
            <Head>
                <title>Login Page</title>
            </Head>
            <div className="bg-primary min-h-screen flex flex-col justify-center">
                <div className="mx-auto w-full max-w-md px-8 py-6 rounded-lg shadow-lg bg-secondary">
                    <h2 className="text-3xl font-bold mb-6 text-title-Login">
                        Login
                    </h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <div className="mb-4 flex items-center border-b border-gray-400 py-2">
                                <RiMailLine className="text-secondary mr-2" />
                                <Field
                                    className="appearance-none bg-secondary border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    innerRef={emailRef}
                                />
                            </div>
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-600 text-xs"
                            />
                            <div className="mb-6 flex items-center border-b border-gray-400 py-2">
                                <RiLockPasswordLine className="text-secondary mr-2" />
                                <Field
                                    className="appearance-none bg-secondary border-none w-full text-primary mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-600 text-xs"
                            />
                            <div className="flex items-center justify-between mb-4">
                                <Link
                                    href="#"
                                    className="text-secondary text-sm"
                                >
                                    Esqueci a senha
                                </Link>
                                <Link
                                    href="cadastre-se"
                                    className="text-sm text-secondary"
                                >
                                    Cadastre-se
                                </Link>
                            </div>
                            <button
                                className="bg-button-bg hover:bg-button-bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                                type="su"
                            >
                                Login
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default LoginPage
