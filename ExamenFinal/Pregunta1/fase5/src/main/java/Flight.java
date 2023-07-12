import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public abstract class Flight {

    protected String id;

    protected Set<Passenger> passengers = new HashSet<Passenger>();

    public Flight(String id) {
        this.id = id;
    }

    public String getId() { 
        return id; 
    } 

    public Set<Passenger> getPassengersList() {
        return Collections.unmodifiableSet(passengers);
    }

    abstract boolean addPassenger(Passenger passenger);

    abstract boolean removePassenger(Passenger passenger);

} 
