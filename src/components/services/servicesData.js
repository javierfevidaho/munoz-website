import { Thermometer, Shield, Wrench } from 'lucide-react';

export const SERVICIOS_INFO = {
  instalacion: {
    id: 'instalacion',
    titulo: "Instalación y Mantenimiento",
    descripcion: "Instalación profesional y servicio de mantenimiento para sistemas de aire acondicionado con garantía extendida.",
    detalles: [
      "Instalación de sistemas nuevos de aire acondicionado",
      "Mantenimiento preventivo regular",
      "Limpieza y sanitización de sistemas",
      "Verificación y recarga de refrigerante",
      "Inspección de ductos y componentes",
      "Calibración de termostatos",
      "Garantía extendida en todos los servicios",
      "Programación de mantenimiento periódico"
    ],
    icon: Thermometer,
    precios: "Desde $300 dependiendo del sistema",
    tiempo: "2-4 horas para instalación básica",
    beneficios: [
      "Mejora la eficiencia energética",
      "Reduce costos de operación",
      "Extiende la vida útil del equipo",
      "Garantía en partes y mano de obra"
    ],
    serviciosAdicionales: [
      "Asesoría en selección de equipos",
      "Diagnóstico de eficiencia",
      "Optimización de sistemas existentes",
      "Mantenimiento programado"
    ]
  },
  insulacion: {
    id: 'insulacion',
    titulo: "Insulación Térmica",
    descripcion: "Soluciones de aislamiento térmico premium para maximizar la eficiencia energética de tu espacio.",
    detalles: [
      "Evaluación térmica completa del espacio",
      "Instalación de aislamiento en paredes",
      "Aislamiento de áticos y techos",
      "Sellado de ductos",
      "Instalación de barreras radiantes",
      "Aislamiento de tuberías",
      "Soluciones para ventanas y puertas",
      "Certificación de eficiencia energética"
    ],
    icon: Shield,
    precios: "Desde $500 según el área a aislar",
    tiempo: "1-3 días dependiendo del área",
    beneficios: [
      "Ahorro significativo en costos de energía",
      "Mayor confort térmico",
      "Reducción de ruido exterior",
      "Protección contra humedad"
    ],
    serviciosAdicionales: [
      "Estudio termográfico",
      "Consultoría energética",
      "Certificación de materiales",
      "Mantenimiento periódico"
    ]
  },
  reparacion: {
    id: 'reparacion',
    titulo: "Reparación y Emergencias",
    descripcion: "Servicio técnico especializado y atención de emergencias disponible 24/7 para tu tranquilidad.",
    detalles: [
      "Servicio de emergencia 24/7",
      "Diagnóstico preciso del problema",
      "Reparación de todo tipo de sistemas",
      "Reemplazo de componentes",
      "Solución de problemas de refrigeración",
      "Reparación de ductos",
      "Servicio express disponible",
      "Garantía en reparaciones"
    ],
    icon: Wrench,
    precios: "Diagnóstico: $85 + reparación según requerimiento",
    tiempo: "Respuesta en menos de 2 horas para emergencias",
    beneficios: [
      "Atención inmediata",
      "Técnicos certificados",
      "Garantía en reparaciones",
      "Servicio disponible 24/7"
    ],
    serviciosAdicionales: [
      "Mantenimiento preventivo",
      "Actualización de sistemas",
      "Reemplazo de partes",
      "Diagnóstico avanzado"
    ]
  }
};