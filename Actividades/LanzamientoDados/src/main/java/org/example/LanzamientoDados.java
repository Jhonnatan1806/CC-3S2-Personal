package org.example;
import java.util.random.RandomGenerator;
public class LanzamientoDados{
    private final int NUMERO_DE_LADOS = 6;
   //private final RandomGenerator rnd = RandomGenerator.getDefault();

    // instanciamos la interface NumerosAlatorios
    private final NumerosAleatorios rnd ;

    // el constructor recibe el pseudonumero aleatorio
    public LanzamientoDados(NumerosAleatorios r){
        this.rnd = r;
    }
    public String asText() {
        int lanzado = rnd.nextInt(NUMERO_DE_LADOS) + 1;
        return String.format("Sacastes un %d", lanzado);
    }
}
