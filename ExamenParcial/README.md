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

## Requisito 1: colocación de piezas

### Historia de Usuario
Como jugador, quiero poder colocar una pieza en cualquier espacio vacio del tablero de 3x3 para poder jugar el juego.

### Criterios de Aceptacion
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

### Pruebas Unitarias

#### Prueba - limites del tablero I
```java
@Test
void testRuntimeExceptionWhenXPositionOutOfRange() {
    Assertions.assertThrows(RuntimeException.class, () -> {
        Game game = new Game();
        game.makeMove(-1,1,Cell.CROSS);
    });
}
```

#### Prueba - limites del tablero II
```java
@Test
void testRuntimeExceptionWhenYPositionOutOfRange() {
    Assertions.assertThrows(RuntimeException.class, () -> {
        Game game = new Game();
        game.makeMove(1,4,Cell.CROSS);
    });
}
```

#### Prueba - lugar ocupado
```java
@Test
void testRuntimeExceptionWhenNotEmptyCell() {
    Assertions.assertThrows(RuntimeException.class, () -> {
        Game game = new Game();
        game.makeMove(1,4,Cell.CROSS);
    });
}
```

## Requisito 2: agregar soporte para dos jugadores

### Historia de Usuario
Como jugador, quiero que el sistema determine que jugador debe jugar a continuación en el juego

### Criterios de Aceptacion
```
AC 2.1 X juega primero
CUANDO inicia el juego el primer turno
ENTONCES debe de jugarlo el jugador X.
```

```
AC 2.2 O juego justo después de X
CUANDO el ultimo turno fue jugado por X,
ENTONCES debe cambiar al turno del jugador O.
```

```
AC 2.3 X juega justo después de O
CUANDO el ultimo turno fue jugado por O,
ENTONCES debe cambiar al turno del jugador X.
```

### Pruebas Unitarias

## Requisito 3: determinar el ganador

## Pregunta 3


## Pregunta 4

### ¿Qué son las pruebas efectivas y sistemáticas?

Las pruebas efectivas y sistematicas son pasos a seguir para generar un conjunto de casos de prueba efectivos que son lo suficientemente fuerte como para detectar los errores mas importantes mientras omitimos las pruebas que realmente no importan o no agregan valor.

- Utilizando los requerimientos del sistema
- Creando pruebas estructurales y codigo de cobertura
- Explorando las posibles propiedades del programa
- Realizando pruebas unitarias y de integracion

