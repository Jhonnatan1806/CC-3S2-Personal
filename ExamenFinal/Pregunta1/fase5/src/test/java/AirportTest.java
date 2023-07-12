//completa
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class AirportTest {

    @Nested
    class EconomyFlightTest {
        private Flight economyFlight;
        private Passenger checha;
        private Passenger lore;

        @BeforeEach
        void setUp() {
            economyFlight = new EconomyFlight("1");
            checha = new Passenger("Checha", false);
            lore = new Passenger("Lore", true);
        }

        @Nested
        class RegularPassenger {

            @Test
            public void testEconomyFlightRegularPassenger() {
                assertAll("Verifica todas las condiciones para un pasajero regular y un vuelo economico",
                        () -> assertEquals("1", economyFlight.getId()),
                        () -> assertEquals(true, economyFlight.addPassenger(checha)),
                        () -> assertEquals(1, economyFlight.getPassengersList().size()),
                        () -> assertEquals("Checha", economyFlight.getPassengersList().iterator().next().getName()),
                        () -> assertEquals(true, economyFlight.removePassenger(checha)),
                        () -> assertEquals(0, economyFlight.getPassengersList().size())
                );
            }
        }

        @Nested
        class VipPassenger {
            @Test
            public void testEconomyFlightVipPassenger() {
                assertAll("Verifica todas las condiciones para un pasajero VIP y un vuelo economico",
                        () -> assertEquals("1", economyFlight.getId()),
                        () -> assertEquals(true, economyFlight.addPassenger(lore)),
                        () -> assertEquals(1, economyFlight.getPassengersList().size()),
                        () -> assertEquals("Lore", economyFlight.getPassengersList().iterator().next().getName()),
                        () -> assertEquals(false, economyFlight.removePassenger(lore)),
                        () -> assertEquals(1, economyFlight.getPassengersList().size())
                );

            }
        }
    }

    @Nested
    class BusinessFlightTest {
        private Flight businessFlight;
        private Passenger checha;
        private Passenger lore;

        @BeforeEach
        void setUp() {
            businessFlight = new BusinessFlight("2");
            checha = new Passenger("Checha", false);
            lore = new Passenger("Lore", true);
        }

        @Nested
        class RegularPassenger {

            @Test
            public void testBusinessFlightRegularPassenger() {
                assertAll("Verifica todas las condiciones para un pasajero regular y un vuelo de negocios",
                        () -> assertEquals(false, businessFlight.addPassenger(checha)),
                        () -> assertEquals(0, businessFlight.getPassengersList().size()),
                        () -> assertEquals(false, businessFlight.removePassenger(checha)),
                        () -> assertEquals(0, businessFlight.getPassengersList().size())
                );
            }
        }

        @Nested
        class VipPassenger {

            @Test
            public void testBusinessFlightVipPassenger() {
                assertAll("Verifica todas las condiciones para un pasajero VIP y un vuelo de negocios",
                        () -> assertEquals(true, businessFlight.addPassenger(lore)),
                        () -> assertEquals(1, businessFlight.getPassengersList().size()),
                        () -> assertEquals(false, businessFlight.removePassenger(lore)),
                        () -> assertEquals(1, businessFlight.getPassengersList().size())
                );
            }
        }
    }

    @Nested
    class PremiumFlightTest {
        private Flight premiumFlight;
        private Passenger checha;
        private Passenger lore;

        @BeforeEach
        void setUp() {
            premiumFlight = new PremiumFlight("3");
            checha = new Passenger("Checha", false);
            lore = new Passenger("Lore", true);
        }

        @Nested
        class RegularPassenger {

            @Test
            public void testPremiumFlightRegularPassenger() {
                assertAll("Verifica todas las condiciones para un pasajero regular y un vuelo premium",
                        () -> assertEquals(false, premiumFlight.addPassenger(checha)),
                        () -> assertEquals(0, premiumFlight.getPassengersList().size()),
                        () -> assertEquals(false, premiumFlight.removePassenger(checha)),
                        () -> assertEquals(0, premiumFlight.getPassengersList().size())
                );
            }
        }

        @Nested
        class VipPassenger {

            @Test
            public void testPremiumFlightVipPassenger() {
                assertAll("Verifica todas las condiciones para un pasajero VIP y un vuelo premium",
                        () -> assertEquals(true, premiumFlight.addPassenger(lore)),
                        () -> assertEquals(1, premiumFlight.getPassengersList().size()),
                        () -> assertEquals(true, premiumFlight.removePassenger(lore)),
                        () -> assertEquals(0, premiumFlight.getPassengersList().size())
                );
            }
        }
    }
}
