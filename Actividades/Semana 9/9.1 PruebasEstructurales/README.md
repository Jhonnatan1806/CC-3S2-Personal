# Pruebas Estructurales

Autor: `Jhonnatan Antonio Espinoza Rojas`

Archivo original: [Pruebas Estructurales - Kapumota](https://github.com/kapumota/Actividades/blob/main/PruebasEstructurales/PruebasEstructurales.md)

Fecha de entrega: `24/05/23`

## Cobertura de código

:question: **Pregunta**

Explica qué hacen las líneas 1, 2, 3 en el código.

```java
public class CountWords {
   public int count(String str) {
     int words = 0;
          char last = ' ';
   
    for (int i = 0; i < str.length(); i++) {  // 1

        if (!isLetter(str.charAt(i)) &&    // 2
                (last == 's' || last == 'r')) {
               words++;
                }
        last = str.charAt(i);     //3
    }
   if (last == 'r' || last == 's') {
        words; 
          }
       return words;
   }
}
```

:white_check_mark: **Respuesta**

* `for (int i = 0; i < str.length(); i++) {` Esta línea inicializa el bucle `for` y establece la variable `i` en 0. El bucle se ejecutará mientras `i` sea menor que la longitud de la cadena `str`. En cada iteración, `i` se incrementa en 1.

* `if (!isLetter(str.charAt(i)) && (last == 's' || last == 'r')) {` Esta línea verifica si el carácter actual no es una letra y si el carácter anterior es una `s` o una `r`.

* `last = str.charAt(i);` Esta línea establece el carácter actual como el carácter anterior para la siguiente iteración del bucle.

:question: **Pregunta**

Explica qué hacen las líneas 1, 2 del código.

```java
@Test
void twoWordsEndingWithS() {   // 1
    int words = new CountLetters().count("dogs cats");
         assertThat(words).isEqualTo(2);
}
@Test
void noWordsAtAll() {  // 2
   int words = new CountLetters().count("dog cat");
        assertThat(words).isEqualTo(0);
}
```

:white_check_mark: **Respuesta**

* `void twoWordsEndingWithS()` Esta línea declara un método de prueba que verifica que la cadena `dogs cats` contenga dos palabras que terminen con `s`.

* `void noWordsAtAll()` Esta línea declara un método de prueba que verifica que la cadena `dog cat` no contenga ninguna palabra.

:question: **Pregunta**

Explica la línea 1 y con el caso de prueba vuelve a ejecutar la herramienta de cobertura. Explica los cambios obtenidos.

```java
@Test
void wordsThatEndInR() {  // 1
   int words = new CountWords().count("car bar");
    assertThat(words).isEqualTo(2);
}
```

:white_check_mark: **Respuesta**

* `void wordsThatEndInR()` Esta línea declara un método de prueba que verifica que la cadena `car bar` contenga dos palabras que terminen con `r`.

## Pruebas estructurales y basadas en especificaciones

Explica los comentarios 1, 2, 3, 4 y 5 del código anterior.

```java
public class LeftPadUtils {

    private static final String SPACE = " ";
    private static boolean isEmpty(final CharSequence cs) {
    	return cs == null || cs.length() == 0;
    }

   /**
     * @param size  
     * @param padStr  
     * @return left 
     * {@code null} 
     */
    public static String leftPad(final String str, final int size, String padStr) {
        if (str == null) {  // 1
        	return null;
        }
        if (isEmpty(padStr)) {
        	padStr = SPACE;   //2
        }
        final int padLen = padStr.length();
    	final int strLen = str.length();
    	final int pads = size - strLen;
    	if (pads <= 0) {  // 3
            return str; 
    	}
    	if (pads == padLen) {  // 4
            return padStr.concat(str);
    	} else if (pads < padLen) {  // 5
            return padStr.substring(0, pads).concat(str);
    	} else {   // 6
            final char[] padding = new char[pads];
            final char[] padChars = padStr.toCharArray();
            for (int i = 0; i < pads; i++) {
           	 	padding[i] = padChars[i % padLen];
            }
        return new String(padding).concat(str);
        }
    }
}
```

:white_check_mark: **Respuesta**

* `if (str == null) {` Esta línea verifica si la cadena `str` es nula.

* `padStr = SPACE;` Esta línea establece el valor de la cadena `padStr` en un espacio si la cadena `padStr` está vacía.

* `if (pads <= 0) {` Esta línea verifica si el valor de `pads` es menor o igual a 0.

* `if (pads == padLen) {` Esta línea verifica si el valor de `pads` es igual a la longitud de la cadena `padLen`.

* `} else if (pads < padLen) {` Esta línea verifica si el valor de `pads` es menor que la longitud de la cadena `padLen`.

* `} else {` Esta línea se ejecuta si ninguna de las condiciones anteriores es verdadera.

:question: **Pregunta**

Explica las líneas 1, 2 y 3 en el código anterior. Analiza el informe y responde qué sucede con las expresiones `if (pads == padLen)` y `else if (pads < padLen)`.

```java
public class LeftPadTest {
    @ParameterizedTest
    @MethodSource("generator")
    void test(String originalStr, int size, String padString, String expectedStr) {  // 1
        assertThat(leftPad(originalStr, size, padString)).isEqualTo(expectedStr);
	}
    static Stream<Arguments> generator() { // 2
        return Stream.of(
            of(null, 10, "-", null),    //T1
            of("", 5, "-", "-----"),    //T2
            of("abc", -1, "-", "abc"),  //t3
            of("abc", 5, null, " abc"), //T4
            of("abc", 5, "", " abc"),   //T5
            of("abc", 5, "-", "--abc"), //T6
            of("abc", 3, "-", "abc"),   //T7
            of("abc", 0, "-", "abc"),   //T8
            of("abc", 2, "-", "abc")    //T9
        );
    }
}
```

:white_check_mark: **Respuesta**

* `void test(String originalStr, int size, String padString, String expectedStr)` Esta línea declara un método de prueba que toma cuatro parámetros: `originalStr`, `size`, `padString` y `expectedStr`.

* `static Stream<Arguments> generator()` Esta línea declara un método que devuelve un `Stream` de argumentos.

:question: **Pregunta**

Agrega estos tres casos de prueba adicionales a la prueba parametrizada, como se muestra en el listado y vuelve a ejecutar la herramienta de cobertura. Explica el informe obtenido, ¿es similar al anterior?. Explica tu respuesta.

* T10: la longitud de padStr es igual a los espacios restantes en str.
* T11: la longitud de padStr es mayor que los espacios restantes en str.
* T12: la longitud de padStr es más pequeña que los espacios restantes en str (esta prueba puede ser similar a T6).

:white_check_mark: **Respuesta**

* T10: la longitud de padStr es igual a los espacios restantes en str.

```java
of("abc", 5, "--", "--abc")
```

* T11: la longitud de padStr es mayor que los espacios restantes en str.

```java
of("abc", 5, "---", "--abc")
```

* T12: la longitud de padStr es más pequeña que los espacios restantes en str (esta prueba puede ser similar a T6).

```java
of("abc", 5, "-", "--abc")
```

:question: **Pregunta**

Agrega este caso de prueba adicional a la prueba parametrizada y vuelve a ejecutar la herramienta de cobertura. Explica el informe obtenido, ¿es similar al anterior?. Explica tu respuesta.

```java
@Test
void sameInstance() {
    String str = "sometext";
    assertThat(leftPad(str, 5, "-")).isSameAs(str);
}
```

:white_check_mark: **Respuesta**

Si es similar al anterior, ya que la prueba anterior verifica que la cadena `str` sea igual a la cadena `expectedStr`. En este caso, la prueba verifica que la cadena `str` sea la misma que la cadena `expectedStr`.

:question: **Pregunta**

Explica las líneas 1, 2 y 3 del código anterior.

```java
public class Clumps {
    /**
     * @param nums
     *        
     * @return  ...
     */
    public static int countClumps(int[] nums) {
    	if (nums == null || nums.length == 0) {  // 1
    	    return 0;
        }
    	int count = 0;
    	int prev = nums[0];
    	boolean inClump = false;
    	for (int i = 1; i < nums.length; i++) {
        	if (nums[i] == prev && !inClump) { // 2
                inClump = true;
                count += 1;
            }
            if (nums[i] != prev) {  // 3
         		prev = nums[i];
            	inClump = false;
        	}
    	}
    	return count;
    }
}
```

:white_check_mark: **Respuesta**

* `if (nums == null || nums.length == 0) {` Esta línea verifica si la matriz `nums` es nula o si su longitud es 0. 
* `if (nums[i] == prev && !inClump) {` Esta línea verifica si el elemento actual de la matriz `nums` es igual al elemento anterior y si no está en un grupo.
* `if (nums[i] != prev) {` Esta línea verifica si el elemento actual de la matriz `nums` no es igual al elemento anterior.

:question: **Pregunta**

Escribe caso de prueba y vuelve a ejecutar la herramienta de cobertura. Explica el informe obtenido. ¿ Se logra una cobertura de ramas del 100%?. ¿Se puede confiar ciegamente en la cobertura?.

```java
public class ClumpsOnlyStructuralTest {

    @ParameterizedTest
    @MethodSource("generator")
        void testClumps(int[] nums, int expectedNoOfClumps) {
    	assertThat(Clumps.countClumps(nums))
            .isEqualTo(expectedNoOfClumps);
        }
    static Stream<Arguments> generator() {
        return Stream.of(
            of(new int[]{}, 0), // vacío
            of(null, 0), // null
            of(new int[]{1,2,2,2,1}, 1), // 1 grupo
            of(new int[]{1}, 0), // 1 elemento
            of(new int[]{2,2}, 1)
        );
    }
}
```

:white_check_mark: **Respuesta**

No se puede confiar ciegamente en la cobertura obtenida ya que no garantiza la ausencia de errores. La cobertura solo indica qué partes del código se han ejecutado durante las pruebas, pero no garantiza que todas las combinaciones posibles de entrada hayan sido probadas. Es posible que haya casos de prueba adicionales o escenarios específicos que no se hayan cubierto y que puedan conducir a errores no detectados. 