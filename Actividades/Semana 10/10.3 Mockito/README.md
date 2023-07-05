# Mockito

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [Mockito - Kapumota](https://github.com/kapumota/Actividades/blob/main)

Fecha de entrega: `31/05/23`

## Escribir un stub con Mockito

:question: **Pregunta**

¿Qué sucede si ejecutas la prueba ahora?.

:white_check_mark: **Respuesta**

Nos da un error por que la clase aun no ah sido implementada correctamente.


:question: **Pregunta**

¿Qué sucede si ejecutas la prueba ahora?.  Explica la salida.

:white_check_mark: **Respuesta**

Nos sigue generando un error debido a que retorna "" en vez de "Hola y bienvenido, Kapumota"

```bash
org.opentest4j.AssertionFailedError: 
expected: "Hola y bienvenido, Kapumota"
but was: ""
```


:question: **Pregunta**

¿Qué sucede si ejecutas la prueba ahora?.  Explica la salida.

:white_check_mark: **Respuesta**

Genera un error en el UserID

```bash
org.opentest4j.AssertionFailedError: 
expected: "Hola y bienvenido Kapumota"
but was: "Hola y  Bienvenidos, null"
```


:question: **Pregunta**

¿Qué sucede si ejecutas la prueba ahora?.  Explica la salida.

:white_check_mark: **Respuesta**

Ahora si se ejecuta correctamente la prueba


