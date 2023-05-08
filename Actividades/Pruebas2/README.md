## Pruebas de caja negra y caja de cristal

¿Cuál de los siguientes casos de prueba es probable que sean valores límite producidos por la prueba de caja de cristal?

```
valors = [ ] (lista vacia)
valores = [1, 2, 3]
valores = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
valores = [0, 0, 1, 0, 0, 0, 0]
```

**Respuesta**

- `valores = []` (lista vacia)

Considero que la lista vacia es un caso limite porque la lista es demasiado pequeña para usar alguno de los algoritmos de ordenamiento.


## Pruebas unitarias y de integración

Supongamos que está desarrollando una nueva receta de pizza. Hacer pizza involucra tres “módulos” (subrecetas) para:

- Hacer la masa para la corteza
- Hacer la salsa
- Preparar el queso y otros productos

**Respuesta**

Haces la masa para la base, la horneas sola y ves lo crocante y sabrosa que queda. Esto es `Hacer la masa para la corteza`

Decides comprar una mezcla de especias prefabricada en una tienda especializada. Haces una salsa con las especias y luego la pruebas. Esto es `Hacer la salsa`

Pones salsa y aderezos en una corteza y la horneas, para ver si la corteza todavía se cocina bien con las cosas húmedas encima. Esto es `Preparar el queso y otros productos`

## Pruebas de regresión automatizadas

¿Cuál de los siguientes define mejor las pruebas de regresión?

**Respuesta**

- Cada componente en tu código debe tener un conjunto asociado de pruebas que ejerza todos los casos extremos en tu especificación.

---

¿Cuáles de los siguientes son buenos momentos para volver a ejecutar todas tus pruebas JUnit?

**Respuesta**

- Antes de hacer git add/commit/push
- Después de reescribir una función para hacerla más rápida
- Después de pensar que solucionaste un error

## Test First Development

¿Cuáles de estas técnicas son útiles para elegir casos de prueba en el TFD antes de escribir cualquier código?

**Respuesta**

- Regresion
- Caja de cristal

¿Cuál de estos pasos te ayudará a validar tu especificación antes de implementar el algoritmo de búsqueda binaria?

**Respuesta**

- Pruebas de caja negra

---

¿Cuál de estos pasos ayudará a validar tu conjunto de pruebas antes de implementar el algoritmo de búsqueda binaria?

**Respuesta**

- Ejecutar una herramienta de cobertura de código en una implementación simple

## Documenta tu estrategia de prueba

La partición para el parámetro `a`:

**Respuesta**

- En un comentario al comienzo de `MathTest.java` 

--- 

La anotación `@Test` 

**Respuesta**

- Justo antes de un método de prueba JUnit

---

El comentario `covers a < b` 

**Respuesta**

- En un comentario al comienzo de `Math.java`

---

El comentario `@return` el máximo de `a` y `b`

**Respuesta**

- En un comentario justo antes del método `max()`