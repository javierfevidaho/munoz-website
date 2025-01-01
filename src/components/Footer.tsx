const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">GEMTAX</h3>
              <p className="text-blue-200">
                Expertos en servicios de impuestos y asesoría fiscal
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <p className="text-blue-200">
                Email: info@gemtaxexpert.com<br />
                Tel: (986) 226-9662
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Horario</h3>
              <p className="text-blue-200">
                Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                Sábado y Domingo: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} GEMTAX. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;