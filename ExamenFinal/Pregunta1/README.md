# TDD

- [TDD](#tdd)
  - [Fase 1](#fase-1)
    - [Preguntas](#preguntas)
    - [Codigo](#codigo)
    - [Fase 1.1](#fase-11)
    - [Fase 1.2](#fase-12)
  - [Fase 2](#fase-2)
    - [Preguntas](#preguntas-1)
    - [Fase 2.1](#fase-21)
    - [Fase 2.2](#fase-22)
    - [Fase 2.3](#fase-23)
    - [Fase 2.4](#fase-24)
    - [Fase 2.5](#fase-25)
  - [Fase 3](#fase-3)
    - [Pregunta](#pregunta)
  - [Fase 4](#fase-4)
    - [Pregunta](#pregunta-1)
  - [Fase 5](#fase-5)
    - [Pregunta](#pregunta-2)

## Fase 1

### Preguntas

Sigue la lógica comercial para un vuelo comercial y traduce eso escribiendo una prueba llamada AirportTest.

1. ¿Cuáles son los resultados de las pruebas con cobertura obtenidad?
2. ¿Puedes indicar algunas conclusiones de lo anterior, necesitamos refactorizar?

### Codigo

Codigo implementado en la fase 1.

AirportTest.java

```Java
public class AirportTest {

    @Test
    public void economyFlightTest(){
        Flight economyFlight = new Flight("1", "Economico");
        assertEquals("1", economyFlight.getId());
        assertEquals("Economico", economyFlight.getFlightType());
    }

    @Test
    public void businessFlightTest(){
        Flight businessFlight = new Flight("2", "Negocios");
        assertEquals("2", businessFlight.getId());
        assertEquals("Negocios", businessFlight.getFlightType());
    }

    @Test
    public void addPassengerTest(){
        Flight economyFlight = new Flight("1", "Economico");
        Passenger checha = new Passenger("Checha", false);
        economyFlight.addPassenger(checha);
        assertEquals(true, economyFlight.getPassengersList().contains(checha));

    }

    @Test
    public void removePassengerTest(){
        Flight economyFlight = new Flight("1", "Economico");
        Passenger checha = new Passenger("Checha", false);
        economyFlight.addPassenger(checha);
        Passenger lore = new Passenger("Lore", true);
        economyFlight.addPassenger(lore);
        economyFlight.removePassenger(checha);
        assertEquals(false, economyFlight.getPassengersList().contains(checha));
    }
}
```

### Fase 1.1

¿Cuáles son los resultados de las pruebas con cobertura obtenidad?.

Tenemos de resultados que las pruebas pasan correctamente, pero la cobertura es baja, solo del 66%.
Se entiende que no cubre la class Airport, ya que solo contiene el static main

```Bash
Airport.java: 0% methods, 0% lines coverage
Flight.java: 66% methods, 52% lines coverage
Passenger.java: 66% methods, 80% lines coverage
```

### Fase 1.2

¿Puedes indicar algunas conclusiones de lo anterior, necesitamos refactorizar?.

Si, es necesario refactorizar, ya que la clase Flight tiene un metodo que no se utiliza, y la clase Passenger tiene un atributo que no se utiliza.



## Fase 2

### Preguntas

1. La refactorización se logrará manteniendo la clase Flight base y para cada tipo condicional, agregando una clase separada para extender Flight. Debes cambiar addPassenger y  removePassenger a métodos abstractos y delegar su implementación a subclases. El campo flightType ya no es significativo y se eliminará.
2. Implementa una clase EconomyFlight que amplía Flight e implementa los métodos abstractos heredados addPassenger y removePassenger.
3. Implementa una clase BusinessFlight que amplía Flight e implementa los métodos abstractos heredados addPassenger y removePassenger.
4. La refactorización y los cambios de la API se propagan a la implementacion de las pruebas. ¿Cómo?.
5. ¿Cuál es el código de cobertura ahora?. ¿Ayudó la refactorización a la mejor calidad de código?

### Fase 2.1

La refactorización se logrará manteniendo la clase Flight base y para cada tipo condicional, agregando una clase separada para extender Flight. Debes cambiar addPassenger y  removePassenger a métodos abstractos y delegar su implementación a subclases. El campo flightType ya no es significativo y se eliminará.

Bien esto implicará que la clase Flight sea abstracta y que los métodos addPassenger y removePassenger sean abstractos, tambien se removio el atributo flightType.

Flight.java

```Java
public abstract class Flight {

    protected String id;
    protected List<Passenger> passengers = new ArrayList<Passenger>();

    public Flight(String id) {
        this.id = id;
    }

    public String getId() { 
        return id; 
    } 

    public List<Passenger> getPassengersList() { 
        return Collections.unmodifiableList(passengers); 
    }

    abstract boolean addPassenger(Passenger passenger);

    abstract boolean removePassenger(Passenger passenger);

}
```

### Fase 2.2

Implementa una clase EconomyFlight que amplía Flight e implementa los métodos abstractos heredados addPassenger y removePassenger.

Para esto se implemento la clase EconomyFlight que extiende de Flight y se implementaron los metodos abstractos heredados addPassenger y removePassenger.

EconomyFlight.java

```Java
public class EconomyFlight extends Flight {

    public EconomyFlight(String id) {
        super(id);
    }

    @Override
    public boolean addPassenger(Passenger passenger) {
        return passengers.add(passenger);
    }

    @Override
    public boolean removePassenger(Passenger passenger) {
        return passengers.remove(passenger);
    }
}
```

### Fase 2.3

Implementa una clase BusinessFlight que amplía Flight e implementa los métodos abstractos heredados addPassenger y removePassenger.

De forma similar a la clase EconomyFlight se implemento la clase BusinessFlight que extiende de Flight y se implementaron los metodos abstractos heredados addPassenger y removePassenger.

BusinessFlight.java

```Java
public class BusinessFlight extends Flight {

    public BusinessFlight(String id) {
        super(id);
    }

    @Override
    public boolean addPassenger(Passenger passenger) {
        return passengers.add(passenger);
    }

    @Override
    public boolean removePassenger(Passenger passenger) {
        if(passenger.isVip()){
            return false;
        }
        return passengers.remove(passenger);
    }
}
```

### Fase 2.4

La refactorización y los cambios de la API se propagan a la implementacion de las pruebas. ¿Cómo?.

Los cambios se propagan a la implementacion de las pruebas, ya que se tuvo que cambiar la implementacion de los metodos addPassenger y removePassenger, ya que ahora son abstractos, y se tuvo que cambiar la implementacion de los metodos addPassenger y removePassenger de las clases EconomyFlightTest y BusinessFlightTest.

AirportTest.java

```Java
public class AirportTest {

    @Test
    public void economyFlightTest(){
        Flight economyFlight = new EconomyFlight("1");
        assertEquals("1", economyFlight.getId());
    }

    @Test
    public void businessFlightTest(){
        Flight businessFlight = new BusinessFlight("2");
        assertEquals("2", businessFlight.getId());
    }

    @Test
    public void addPassengerTest(){
        Flight economyFlight = new EconomyFlight("1");
        Passenger checha = new Passenger("Checha", false);
        economyFlight.addPassenger(checha);
        assertEquals(true, economyFlight.getPassengersList().contains(checha));

    }

    @Test
    public void removePassengerTest(){
        Flight economyFlight = new EconomyFlight("1");
        Passenger checha = new Passenger("Checha", false);
        economyFlight.addPassenger(checha);
        Passenger lore = new Passenger("Lore", true);
        economyFlight.addPassenger(lore);
        economyFlight.removePassenger(checha);
        assertEquals(false, economyFlight.getPassengersList().contains(checha));
    }
}
```

### Fase 2.5

¿Cuál es el código de cobertura ahora?. ¿Ayudó la refactorización a la mejor calidad de código?

```Bash
Airport.java: 0% methods, 0% lines coverage
BusinessFlight.java: 100% methods, 80% lines coverage
EconomyFlight.java: 66% methods, 66% lines coverage
Flight.java: 100% methods, 100% lines coverage
Passenger.java: 66% methods, 80% lines coverage
```

Si, la refactorizacion ayudo a la mejor calidad del codigo, ya que se elimino codigo que no se utilizaba, y se mejoro la implementacion de los metodos addPassenger y removePassenger, ya que ahora se implementan en las clases EconomyFlight y BusinessFlight, y no en la clase Flight.



## Fase 3

### Pregunta

Utiliza la clase AirportTest refactorizada antes de pasar al trabajo para el vuelo premium en el código desarrollado como mejora a tus resultados. Ver el codigo entregado en la evaluación. 

## Fase 4

### Pregunta

Realiza la implementación de la clase PremiumFlight y su lógica. Debes crear PremiumFlight como una subclase de Flight y sobreescribir los métodos addPassenger y removePassenger, pero actúan como stubs: no hacen nada y simplemente devuelven false. El estilo TDD de trabajo implica crear primero las pruebas y luego la lógica de negocios.

Ahora implementa las pruebas de acuerdo con la lógica comercial de vuelos premium:
1. Se agrega un pasajero a un vuelo premium, solo si es pasajeros VIP
2. Cualquier tipo de pasajero puede ser eliminado de un vuelo premium.

## Fase 5

### Pregunta