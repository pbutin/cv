"use client"

import { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, Github, SendIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "ac3366e9-b05e-423b-990c-b6a1672194f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (data.success) {
      console.log(data)
      setSubmitStatus('success');
      e.target.reset();
    } else {
      console.log("Error", data);
      setSubmitStatus('error');
    }
  };


  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Me contacter</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <MailIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:candidature@pbutin.fr" className="text-gray-300 hover:text-blue-500 transition">
                    candidature@pbutin.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <PhoneIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Téléphone</h3>
                  <a href="tel:++33652543779" className="text-gray-300 hover:text-blue-500 transition">
                    +33 6 52 54 37 79
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <MapPinIcon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Localisation</h3>
                  <p className="text-gray-300">
                    Saint-André-lez-Lille, France
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/pbutin" 
                  target="_blank"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/pbutin" 
                  target="_blank"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 flex items-center justify-center space-x-2 rounded-md transition ${
                  isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <SendIcon size={20} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-700/20 border border-green-700 rounded-md">
                  <p className="text-green-400">
                    Votre message a été envoyé avec succès. Je vous répondrai dès que possible.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-700/20 border border-red-700 rounded-md">
                  <p className="text-red-400">
                    Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;