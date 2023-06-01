# Hitorias de Usuarios y Criterios de Aceptación

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [Historias de Usuarios - Kapumota](https://github.com/kapumota/Actividades/blob/main/HistoriasUsuarios-criterioAceptacion.md)

Fecha de entrega: `10/04/23`

## Historias de usuarios

:question: **Pregunta**

¿Cuáles de las siguientes no son buenas historias? ¿Por qué?

- El usuario puede ejecutar el sistema en Windows XP y Linux. 
- Todos los gráficos y tablas se realizan utilizando una biblioteca de terceros. 
- El usuario puede deshacer hasta cincuenta comandos. 
- El software se lanzará el 30 de junio. 
- El software estará escrito en Java. 
- El usuario puede seleccionar su país de una lista desplegable. 
- El sistema utilizará Log4J para registrar todos los mensajes de error en un archivo. 
- Se te pedirá al usuario que guarde su trabajo si no lo ha guardado durante 15 minutos. 
- El usuario puede seleccionar la función "Exportar a XML". 
- El usuario puede exportar datos a XML

:white_check_mark: **Respuesta**

* NO, Esta historia podría no ser ideal si Windows XP es una plataforma obsoleta o no compatible con las tecnologías y requisitos actuales.
* DEPENDE, si la biblioteca de terceros no es confiable o no tiene buen mantenimiento podria ser desfavorable
* NO, Esta historia no proporciona suficiente información para evaluar su calidad como una buena historia.
* NO, Esta historia podría no ser ideal si Windows XP es una plataforma obsoleta o no compatible con las tecnologías y requisitos actuales.
* SI, Esta historia es una medida prudente para evitar la pérdida de datos en caso de inactividad prolongada
* SI, Esta historia parece una funcionalidad útil y no se observan inconvenientes evidentes
* SI, Esta historia parece una funcionalidad útil y no se observan inconvenientes evidentes. 

:question: **Pregunta**

¿Cuáles de las siguientes no son buenas historias? ¿Por qué?

- Un usuario puede dominar rápidamente el sistema. 
- Un usuario puede editar la dirección en un currículum. 
- Un usuario puede agregar, editar y eliminar múltiples currículos. 
- El sistema puede calcular aproximaciones de puntos de silla para distribuciones de formas cuadráticas en variables normales. 
- Todos los errores de tiempo de ejecución se registran de manera coherente.

:white_check_mark: **Respuesta**

* NO, Esta historia no es específica en cuanto a qué se entiende por "dominar rápidamente" el sistema
* SI, Esta historia parece ser una funcionalidad útil y no se observan inconvenientes evidentes.
* SI, Esta historia parece una funcionalidad útil para un sistema de gestión de currículums
* NO, Esta historia parece ser altamente técnica y específica de un campo o dominio de conocimiento particular.
* NO, Registrar los errores de tiempo de ejecución de manera coherente es una buena práctica de desarrollo de software, pero no es una funcionalidad útil para el usuario final.

:question: **Pregunta**

¿Cuáles son cuatro buenas razones para usar historias de usuarios para expresar requisitos? 

:white_check_mark: **Respuesta**

* Enfoque centrado en el usuario
* Comunicación clara y comprensible
* Fomentar la colaboración
* Flexibilidad y adaptabilidad

:question: **Pregunta**

¿Cuáles pueden ser dos inconvenientes de usar historias de usuario? 

:white_check_mark: **Respuesta**

* En proyectos grandes puede ser dificil manejar cientos o miles de historias de usuarios entonces se tienen que hacer seguimientos (tracking).
* No es tan sencillo medir la eficacia de un proyecto con las historias de usuario.

:question: **Pregunta**

¿Cómo debes manejar un requisito para que un sistema escale y lo usen 1000 usuarios simultáneos? 

:white_check_mark: **Respuesta**

* Segmentando a los usuarios por grupos y creando historias de usuarios para esos grupos

:question: **Pregunta**

Proporciona algunos ejemplos de sistemas que podrían beneficiarse de una consideración más directa de la interfaz de usuario de lo que normalmente se da en un proyecto ágil.

:white_check_mark: **Respuesta**

* Sistemas de comercio electrónico: En un sistema de comercio electrónico, la interfaz de usuario juega un papel fundamental en la experiencia del cliente. Una consideración más directa de la interfaz de usuario permitiría realizar pruebas de usabilidad, iterar en el diseño de la interfaz y optimizar la navegación para mejorar la experiencia de compra y aumentar las conversiones.
* Sistemas de gestión de contenido: En los sistemas de gestión de contenido, como los CMS (Content Management Systems), es crucial que la interfaz de usuario sea intuitiva y fácil de usar para que los administradores y editores de contenido puedan agregar, editar y organizar el contenido de manera eficiente. Una consideración más directa de la interfaz de usuario permitiría realizar pruebas de usabilidad y realizar ajustes para mejorar la productividad de los usuarios.

## Criterios de aceptación** 

:question: **Pregunta**
### Planificación
Tú eres el que crea este punto final! Comenzamos reuniendo y creando un ticket de trabajo. Allí, queremos asegurarnos de incluir un  criterios de aceptación. Cuando termines tu trabajo, le pasarás el boleto a tu amigo. El será responsable de probarlo y de asegurarse  de que la implementación  cubra todos los casos de uso que escribimos en esos criterios de aceptación. 

### Descripcion
```
Queremos crear un punto final en nuestra API que nos permita obtener el descuento disponible para un usuario determinado. 
Más tarde, la interfaz de usuario manejará el valor de descuento recibido y proporcionará el mensaje. 
```

:white_check_mark: **Respuesta**

AC 1
```
Dado que tengo acceso a la API y a un usuario determinado
Cuando realice una solicitud al punto final de obtención de descuento
Entonces la API deberá retornar el descuento disponible para ese usuario
```

AC 2
```
Dado que el descuento disponible para el usuario es de un 10%
Cuando la interfaz de usuario reciba el descuento proporcionado por la API
Entonces la interfaz de usuario deberá mostrar el mensaje "¡Felicidades! Tienes un descuento del 10% en tu compra"
```

AC 3
```
Dado que el descuento disponible para el usuario es de un 0%
Cuando la interfaz de usuario reciba el descuento proporcionado por la API
Entonces la interfaz de usuario deberá mostrar el mensaje "Lo sentimos, no tienes ningún descuento disponible en este momento"	
```

AC 4
```
Dado que la solicitud al punto final de obtención de descuento se realiza sin autenticación o con credenciales inválidas
Cuando se realice la solicitud
Entonces la API deberá retornar un mensaje de error de autenticación o credenciales inválidas
```

AC 5
```
Dado que el usuario determinado no existe en la base de datos de usuarios
Cuando se realice la solicitud al punto final de obtención de descuento
Entonces la API deberá retornar un mensaje de error indicando que el usuario no existe
```

AC 6
```
Dado que ocurra un error interno en la API durante la obtención del descuento
Cuando se realice la solicitud al punto final de obtención de descuento
Entonces la API deberá retornar un mensaje de error interno y un código de estado apropiado
```

:question: **Pregunta**

¿Prefieres escribir historias en tarjetas de notas o en un sistema de software? 

:white_check_mark: **Respuesta**

Prefiero hacerlo en un sistema de software porque es más fácil de manejar y de compartir con los demás.

