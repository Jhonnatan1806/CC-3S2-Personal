# Contratos

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [Contratos - Kapumota](https://github.com/kapumota/Actividades/blob/main/Contratos/Contratos.md)

Fecha de entrega: `29/05/23`

## Diseño de contratos

### Precondiciones y postcondiciones

:question: **Pregunta**

Escribe el Javadoc del método calculateTax describiendo su contrato, de acuerdo al código anterior. Revisa el archivo `TaxCalculator.java`

:white_check_mark: **Respuesta**

```java
/**
 * Calcula el valor del impuesto basado en el valor proporcionado.
 *
 * @param value el valor para el cual se calculara el impuesto.
 * @return el valor del impuesto calculado.
 * @throws RuntimeException si el valor proporcionado es negativo.
 * @throws RuntimeException si el impuesto calculado es negativo.
 */
public double calculateTax(double value) {
    if(value < 0) {
        throw new RuntimeException("El valor tiene que ser positivo.");
    }

    double taxValue = 0;

    if(taxValue < 0) {
        throw new RuntimeException("El impuesto no puede ser negativo.");
    }
    return taxValue;
}
```

### La palabra clave assert

:question: **Pregunta**

Escribe una versión de TaxCalculator usando asserts para ello completa el archivo `TaxCalculator1.java`

:white_check_mark: **Respuesta**

```java
/** 
 * Calcula el valor del impuesto basado en el valor proporcionado.
 * 
 * @param value el valor para el cual se calculara el impuesto.
 * @return el valor del impuesto calculado.
 * @throws AssertionError si el valor proporcionado es negativo.
 * @throws AssertionError si el impuesto calculado es negativo.
 */
public double calculateTax(double value) {
    assert value > 0 : "El valor tiene que ser positivo.";

    double taxValue = 0;

    assert taxValue > 0 : "El impuesto no puede ser negativo.";

    return taxValue;
}
```

## Precondiciones y postcondiciones fuertes y debiles

:question: **Pregunta**

¿Puedes aplicar el mismo razonamiento a las postcondiciones? , ¿como relacionas el siguiente listado que devuelve un código de error en lugar de una excepción?.

:white_check_mark: **Respuesta**

* Si, se puede aplicar el mismo razonamiento a las postcondiciones. Las postcondiciones pueden ser mas debiles o mas fuertes, dependiendo de como se definan y como afecten al comportamiento del metodo, pero en este caso se evalua el resultado de la funcion, en lugar de los parametros de entrada.


## Invariantes

:question: **Pregunta**

Escribe para el método `add()` sus pre/postcondiciones.

:white_check_mark: **Respuesta**

Precondiciones

* El parametro `product` no debe ser nulo.
* El parametro `qtyToAdd` debe ser un número entero positivo mayor que cero.

Postcondiciones

* El producto se agrega al carrito de compras.
* La cantidad de productos agregados al carrito de compras se actualiza.
* El valor total de la compra se actualiza.

```java
public void add(Product product, int qtyToAdd) {
    // Precondiciones
    if (product == null) {
        throw new RuntimeException("El producto no puede ser nulo.");
    }

    if (qtyToAdd <= 0) {
        throw new RuntimeException("La cantidad a agregar debe ser un numero entero positivo mayor que cero.");
    }

    // Postcondiciones
    int currentQty = basket.getOrDefault(product, 0);
    int newQty = currentQty + qtyToAdd;
    basket.put(product, newQty);

    BigDecimal productPrice = product.getPrice();
    BigDecimal addedValue = productPrice.multiply(BigDecimal.valueOf(qtyToAdd));
    totalValue = totalValue.add(addedValue);
}
```

:question: **Pregunta**

Modela otra postcondiciones aquí, como el nuevo valor total debe ser mayor que el valor total anterior. Usa la clase `BigDecimal` en lugar de un `double`. `BigDecimal` se recomienda siempre que desees evitar problemas de redondeo que pueden ocurrir cuando usas `double`.

:white_check_mark: **Respuesta**

Postcondiciones

* El producto se agrega al carrito de compras.
* La cantidad de productos agregados al carrito de compras se actualiza.
* El valor total de la compra se actualiza.
* El nuevo valor total debe ser mayor que el valor total anterior.

Estas nuevas postcondiciones aseguran que el producto se agrega correctamente al carrito, ademas se actualiza el valor total de manera precisa utilizando la clase `BigDecimal`, y se verifica que el nuevo valor total sea mayor que el valor total anterior para evitar problemas de redondeo y asegurar la integridad de los datos.

```java
public void add(Product product, int qtyToAdd) {
    // Precondiciones
    if (product == null) {
        throw new RuntimeException("El producto no puede ser nulo.");
    }

    if (qtyToAdd <= 0) {
        throw new RuntimeException("La cantidad a agregar debe ser un numero entero positivo mayor que cero.");
    }

    // Postcondiciones
    int currentQty = basket.getOrDefault(product, 0);
    int newQty = currentQty + qtyToAdd;
    basket.put(product, newQty);

    BigDecimal productPrice = product.getPrice();
    BigDecimal addedValue = productPrice.multiply(BigDecimal.valueOf(qtyToAdd));
    BigDecimal newTotalValue = totalValue.add(addedValue);

    if (newTotalValue.compareTo(totalValue) <= 0) {
        throw new IllegalStateException("El nuevo valor total no es mayor que el valor total anterior.");
    }

    totalValue = newTotalValue;
}
```	

:question: **Pregunta**

Escribe las pre/post condiciones del método `remove()`.

:white_check_mark: **Respuesta**

Precondiciones

* El parametro `product` no debe ser nulo.
* El producto debe existir en el carrito de compras.

Postcondiciones

* El producto se elimina del carrito de compras.
* La cantidad de productos eliminados del carrito de compras se actualiza.
* El valor total de la compra se actualiza.
* El valor total del carrito no puede ser negativo.

```java
public void remove(Product product) {
    // Precondiciones
    if (product == null) {
        throw new RuntimeException("El producto no puede ser nulo.");
    }

    if (!basket.containsKey(product)) {
        throw new RuntimeException("El producto no existe en el carrito.");
    }

    // Postcondiciones
    int removedQty = basket.remove(product);
    BigDecimal productPrice = product.getPrice();
    BigDecimal removedValue = productPrice.multiply(BigDecimal.valueOf(removedQty));
    BigDecimal newTotalValue = totalValue.subtract(removedValue);

    if (newTotalValue.compareTo(BigDecimal.ZERO) < 0) {
        throw new IllegalStateException("El valor total del carrito no puede ser negativo.");
    }

    totalValue = newTotalValue;
}
```

:question: **Pregunta**

Explica y completa el siguiente listado de invariantes de la clase Basket:

:white_check_mark: **Respuesta**

Invariante 1
* Invariante: El producto y la cantidad a agregar no pueden ser nulos o negativos
* Explicación: El metodo `add()` no permite agregar un producto nulo o una cantidad negativa al carrito.

Invariante 2
* Invariante: El producto debe existir en el carrito antes de su eliminacion.
* Explicación: El metodo `remove()` verifica que el producto a eliminar exista en el carrito antes de su eliminacion.

Invariante 3
* Invariante: Después de agregar un producto, el valor total del carrito debe ser mayor que el valor total anterior.
* Explicación: El metodo `add()` realiza una comparación entre el nuevo valor total y el valor total anterior, asegurando que el nuevo valor total sea mayor.

Invariante 4
* Invariante: El valor total del carrito nunca puede ser negativo.
* Explicación: Tanto en el metodo add() como en el metodo remove(), se verifica que el valor total del carrito no sea negativo después de realizar las operaciones correspondientes.

Completando el código:
```java
public class Basket {
    private BigDecimal totalValue = BigDecimal.ZERO;
    private Map<Product, Integer> basket = new HashMap<>();

    public void add(Product product, int qtyToAdd) {
        assert product != null : "El producto no puede ser nulo.";
        assert qtyToAdd > 0 : "La cantidad a agregar debe ser un número entero positivo mayor que cero.";

        BigDecimal oldTotalValue = totalValue;

        assert basket.containsKey(product) : "El producto debe existir en el carrito antes de agregarlo.";
        assert totalValue.compareTo(oldTotalValue) == 1 : "El nuevo valor total debe ser mayor que el valor total anterior.";
        assert totalValue.compareTo(BigDecimal.ZERO) >= 0 : "El valor total no puede ser negativo.";
    }

    public void remove(Product product) {
        assert product != null : "El producto no puede ser nulo.";
        assert basket.containsKey(product) : "El producto debe existir en el carrito antes de eliminarlo.";

        assert !basket.containsKey(product) : "El producto no debe existir en el carrito después de eliminarlo.";
        assert totalValue.compareTo(BigDecimal.ZERO) >= 0 : "El valor total no puede ser negativo.";
    }
}
```

:question: **Pregunta**

¿Qué función tiene el método `invariant()` en el siguiente listado?

:white_check_mark: **Respuesta**

El metodo `invariant()` tiene la funcion de verificar si se cumple que el valor total del carrito nunca puede ser negativo.
