# Contratos

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [Contratos - Kapumota](https://github.com/kapumota/Actividades/blob/main/Contratos/Contratos.md)

Fecha de entrega: `29/05/23`

## Diseño de contratos

### Precondiciones y postcondiciones

:question: Escribe el Javadoc del método calculateTax describiendo su contrato, de acuerdo al código anterior. Revisa el archivo `TaxCalculator.java`

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

:question: Escribe una versión de TaxCalculator usando asserts para ello completa el archivo `TaxCalculator1.java`

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

## Precondiciones y postcondiciones fuertes y débiles

:question: ¿Puedes aplicar el mismo razonamiento a las postcondiciones? , ¿como relacionas el siguiente listado que devuelve un código de error en lugar de una excepción?.

:white_check_mark: **Respuesta**

* Si, se puede aplicar el mismo razonamiento a las postcondiciones. Al igual que las precondiciones, las postcondiciones pueden ser más débiles o más fuertes, dependiendo de cómo se definan y cómo afecten al comportamiento del método, pero en este caso se evalua el resultado de la función, en lugar de los parámetros de entrada.

* En el código proporcionado, el método `calculateTax` devuelve un código de error (el valor 0) en lugar de lanzar una excepción si se viola la precondición de que value sea un número positivo. Esta es una forma de debilitar la postcondición del método. La debilitación de la postcondición en este caso permite que el método devuelva algún valor, incluso cuando la precondición no se cumple. En lugar de detener el programa o lanzar una excepción, se proporciona un resultado "dummy" (valor 0) para indicar que se violó la precondición.

## Invariantes

:question: Escribe para el método `add()` sus pre/postcondiciones.

:white_check_mark: **Respuesta**

:small_blue_diamond: Precondiciones

* El parámetro `product` no debe ser nulo.
* El parámetro `qtyToAdd` debe ser un número entero positivo mayor que cero.

:small_blue_diamond: Postcondiciones

* El producto se agrega al carrito de compras.
* La cantidad de productos agregados al carrito de compras se actualiza.
* El valor total de la compra se actualiza.

```java
public void add(Product product, int qtyToAdd) {
    // Precondiciones
    if (product == null) {
        throw new IllegalArgumentException("El producto no puede ser nulo.");
    }

    if (qtyToAdd <= 0) {
        throw new IllegalArgumentException("La cantidad a agregar debe ser un numero entero positivo mayor que cero.");
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

:question: Modela otra postcondiciones aquí, como el nuevo valor total debe ser mayor que el valor total anterior. Usa la clase `BigDecimal` en lugar de un `double`. `BigDecimal` se recomienda siempre que desees evitar problemas de redondeo que pueden ocurrir cuando usas `double`.

:white_check_mark: **Respuesta**

:small_blue_diamond: Postcondiciones

* El producto se agrega al carrito de compras.
* La cantidad de productos agregados al carrito de compras se actualiza.
* El valor total de la compra se actualiza.
* El nuevo valor total debe ser mayor que el valor total anterior.

Estas nuevas postcondiciones aseguran que el producto se agrega correctamente al carrito, ademas se actualiza el valor total de manera precisa utilizando la clase `BigDecimal`, y se verifica que el nuevo valor total sea mayor que el valor total anterior para evitar problemas de redondeo y asegurar la integridad del código.

```java
public void add(Product product, int qtyToAdd) {
    // Precondiciones
    if (product == null) {
        throw new IllegalArgumentException("El producto no puede ser nulo.");
    }

    if (qtyToAdd <= 0) {
        throw new IllegalArgumentException("La cantidad a agregar debe ser un numero entero positivo mayor que cero.");
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

:question: Escribe las pre/post condiciones del método remove().

:white_check_mark: **Respuesta**

:small_blue_diamond: Precondiciones

* El parámetro `product` no debe ser nulo.
* El producto debe existir en el carrito de compras.

:small_blue_diamond: Postcondiciones

* El producto se elimina del carrito de compras.
* La cantidad de productos eliminados del carrito de compras se actualiza.
* El valor total de la compra se actualiza.
* El valor total del carrito no puede ser negativo.

```java
public void remove(Product product) {
    // Precondiciones
    if (product == null) {
        throw new IllegalArgumentException("El producto no puede ser nulo.");
    }

    if (!basket.containsKey(product)) {
        throw new IllegalArgumentException("El producto no existe en el carrito.");
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

