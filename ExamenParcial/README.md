## Pregunta 1

### Codigo sin refactorizar

Clase Member
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

Clase PremiumMember
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

Clase VipMember
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

Clase FreeMember
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

Removemos de nuestra clase Members el metodo organizeTournament()

Clase Member
```java
public abstract class Member {
    private final String name;
    public Member(String nombre) {
        this.name = nombre;
    }
    public abstract void joinTournament();
    
}
```

Creamos una interface OrganizeEvents que implemente el metodo organizeTournament()

Clase OrganizeEvents
```java
public interface OrganizeEvents {

    void organizeTournament();

}
```

Clase PremiumMember
```java
public class PremiumMember extends Member implements OrganizeEvents {
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

Clase VipMember
```java
public class VipMember extends Member implements OrganizeEvents{

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

Clase FreeMember
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

---

## Pregunta 2

## Requisito 1: colocación de piezas

Se puede colocar una pieza en cualquier espacio vacío de un tablero de 3×3.

```
AC 1.1
CUANDO una pieza se coloca en cualquier lugar fuera del eje x, 
DEBE lanzar una RuntimeException
```

```
AC 1.2
CUANDO una pieza se coloca en cualquier lugar fuera del eje y, 
DEBE lanzar una RuntimeException
```

```
AC 1.3
CUANDO una pieza se coloca en un espacio ocupado,
DEBE lanzar una RuntimeException
```


## Requisito 2: agregar soporte para dos jugadores

Implementar metodo para saber qué jugador debería jugar a continuación


- Si el último turno fue jugado por X, entonces el próximo turno debe ser jugado por O
- Si el último turno fue jugado por O, entonces el próximo turno debe ser jugado por X

```
AC 2.1
CUANDO inicie el juego el primer turno
DEBE de jugarlo el jugador X.
```

```
AC 2.2
CUANDO el ultimo turno fue jugado por X,
DEBE cambiar al turno del jugador O
```

```
AC 2.3
CUANDO el ultimo turno fue jugado por O,
DEBE cambiar al turno del jugador X
```


## Pregunta 3


## Pregunta 4

### ¿Qué son las pruebas efectivas y sistemáticas?

Las pruebas efectivas y sistematicas son pasos a seguir para generar un conjunto de casos de prueba efectivos que son lo suficientemente fuerte como para detectar los errores mas importantes mientras omitimos las pruebas que realmente no importan o no agregan valor.

- Utilizando los requerimientos del sistema
- Creando pruebas estructurales y codigo de cobertura
- Explorando las posibles propiedades del programa
- Realizando pruebas unitarias y de integracion

