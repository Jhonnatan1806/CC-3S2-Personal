# Piramide de Pruebas

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [PiramidePruebas - Kapumota](https://github.com/kapumota/Actividades/blob/main/PiramidePruebas/PiramidePruebas.md)

Fecha: `08/05/23`

## Ejercicios

:question: **Pregunta**

¿Qué nivel de prueba suele realizar el personal de administración de un sistema?

:white_check_mark: **Respuesta**

El personal de administración de un sistema suele realizar pruebas de nivel de integración, pruebas de aceptación del usuario y pruebas de rendimiento. Estas pruebas son importantes para asegurarse de que el sistema funcione correctamente, esté integrado adecuadamente con otros componentes y cumpla con los requisitos y expectativas del usuario.

:question: **Pregunta**

Considera este requisito: "Una tienda web ejecuta un trabajo por lotes, una vez al día, para entregar todos los pedidos que se han pagado. También establece la fecha de entrega según si el pedido es de un cliente internacional. Los pedidos se recuperan de una base de datos externa. Los pedidos que se han pagado se envían a un servicio web externo”. Como evaluador, debes decidir qué nivel de prueba (unidad, integración o sistema) aplicar. ¿Qué tipo de prueba aplicarias a este caso?

:white_check_mark: **Respuesta**

Se recomienda aplicar una prueba de nivel de sistema. La prueba de nivel de sistema permite verificar que todas las funcionalidades del sistema, en este caso la ejecución del trabajo por lotes, la entrega de los pedidos, el cálculo de la fecha de entrega y el envío de los pedidos al servicio web externo, estén funcionando correctamente en conjunto.

Además, al mencionar que los pedidos se recuperan de una base de datos externa, es necesario asegurarse de que la comunicación y la integración con esta base de datos se realicen de manera adecuada.

:question: **Pregunta**

Inspectora Motita acaba de comenzar una consultoría para una empresa que desarrolla una aplicación móvil para ayudar a las personas a mantenerse al día con sus ejercicios diarios. Los miembros del equipo de desarrollo son fanáticos de las pruebas de software automatizadas y más específicamente, de las pruebas unitarias. Tienen una alta cobertura de código de prueba de unidad pero los usuarios aún informan una cantidad significativa de errores. Motita, que está bien versada en pruebas de software, explica un principio de prueba al equipo. ¿De cuál principio habló?.

:white_check_mark: **Respuesta**

El principio de prueba al que Motita podría haber hecho referencia es el "Principio de prueba complementaria".

Este principio establece que las pruebas automatizadas, como las pruebas unitarias, son importantes y útiles para evaluar la funcionalidad y la lógica interna del código, pero no son suficientes por sí solas para garantizar la calidad del software. Se necesita un enfoque complementario que incluya pruebas adicionales para evaluar aspectos más amplios del sistema, como su interacción con el entorno, la usabilidad, el rendimiento y la experiencia del usuario.

:question: **Pregunta**

Monky un tester de software junior, acaba de unirse a una empresa de pago en línea muy grande en Escocia. Como primera tarea, Monky analiza los informes de errores de los últimos dos años. Él observa que más del 50% de los errores ocurren en el módulo de pagos internacionales. El le promete a su gerente que diseñará casos de prueba que cubran completamente el módulo de pagos internacionales y así encontrar todos los errores. ¿Pueden las pruebas exhaustivas pueden explicar por qué esto no es posible?

:white_check_mark: **Respuesta**

En teoría, las pruebas exhaustivas podrían proporcionar una cobertura completa del sistema y, por lo tanto, ayudar a encontrar todos los errores. Sin embargo, en la práctica, las pruebas exhaustivas no son factibles debido a las limitaciones de tiempo, recursos y complejidad del sistema.

:question: **Pregunta**

¿Cuál es la razón principal por la que el número de pruebas recomendadas del sistema en la pirámide de pruebas es menor que el número de pruebas unitarias?

:white_check_mark: **Respuesta**

La razón principal por la que el número de pruebas recomendadas del sistema en la pirámide de pruebas es menor que el número de pruebas unitarias se debe a que las pruebas unitarias se centran en la verificación de componentes individuales o unidades de código de manera aislada, mientras que las pruebas del sistema se enfocan en la interacción y la integración de diferentes componentes y son mas dificiles de realizar.

:question: **Pregunta**

Una universidad (X) ha creado un software interno para gestionar la nómina de los empleados. La aplicación utiliza tecnologías web de Java y almacena datos en una base de datos de Postgres. La aplicación recupera, modifica e inserta con frecuencia grandes cantidades de datos. Toda esta comunicación se realiza mediante clases Java que envían consultas SQL (complejas) a la base de datos. Como evaluadores sabemos que un error puede estar en cualquier lugar, incluso en las consultas SQL. También sabemos que hay muchas formas de ejercitar nuestro sistema. ¿Cuál es una buena opción para detectar errores en consultas SQL?

:white_check_mark: **Respuesta**

Una buena opción para detectar errores en consultas SQL es utilizar pruebas unitarias. Las pruebas unitarias son un enfoque de prueba de software que se centra en verificar el funcionamiento correcto de componentes individuales de un sistema, como métodos o funciones. En el caso de consultas SQL, se pueden escribir pruebas unitarias para validar la precisión y corrección de las consultas.

:question: **Pregunta**

Chalito, un evaluador de software con mucha experiencia, visita FCX!, una red social enfocada en emparejar personas según los cursos que llevan. Los usuarios no informan errores a menudo, ya que los desarrolladores cuentan con sólidas prácticas de prueba. Sin embargo, los usuarios dicen que el software no cumple lo que promete. ¿Qué principio de prueba se aplica aquí?

:white_check_mark: **Respuesta**

El principio de prueba que se aplica en este caso es el principio de la "Principio de adecuación funcional".  

El principio de adecuación funcional establece que las pruebas deben enfocarse en verificar si el software cumple con los requisitos funcionales establecidos y si satisface las necesidades y expectativas de los usuarios. En este escenario, los usuarios afirman que el software no cumple lo que promete, lo cual indica que existe una discrepancia entre las funcionalidades esperadas y las entregadas por el software.  

Para abordar esta situación, los evaluadores, como Chalito, deberán centrarse en investigar y probar las funcionalidades específicas que los usuarios consideran que no se cumplen. Esto puede implicar la realización de pruebas de aceptación o pruebas de usuario para evaluar si el software está realmente cumpliendo con los objetivos y expectativas establecidos.

:question: **Pregunta**

Kapumota cree firmemente en las pruebas unitarias. De hecho, este es el único tipo de prueba que realiza para cualquier proyecto del que forma parte. ¿Qué principio de prueba no ayudará a convencer a Kapumota de que debe alejarse de su enfoque de "pruebas unitarias únicas"?

:white_check_mark: **Respuesta**


El principio de prueba que no ayudará a convencer a Kapumota de alejarse de su enfoque de "pruebas unitarias únicas" es el principio de "Diversidad de técnicas de prueba".  

El principio de diversidad de técnicas de prueba establece que es importante utilizar diferentes enfoques y técnicas de prueba para obtener una cobertura adecuada y encontrar diferentes tipos de defectos en el software. Esto implica que no se deben basar únicamente en las pruebas unitarias, sino que también se deben emplear otros tipos de pruebas, como pruebas de integración, pruebas de sistema, pruebas de aceptación, entre otras.  

Sin embargo, Kapumota está firmemente convencido de que las pruebas unitarias son suficientes y no considera necesario utilizar otros tipos de pruebas. Este enfoque limitado puede dejar brechas en la cobertura de pruebas, ya que las pruebas unitarias se centran en verificar el funcionamiento de componentes individuales del software, pero no garantizan la interacción correcta entre esos componentes ni la validez del sistema en su conjunto.

:question: **Pregunta**

TDD se ha convertido en una práctica popular entre los desarrolladores. Según ellos, el TDD tiene varios beneficios. Indica algunos ejemplos no se considera un beneficio el TDD.

:white_check_mark: **Respuesta**

* Proyectos pequeños y sencillos
* Prototipos o pruebas de concepto rápidas
* Cambios frecuentes en los requisitos
* Componentes de terceros

:question: **Pregunta**

Indica algunas recomendaciones a seguir para mantener una aplicación web comprobable.

:white_check_mark: **Respuesta**

* Diseñar con la comprobabilidad en mente
* Aplicar principios de desarrollo orientados a pruebas
* Automatizar las pruebas
* Implementar pruebas unitarias, de integración y de aceptación
* Utilizar entornos de desarrollo y pruebas separados
* Realizar pruebas de carga y rendimiento
* Establecer métricas y criterios de aceptación
* Realizar pruebas de seguridad
* Implementar integración y entrega continuas