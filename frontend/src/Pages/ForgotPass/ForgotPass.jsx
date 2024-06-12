import React, { useState } from 'react';
import "./ForgotPass.css";

export const ForgotPass = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        setSuccess(false);
        setIsSubmitting(true);
        setIsSubmitted(true);
        try {
            const params = {
                method: "POST",
                body: JSON.stringify({ email: email }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            };
            const response = await fetch(`https://modulo-3-backend-production.up.railway.app/api/v1/forgot-pass`, params);
            if (response.ok) {
                setSuccess(true);
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="main__forgot">
            <form className="form-forgot" onSubmit={handleSubmitForm}>
                <div className="form-forgot-container">
                    <label className="form-forgot-label" htmlFor="mobile-email">EMAIL</label>
                    <input
                        className="form-forgot-input-name"
                        id="mobile-email"
                        type="email"
                        name="email"
                        placeholder="Ingrese el email correspondiente..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitted}
                    />
                </div>
                <button className="login-btn" type="submit" disabled={isSubmitted}>
                    {isSubmitting ? 'Enviando...' : 'ENVIAR CÓDIGO'}
                </button>
            </form>
            {success && <p className="success-message">El código ha sido enviado correctamente a la dirección de correo proporcionada.</p>}
        </main>
    );
};
