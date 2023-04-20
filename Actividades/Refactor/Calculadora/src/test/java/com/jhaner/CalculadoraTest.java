package com.jhaner;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculadoraTest {

    private static Calculadora calculadora;

    @BeforeAll
    public static void init(){
        calculadora = new Calculadora();
    }

    @Test
    public void whenCalculatorInitializedThenReturnTrue() {
        assertTrue(calculadora.getStatus());
    }

    @Test
    public void whenAdditionTwoNumberThenReturnCorrectAnswer() {
        assertEquals( 5, calculadora.addition(2,3));
    }

    @Test
    public void whenSubtractionTwoNumberThenReturnCorrectAnswer() {
        assertEquals( 1, calculadora.subtraction(4,3));
    }

    @Test
    public void whenDivisionThenReturnCorrectAnswer() {
        assertEquals(2, calculadora.division(8, 4));
    }

    @Test
    public void whenDivisionByZeroThenThrowException() {
        Throwable exception = assertThrows(IllegalArgumentException.class, () -> {
            calculadora.division(5, 0);
        });
        assertEquals("No se puede divisor por cero", exception.getMessage());
    }

    @Test
    public void whenMultiplicationThenReturnCorrectAnswer() {
        assertEquals(6, calculadora.multiplication(2, 3));
    }

    @Test
    public void whenPowerTwoNumbersThenReturnCorrectAnswer() {
        assertEquals(8.0, calculadora.power(2.0, 3.0), 0.001);
    }

    @Test
    public void whenSquareRootNumberThenReturnCorrectAnswer() {
        assertEquals(5.0, calculadora.squareRoot(25.0), 0.001);
    }

    @Test
    public void whenSquareRootOfNegativeNumberThenThrowException() {
        Throwable exception = assertThrows(IllegalArgumentException.class, () -> {
            calculadora.squareRoot(-25.0);
        });
        assertEquals("No se puede calcular la raiz cuadrada de un numero negativo", exception.getMessage());
    }

}
