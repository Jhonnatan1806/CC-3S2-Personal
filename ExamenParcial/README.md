# Examen Parcial CC-3S2

**Autor:** Jhonnatan Espinoza Rojas.

**Fecha:** 2023-05-15.

## Pregunta 1

### Codigo sin refactorizar

#### Clase Member
```java
public abstract class Member {
    private final String name;
    public Member(String nombre) {
        this.name = nombre;
    }
    public abstract void joinTournament();
    public abstract void organizeTournament();
}
```

#### Clase PremiumMember
```java
public class PremiumMember extends Member {
    public PremiumMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

    @Override
    public void organizeTournament() {
        System.out.print("...");
    }

}
```

#### Clase VipMember
```java
public class VipMember extends Member {

    public VipMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

    @Override
    public void organizeTournament() {
        System.out.print("...");
    }

}
```

#### Clase FreeMember
```java
public class FreeMember extends Member{

    public FreeMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

    @Override
    public void organizeTournament() {
        System.out.print("No se puede realizar torneos");
    }

}
```

### Codigo Refactorizado

#### Clase Member
Primero removemos de nuestra clase Members el metodo `organizeTournament()`.
```java
public abstract class Member {
    private final String name;
    public Member(String nombre) {
        this.name = nombre;
    }
    public abstract void joinTournament();
    
}
```

#### Clase TournamentStaff
Luego creamos una interface TournamentStaff que implemente el metodo `organizeTournament()`.
```java
public interface TournamentStaff {

    void organizeTournament();

}
```

#### Clase PremiumMember
Implementamos el metodo `organizeTournament()` en las clases que si pueden realizar torneos.
```java
public class PremiumMember extends Member implements TournamentStaff {
    public PremiumMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

    @Override
    public void organizeTournament() {
        System.out.print("...");
    }

}
```

#### Clase VipMember
```java
public class VipMember extends Member implements TournamentStaff{

    public VipMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

    @Override
    public void organizeTournament() {
        System.out.print("...");
    }

}
```

#### Clase FreeMember
De esta forma podemos tener la clase `FreeMember` que no implemente la interface `TournamentStaff`.
```java
public class FreeMember extends Member{

    public FreeMember(String nombre) {
        super(nombre);
    }

    @Override
    public void joinTournament() {
        System.out.print("...");
    }

}
```

Con esto podemos obtener un codigo compatible por el principio de **sustitucion de Liskov (LSP)**, ya que podemos sustituir la clase padre por cualquiera de sus clases hijas sin que el programa se vea afectado.

## Pregunta 2

### Requisito 1: colocación de piezas

#### Historia de Usuario
Como jugador, quiero poder colocar una pieza en cualquier espacio vacio del tablero de 3x3 para poder jugar el juego.

#### Criterios de Aceptacion
```
AC 1.1 limites del tablero I
CUANDO una pieza se coloca en cualquier lugar fuera del eje x, 
ENTONCES el sistema lanza una RuntimeException.
```

```
AC 1.2 limites del tablero II
CUANDO una pieza se coloca en cualquier lugar fuera del eje y, 
ENTONCES el sistema lanza una RuntimeException.
```

```
AC 1.3 lugar ocupado
CUANDO una pieza se coloca en un espacio ocupado,
ENTONCES el sistema lanza una RuntimeException.
```

#### Pruebas Unitarias

##### Prueba - limites del tablero I
```java
@Test
void testRuntimeExceptionWhenXPositionOutOfRange() {
    Assertions.assertThrows(RuntimeException.class, () -> {
        Game game = new Game();
        game.makeMove(-1,1);
    });
}
```

##### Prueba - limites del tablero II
```java
@Test
void testRuntimeExceptionWhenYPositionOutOfRange() {
    Assertions.assertThrows(RuntimeException.class, () -> {
        Game game = new Game();
        game.makeMove(1,4);
    });
}
```

##### Prueba - lugar ocupado
```java
@Test
void testRuntimeExceptionWhenNotEmptyCell() {
    Assertions.assertThrows(RuntimeException.class, () -> {
        Game game = new Game();
        game.makeMove(1,1);
        game.makeMove(1,1);
    });
}
```

### Requisito 2: agregar soporte para dos jugadores

#### Historia de Usuario
Como jugador, quiero que el sistema determine que jugador debe jugar a continuación en el juego

#### Criterios de Aceptacion
```
AC 2.1 X juega primero
CUANDO inicia el juego el primer turno
ENTONCES debe de jugarlo el jugador X.
```

```
AC 2.2 O juega justo después de X
CUANDO el ultimo turno fue jugado por X,
ENTONCES debe cambiar al turno del jugador O.
```

```
AC 2.3 X juega justo después de O
CUANDO el ultimo turno fue jugado por O,
ENTONCES debe cambiar al turno del jugador X.
```

#### Pruebas Unitarias

##### Prueba - X juega primero
```java
@Test
void testPlayerXPlaysFirstTurn(){
    Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
}
```

##### Prueba - O juega justo después de X
```java
@Test
void testPlayerOTurnAfterPlayerX(){
    Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
    game.changeTurn();
    Assertions.assertEquals(game.getCurrentLetter(), Letter.NOUGHT);
}
```

