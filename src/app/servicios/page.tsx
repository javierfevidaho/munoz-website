'use client';

const ServicesPage = () => {
  const mainServices = [
    {
      title: "Declaración de Impuestos Personales",
      description: "Maximiza tu devolución con nuestro servicio experto de declaración de impuestos personales. Manejamos todo tipo de declaraciones individuales y familiares.",
      price: "Desde $150",
      features: [
        "Declaraciones federales y estatales",
        "W-2 y 1099s",
        "Deducciones detalladas",
        "Créditos fiscales",
        "Revisión de años anteriores"
      ]
    },
    {
      title: "Impuestos Empresariales",
      description: "Servicios completos de impuestos para negocios de todos los tamaños. Optimizamos tu situación fiscal empresarial.",
      price: "Desde $299",
      features: [
        "Declaraciones corporativas",
        "Schedule C para autónomos",
        "Nómina y pagos trimestrales",
        "Planificación fiscal",
        "Asesoría continua"
      ]
    },
    {
      title: "Consultoría Fiscal",
      description: "Asesoramiento estratégico personalizado para optimizar tu situación fiscal y maximizar beneficios a largo plazo.",
      price: "Desde $499",
      features: [
        "Análisis fiscal completo",
        "Estrategias de ahorro",
        "Planificación patrimonial",
        "Consultas ilimitadas",
        "Representación ante el IRS"
      ]
    }
  ];

  const handleContactClick = () => {
    window.location.href = '/contacto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Nuestros Servicios</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Soluciones fiscales integrales para individuos y empresas
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-blue-600 font-bold text-xl mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleContactClick}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Solicitar Servicio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
