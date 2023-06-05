import org.example.NumerosAleatorios;

public class StubNumeroAleatorio implements NumerosAleatorios {
    @Override
    public int nextInt(int upperBoundExclusive) {
        return 4;
    }
}