##### Prueba - X juega justo después de O
```java
@Test
void testPlayerXTurnAfterPlayerO() {
    Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
    game.changeTurn();
    Assertions.assertEquals(game.getCurrentLetter(), Letter.NOUGHT);
    game.changeTurn();
    Assertions.assertEquals(game.getCurrentLetter(), Letter.CROSS);
}
```

### Requisito 3: agregar condiciones ganadoras

#### Historia de Usuario

Como jugador, quiero que el sistema determine si un jugador ha ganado el juego.

#### Criterios de Aceptacion

```
AC 3.1 por defecto no hay ganador
CUANDO no se cumple ninguna condicion ganadora,
ENTONCES no hay un ganador del juego.
```

```
AC 3.2 condicion ganadora I
CUANDO toda la linea horizontal esta ocupada por las piezas del jugador actual,
ENTONCES el jugador ha ganado el juego.
```

```
AC 3.3 condicion ganadora II
CUANDO toda la linea vertical esta ocupada por las piezas del jugador actual,
ENTONCES el jugador ha ganado el juego.
```

```
AC 3.4 condicion ganadora III
CUANDO toda la linea diagonal principal esta ocupada por las piezas del jugador actual,
ENTONCES el jugador ha ganado el juego.
```

```
AC 3.5 condicion ganadora IV
CUANDO toda la linea diagonal secundaria esta ocupada por las piezas del jugador actual,
ENTONCES el jugador ha ganado el juego.
```

#### Pruebas Unitarias

##### Prueba - por defecto no hay ganador
```java
@Test
void testGameInProgress(){
    game.makeMove(1,1);
    Assertions.assertEquals(GameState.PLAYING, game.getGameState());
}
```

##### Prueba - condicion ganadora I
```java
@Test
void testGameEndsWithHorizontalWin(){
    game.makeMove(0,0); // X
    game.makeMove(1,1); // O
    game.makeMove(0,1); // X
    game.makeMove(2,2); // O
    game.makeMove(0,2); // X
    Assertions.assertEquals(GameState.CROSS_WON, game.getGameState());
}
```


##### Prueba - condicion ganadora II
```java
@Test
void testGameEndsWithVerticalWin(){
    game.makeMove(0,0); // X
    game.makeMove(0,1); // O
    game.makeMove(0,2); // X
    game.makeMove(1,1); // O
    game.makeMove(2,2); // X
    game.makeMove(2,1); // O
    Assertions.assertEquals(GameState.NOUGHT_WON, game.getGameState());
}
```


##### Prueba - condicion ganadora III
```java
@Test
void testGameEndsWithPrimaryDiagonalWin(){
    game.makeMove(0,0); // X
    game.makeMove(0,1); // O
    game.makeMove(1,1); // X
    game.makeMove(0,2); // O
    game.makeMove(2,2); // X
    Assertions.assertEquals(GameState.CROSS_WON, game.getGameState());
}
```

##### Prueba - condicion ganadora IV
```java
@Test
void testGameEndsWithSecondaryDiagonalWin() {
    game.makeMove(0, 2); // X
    game.makeMove(0, 0); // O
    game.makeMove(1, 1); // X
    game.makeMove(1, 0); // O
    game.makeMove(2, 0); // X
    Assertions.assertEquals(GameState.CROSS_WON, game.getGameState());
}
```

### Requisito 4: condiciones de empate

#### Historia de Usuario
Como jugador, quiero que el sistema determine si el juego termina en empate.

#### Criterios de Aceptacion

```
AC 4.1 manejo de una situacion de empate
CUANDO no hay mas movimientos disponibles en el tablero y no se ha cumplido ninguna de las condiciones ganadoras,
ENTONCES el juego termina en un empate.
```

#### Pruebas Unitarias

##### Prueba - manejo de una situacion de empate
```java
@Test
void testGameEndsWithDraw(){
    game.makeMove(0,0); // X
    game.makeMove(1,1); // O
    game.makeMove(1,0); // X
    game.makeMove(2,0); // O
    game.makeMove(0,2); // X
    game.makeMove(0,1); // O
    game.makeMove(2,1); // X
    game.makeMove(2,2); // O
    game.makeMove(1,2); // X
    Assertions.assertEquals(GameState.DRAW, game.getGameState());
}
```

### Covertura de codigo JaCoCo

Se uso la guia del examen y se agrego al `build.graddle` las siguientes lineas de codigo:

```java
apply plugin: 'jacoco'
```

Lo que nos genero un build con un reporte de covertura de codigo, el cual se puede ver en la siguiente imagen:

![imagen covertura de codigo](/assets/coverage.png)

## Pregunta 3


## Pregunta 4

### ¿Qué son las pruebas efectivas y sistemáticas?

Las pruebas efectivas y sistematicas son pasos a seguir para generar un conjunto de casos de prueba efectivos que son lo suficientemente fuerte como para detectar los errores mas importantes mientras omitimos las pruebas que realmente no importan o no agregan valor.

- Utilizando los requerimientos del sistema
- Creando pruebas estructurales y codigo de cobertura
- Explorando las posibles propiedades del programa
- Realizando pruebas unitarias y de integracion

###

