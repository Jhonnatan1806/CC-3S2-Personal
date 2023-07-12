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
        Flight businessFlight = new BusinessFlight("2");
        Passenger checha = new Passenger("Checha", false);
        businessFlight.addPassenger(checha);
        Passenger lore = new Passenger("Lore", true);
        businessFlight.addPassenger(lore);
        businessFlight.removePassenger(checha);
        assertEquals(false, businessFlight.getPassengersList().contains(checha));
    }
}
