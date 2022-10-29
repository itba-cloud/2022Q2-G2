exports.handler = async (event, context) => {
  return {
    "isBase64Encoded": false,
    "statusCode": 200,
    "headers": { },
    "body": JSON.stringify({ busquedas: [
      {
        title: 'Administrador de base de datos SQL',
        description: 'Alta, baja y modificación de información en una base de datos PostgreSQL. Interfaz adminer. Por lo menos 2 años de experiencia en administración de bases de datos requeridos.'
      },
      {
        title: 'Mesero para pizzería en Villa Urquiza',
        description: 'Trabajo de lunes a viernes, turno de 18hs a 23hs, no se requiere experiencia previa.'
      }
    ]})
  }
}