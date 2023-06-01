# Introducción a Pruebas - Parte 2

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [Introduccion Pruebas 2 - Kapumota](https://github.com/kapumota/Actividades/blob/main/IntroduccionPruebas-2.md)

Fecha: `10/04/23`
## Pruebas de caja negra y caja de cristal

:question: **Pregunta**

¿Cuál de los siguientes casos de prueba es probable que sean valores límite producidos por la prueba de caja de cristal?

```
valors = [ ] (lista vacia)
valores = [1, 2, 3]
valores = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
valores = [0, 0, 1, 0, 0, 0, 0]
```

:white_check_mark: **Respuesta**

* `valores = []` (lista vacia)

Considero que la lista vacia es un caso limite porque la lista es demasiado pequeña para usar alguno de los algoritmos de ordenamiento.

## Pruebas unitarias y de integración

:question: **Pregunta**

Supongamos que está desarrollando una nueva receta de pizza. Hacer pizza involucra tres “módulos” (subrecetas) para:

* Hacer la masa para la corteza
* Hacer la salsa
* Preparar el queso y otros productos

:white_check_mark: **Respuesta**

* Haces la masa para la base, la horneas sola y ves lo crocante y sabrosa que queda. Esto es `Hacer la masa para la corteza`
* Decides comprar una mezcla de especias prefabricada en una tienda especializada. Haces una salsa con las especias y luego la pruebas. Esto es `Hacer la salsa`
* Pones salsa y aderezos en una corteza y la horneas, para ver si la corteza todavía se cocina bien con las cosas húmedas encima. Esto es `Preparar el queso y otros productos`

## Pruebas de regresión automatizadas

:question: **Pregunta**

¿Cuál de los siguientes define mejor las pruebas de regresión?
* Debe ejecutar un conjunto de pruebas cada vez que cambie el código. 
* Cada componente en tu código debe tener un conjunto asociado de pruebas que ejerza todos los casos extremos en tu especificación. 
* Las pruebas deben escribirse antes de escribir el código como una forma de verificar su comprensión de la especificación. 
* Cuando una nueva prueba expone un error, debe ejecutarla en todas las versiones anteriores del código hasta que encuentre la versión en la que se introdujo el error.

:white_check_mark: **Respuesta**

* Cada componente en tu código debe tener un conjunto asociado de pruebas que ejerza todos los casos extremos en tu especificación.

:question: **Pregunta**

¿Cuáles de los siguientes son buenos momentos para volver a ejecutar todas tus pruebas JUnit?
* Antes de hacer git add/commit/push
* Después de reescribir una función para hacerla más rápida 
* Al usar una herramienta de cobertura de código 
* Después de pensar que solucionaste un error

:white_check_mark: **Respuesta**

* Antes de hacer git add/commit/push
* Después de reescribir una función para hacerla más rápida
* Después de pensar que solucionaste un error

## Test First Development

:question: **Pregunta**

¿Cuáles de estas técnicas son útiles para elegir casos de prueba en el TFD antes de escribir cualquier código?
* Caja negra 
* Regresión 
* Tipificación estática  
* Particionamiento 
* Límites 
* Caja de cristal
* Cobertura

:white_check_mark: **Respuesta**

* Regresion
* Caja de cristal

:question: **Pregunta**

¿Cuál de estos pasos te ayudará a validar tu especificación antes de implementar el algoritmo de búsqueda binaria?
* Pruebas de caja negra
* Prueba de caja de cristal
* Ejecución  JUnit 
* Escribir un algoritmo de búsqueda lineal simple 

:white_check_mark: **Respuesta**

* Pruebas de caja negra

:question: **Pregunta**

¿Cuál de estos pasos ayudará a validar tu conjunto de pruebas antes de implementar el algoritmo de búsqueda binaria?
* Escribir un algoritmo de búsqueda lineal simple 
* Ejecutar una herramienta de cobertura de código en una implementación simple
* Verificación de tipos estáticos ejecutando el compilador de Java 

:white_check_mark: **Respuesta**

* Ejecutar una herramienta de cobertura de código en una implementación simple


## Documenta tu estrategia de prueba

:question: **Pregunta**

La partición para el parámetro `a`:
* En un comentario al comienzo de Math.java 
* En un comentario al comienzo de MathTest.java 
* En un comentario justo antes del método max()
* En un comentario justo antes de un método de prueba JUnit 

:white_check_mark: **Respuesta**

* En un comentario al comienzo de `MathTest.java` 

:question: **Pregunta**

La anotación `@Test` 
* Justo antes de la clase Math
* Justo antes de la clase MathTest 
* Justo antes del método max() 
* Justo antes de un método de prueba JUnit

:white_check_mark: **Respuesta**

* Justo antes de un método de prueba JUnit

:question: **Pregunta**

El comentario `covers a < b` 
* En un comentario al comienzo de Math.java
* En un comentario al comienzo de MathTest.java
* En un comentario justo antes del método max() 
* En un comentario justo antes de un método de prueba JUnit

:white_check_mark: **Respuesta**

* En un comentario al comienzo de `Math.java`

:question: **Pregunta**

El comentario `@return` el máximo de `a` y `b`
* En un comentario al comienzo de Math.java
* En un comentario al comienzo de MathTest.java
* En un comentario justo antes del método max()
* En un comentario justo antes de un método de prueba JUnit

:white_check_mark: **Respuesta**
* En un comentario justo antes del método `max()`