"use client";
import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import 'dotenv/config';

export default function ContactForm() {

    const [recaptcha, setRecaptcha] = useState('');

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        Nombre: '',
        Email: '',
        Mensaje: ''
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                Nombre: '',
                Email: '',
                Mensaje: ''
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));


        try{
            if (!recaptcha) {
                throw new Error('Recaptcha is required');
            }else{

                axios({
                    method: 'POST',
                    url: 'https://formspree.io/f/mleykzqr',
                    data: inputs,
                })
                    .then((response) => {
                        handleServerResponse(
                            true,
                            'Gracias por contactar con nosotros, te responderemos lo antes posible.',
                        );
                    })
                    .catch((error) => {
                        setStatus((prevStatus) => ({ ...prevStatus, submitting: false }));
                        handleServerResponse(false, error.response.data.error);
                    });

            }


        }
        catch (error) {
            setStatus((prevStatus) => ({ ...prevStatus, submitting: false, info: { error: true, msg: error.message } }));
            console.log("Captcha required");
        }
        
    };
    return (
        <div className="container px-4 md:px-6 mx-auto max-w-[700px]">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none mb-4 text-center">
                Contacta con Nosotros
            </h2>
            <form className="space-y-4" onSubmit={handleOnSubmit}>
                <input
                    id="Nombre"
                    htmlFor="Name"
                    aria-label="Nombre"
                    className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
                    placeholder="Nombre"
                    type="text"
                    name="Nombre"
                    onChange={handleOnChange}
                    required
                    value={inputs.Nombre}
                />
                <input
                    id="Email"
                    htmlFor="Email"
                    aria-label="Email"
                    className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
                    placeholder="Your Email"
                    type="email"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.Email}
                />
                <textarea
                    id="Mensaje"
                    htmlFor="Mensaje"
                    aria-label="Mensaje"
                    className="block w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:focus-visible:ring-zinc-300"
                    placeholder="Mensaje"
                    onChange={handleOnChange}
                    required
                    value={inputs.Mensaje}
                />
                <div className="flex items-center justify-between">
                    <div>
                        <ReCAPTCHA
                            id='ReCAPTCHA'
                            name='ReCAPTCHA'
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={value => setRecaptcha(value)}
                            required
                        />
                    </div>
                    <button
                        className="inline-flex h-9 items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-500 dark:text-white dark:hover:bg-green-600 dark:focus-visible:ring-green-600"
                        type="submit"
                        variant="default"
                        disabled={status.submitting || !recaptcha}
                    >
                        {!status.submitting
                            ? !status.submitted
                                ? 'Enviar'
                                : 'Enviado'
                            : 'Enviando...'}
                    </button>
                </div>
                {status.info.error && (
                <div className="error">Error Captcha Requerido</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            </form>
        </div>
    );
};