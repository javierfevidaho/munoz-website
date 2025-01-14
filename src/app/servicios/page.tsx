'use client';

const ServicesPage = () => {
  const mainServices = [
    {
      title: "Instalación de Aires Acondicionados",
      description: "Servicio profesional de instalación de aires acondicionados para hogares y negocios. Garantizamos confort y eficiencia.",
      price: "Desde $499",
      features: [
        "Instalación residencial y comercial",
        "Sistemas centralizados y split",
        "Configuración personalizada",
        "Garantía de instalación",
        "Asesoramiento en equipos"
      ]
    },
    {
      title: "Mantenimiento y Reparación",
      description: "Mantenemos tus equipos funcionando de manera óptima con mantenimiento preventivo y reparaciones rápidas.",
      price: "Desde $99",
      features: [
        "Limpieza de filtros y ductos",
        "Revisión de refrigerante",
        "Reparación de fallas comunes",
        "Diagnóstico de sistemas",
        "Servicio a domicilio"
      ]
    },
    {
      title: "Servicios de Insulación",
      description: "Ahorra energía y mejora la eficiencia de tu hogar o negocio con nuestros servicios de insulación profesional.",
      price: "Desde $199",
      features: [
        "Instalación de materiales aislantes",
        "Optimización de consumo energético",
        "Mejora del confort térmico",
        "Asesoría personalizada",
        "Trabajos garantizados"
      ]
    }
  ];

  const handleContactClick = () => {
    window.location.href = '/contacto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Nuestros Servicios</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Soluciones en climatización e insulación para hogares y negocios
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
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
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
