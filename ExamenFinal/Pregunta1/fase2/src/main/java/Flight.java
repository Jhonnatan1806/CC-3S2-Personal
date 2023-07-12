import java.util.ArrayList; 
import java.util.Collections; 
import java.util.List; 

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
