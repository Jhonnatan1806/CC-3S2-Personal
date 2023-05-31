# SOLID

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [SOLID - Kapumota](https://github.com/kapumota/Actividades/blob/main/SOLID/ActividadSOLID.md)

Fecha de entrega: `02/04/23`

## Principio de responsabilidad única - SRP

:question: Realiza una salida de muestra. Ten en cuenta que la identificación(ID) de un empleado puede variar en tu caso porque genera un número aleatorio para obtener la identificación (ID) del empleado.

:white_check_mark: **Respuesta**

```
Demostracion sin SRP
Nombre del empleado: Abejita,Jessica
Este empleado tiene 7.5 años de experiencia.
El ID del empleado es: J393
Este empleado es un empleado senior

*******

Nombre del empleado: Smart,Chalito
Este empleado tiene 3.2 años de experiencia.
El ID del empleado es: C169
Este empleado es un empleado junior
```

:question: ¿Cuál es el problema con este diseño?

:white_check_mark: **Respuesta**

La clase Empleado tiene dos responsabilidades distintas, mostrar los detalles del empleado y generar el ID del empleado. En el método generateEmpId, estás generando el ID del empleado, pero también está actualizando el estado de la instancia de Empleado.

:question: Demostracion con SRP.

:white_check_mark: **Respuesta**

```
Demostracion de SRP
Nombre del empleado: Abejita,Jessica
Este empleado tiene 7.5 años de experiencia.
El id del empleado es: J862
Este empleado es un empleado senior

*******

Nombre del empleado: Smart,Chalito
Este empleado tiene 3.2 años de experiencia.
El id del empleado es: C596
Este empleado es un empleado junior
```

:question: Realiza una demostración completa que sigue a SRP. Explica los resultados

:white_check_mark: **Respuesta**

* Creamos una clase `Cliente` que se encarga de crear instancias de Empleado y llamar al método `showEmpDetail` para mostrar los detalles del empleado, generar el ID del empleado y verificar su nivel laboral.
* La clase `Empleado` solo se encarga de almacenar la información del empleado, como el nombre, el apellido y los años de experiencia.
* La clase `GeneradorIDEmpleado` se encarga de generar el ID del empleado
* La clase `SeniorityChecker` se encarga de verificar el nivel laboral del empleado.

Esto cumple con el principio de responsabilidad única, ya que cada clase tiene una sola responsabilidad y no tiene más de una razón para cambiar. Por ejemplo, si se quisiera cambiar la forma en que se genera el ID del empleado, solo se tendría que modificar la clase GeneradorIDEmpleado y no se tendría que modificar la clase Empleado. De esta manera, el código se vuelve más flexible y se pueden hacer cambios sin afectar la funcionalidad existente, lo que facilita su mantenimiento y extensión en el futuro.

## Principio abierto/cerrado - OCP

:question: Si entiendes el principio SRP mencionado anteriormente no querrás colocar displayResult() y evaluateDistinction() en la misma clase. ¿Por qué?.

:white_check_mark: **Respuesta**

No se debería colocar `displayResult()` y `evaluateDistinction()` en la misma clase, ya que violaría el principio de SRP de SOLID. En este caso la clase Student tiene dos responsabilidades distintas, mostrar los detalles del estudiante y evaluar su distinción.

:question: Realiza una salida de muestra.

:white_check_mark: **Respuesta**

```
Demostracion sin OCP
Resultados:
Nombre: Irene
Numero Regex: R1
Dept:Ciencia de la Computacion.
Marks:81.5
*******
Nombre: Jessica
Numero Regex: R2
Dept:Fisica
Marks:72.0
*******
Nombre: Chalo
Numero Regex: R3
Dept:Historia
Marks:71.0
*******
Nombre: Claudio
Numero Regex: R4
Dept:Literatura
Marks:66.5
*******
Distinciones:
R1 ha recibido una distincion en ciencias.
R3 ha recibido una distincion en artes.
```

:question: Modifica el método de evaluateDistinction() y agrega otra instrucción if para considerar a los estudiantes de comercio. ¿Está bien modificar el método evaluateDistinction() de esta manera?.

:white_check_mark: **Respuesta**

No está bien modificar el método `evaluateDistinction()`, ya que violaría el principio de Open-Closed (OCP) de SOLID. En este caso la modificación directa del método `evaluateDistinction()` para incluir a los estudiantes de comercio viola este principio, ya que si se agregara otra categoría en el futuro, se tendría que modificar nuevamente el método y se rompería el principio de OCP.

:question: ¿Cuáles son las principales ventajas ahora?.

:white_check_mark: **Respuesta**

En este caso una de las ventajas sería que si se quisiera agregar un nuevo tipo de estudiante, como por ejemplo, un estudiante de negocios, se podría crear una nueva clase llamada `BusinessStudent` que implemente la interfaz `Estudiante` y agregarla a las listas de estudiantes sin necesidad de modificar el código existente. Además, si se quisiera agregar un nuevo criterio de distinción para los estudiantes, se podría crear una nueva clase que implemente la interfaz `DistinctionDecider` y agregarla al código sin necesidad de modificar las clases existentes. De esta manera, el código se vuelve más flexible y se pueden hacer cambios sin afectar la funcionalidad existente, lo que facilita su mantenimiento y extensión en el futuro.

## Principio de Sustitución de Liskov

:question: Realiza una salida de muestra.

:white_check_mark: **Respuesta**

:question: Dentro del método main(), ahora crea una instancia de usuario invitado e intenta usar su clase auxiliar de la misma manera.

:white_check_mark: **Respuesta**

:question: Realiza una salida de muestra y describe la excepción resultante. ¿Cuál es el problema?.

:white_check_mark: **Respuesta**

:question: Elimina el método newPayment() de la interfaz de payment. Coloca este método en otra interfaz llamada NewPayment. Ahora tienes dos interfaces con las operaciones específicas. Dado que todos los tipos de usuarios pueden generar una nueva solicitud de pago, las clases concretas de RegisteredUserPayment y GuestUserPayment implementan la interfaz NewPayment y muestran el último detalle de pago solo para los usuarios registrados. Así la clase RegisteredUser implementa la interfaz payment. Dado que Payment contiene el método previousPaymentInfo(), tiene sentido elegir un nombre mejor, como PreviousPayment en lugar de Payment. Entonces, ahora deberías ver las siguientes interfaces:

:white_check_mark: **Respuesta**

:question: ¿cuáles son los cambios clave?. Explica tus resultados.

:white_check_mark: **Respuesta**

## Principio de segregación de interfaz

:question: En este caso ISP sugiere que diseñes tu interfaz con los métodos adecuados que un cliente en particular pueda necesitar. ¿Por qué un usuario necesita cambiar una clase base (o una interfaz)?

:white_check_mark: **Respuesta**

:question: ¿Ayuda escribir código polimórfico como el siguiente?. Explica tu respuesta.

:white_check_mark: **Respuesta**

:question: ¿Qué sucede si escribimos algo así en el código dado?

:white_check_mark: **Respuesta**

:question: Realiza una salida de muestra

:white_check_mark: **Respuesta**

:question: ¿Qué sucede si usas un método predeterminado dentro de la interfaz?

:white_check_mark: **Respuesta**

:question: ¿Viste el problema potencial con esto! . Pero, ¿qué sucede si usas un método vacío, en lugar de lanzar la excepción?.

## Principio de inversión de dependencias

:question: Realiza una salida de muestra. ¿Cuáles son los problemas que adolece el código?

:white_check_mark: **Respuesta**

:question: Puedes ver que en la demostración, el constructor de la clase InterfazUsuario acepta un parámetro de base de datos. Puedes proporcionar una instalación adicional a un usuario cuando utilizas tanto el constructor como el método setter (setDatabase) dentro de esta clase. Aquí hay un código de muestra.

:white_check_mark: **Respuesta**

:question: ¿Cuál es el beneficio de hacer esto?.

:white_check_mark: **Respuesta**

:question: Verifica tus resultados.
