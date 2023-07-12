//completa
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

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
