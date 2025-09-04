// src/components/Contact.jsx

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contacto</h2>
        <p className="max-w-md mx-auto mb-8">
          ¿Interesado en colaborar? Envíame un mensaje y me pondré en contacto contigo.
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Tu Nombre" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-500" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Tu Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-500" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Tu Mensaje" rows="4" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-500"></textarea>
          </div>
          <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;