import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmissionStatus('idle');
        setErrorMessage('');

        setTimeout(() => {
            const success = Math.random() < 0.8;
            if (success) {
                setSubmissionStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
            } else {
                setSubmissionStatus('error');
                setErrorMessage('Failed to send message. Please try again.');
            }
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section id="contact" className="contact-section">  
            <div className="container">
                <div className="section-header">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out to me for any questions, collaborations, or opportunities.</p>
                </div>

                <div className="grid">
                    {/* Contact Form */}
                    <div className="card">
                        <h3>Send a Message</h3>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={errors.name ? 'input error' : 'input'}
                                    disabled={isSubmitting}
                                />
                                {errors.name && (
                                    <p className="error-text">
                                        <AlertCircle className="icon" /> {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className={errors.email ? 'input error' : 'input'}
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <p className="error-text">
                                        <AlertCircle className="icon" /> {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className={errors.message ? 'textarea error' : 'textarea'}
                                    disabled={isSubmitting}
                                />
                                {errors.message && (
                                    <p className="error-text">
                                        <AlertCircle className="icon" /> {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="icon" />
                                        Send Message
                                    </>
                                )}
                            </button>
                            {submissionStatus === 'success' && (
                                <p className="success-text">Message sent successfully!</p>
                            )}
                            {submissionStatus === 'error' && (
                                <p className="error-text">
                                    <AlertCircle className="icon" /> {errorMessage}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="card">
                        <h3>Contact Information</h3>
                        <div className="contact-info">
                            <div className="info-item">
                                <Mail className="icon" />
                                <p>Email: <a href="rashidmehmood70@gmail.com">rashidmehmood70@gmail.com</a></p>
                            </div>
                            <div className="info-item">
                                <Phone className="icon" />
                                <p>Phone: <a href="tel:+923034463374">+923034463374</a></p>
                            </div>
                            <div className="info-item">
                                <MapPin className="icon" />
                                <p>Location:Lahore , Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
