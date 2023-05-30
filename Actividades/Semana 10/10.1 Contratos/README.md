# Contratos

Archivo original [Contratos - Kapumota ](https://github.com/kapumota/Actividades/blob/main/Contratos/Contratos.md)

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
        throw new RuntimeException("El valor tiene que ser positivo");
    }

    double taxValue = 0;

    if(taxValue < 0) {
        throw new RuntimeException("El impuesto no puede ser negativo");
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
    assert value >= 0 : "El valor no puede ser negativo";

    double taxValue = 0;

    assert taxValue >= 0 : "El impuesto no puede ser negativo";

    return taxValue;
}
```

## Precondiciones y postcondiciones fuertes y débiles




