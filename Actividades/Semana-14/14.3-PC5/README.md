# Practica Calificada 5

Autor: Jhonnatan Espinoza Rojas

Fecha: 05/07/2023

## Pregunta 1 - DAO

Clase Factura

```java
public class Factura {
    public final String cliente;
    public final int valor;
    public Factura(String cliente, int valor) {
        this.cliente = cliente;
        this.valor = valor;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Factura factura = (Factura) o;
        return valor == factura.valor &&
                cliente.equals(factura.cliente);
    }
    @Override
    public int hashCode() {
        return Objects.hash(cliente, valor);
    }
    @Override
    public String toString() {
        return "Factura{" +
                "cliente='" + cliente + '\'' +
                ", valor=" + valor +
                '}';
    }

    public int getValor() {
        return this.valor;
    }

    public String getCliente(){
        return this.cliente;
    }
}
```

Clase FacturaDAO

```Java
public class FacturaDAO{

    Connection connection = null;
    PreparedStatement ptmt = null;
    ResultSet resultSet = null;

    public FacturaDAO() throws SQLException{
        this.connection = getConnection();
    }

    public Connection getConnection() throws SQLException {
        Connection conn;
        conn = ConnectionFactory.getInstance().getConnection();
        return conn;
    }

    public void closeConnection() throws SQLException {
        if (resultSet != null)
            resultSet.close();
        if (ptmt != null)
            ptmt.close();
        if (connection != null)
            connection.close();
    }

    public void cleanTable() {
        try {
            String dropTableQuery = "DROP TABLE IF EXISTS facturas;";
            PreparedStatement dropStatement = connection.prepareStatement(dropTableQuery);
            dropStatement.executeUpdate();
            System.out.println("Table dropped successfully");
            String createTableQuery = "CREATE TABLE facturas (nombre VARCHAR(50), valor int);";
            PreparedStatement createStatement = connection.prepareStatement(createTableQuery);
            createStatement.executeUpdate();
            System.out.println("Table created successfully");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void guardar(Factura factura) {
        try {
            String queryString = "INSERT INTO factura (nombre, valor) VALORES(?,?)";
            ptmt = connection.prepareStatement(queryString);
            ptmt.setString(1, factura.getCliente());
            ptmt.setInt(2, factura.getValor());
            ptmt.executeUpdate();
            System.out.println("Data Added Successfully");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Factura> todo() {
        List facturaList = new ArrayList<Factura>();
        try {
            String queryString = "SELECT * FROM factura";
            ptmt = connection.prepareStatement(queryString);
            resultSet = ptmt.executeQuery();
            while (resultSet.next()) {
                String cliente = resultSet.getString("nombre");
                int valor = resultSet.getInt("valor");
                Factura factura = new Factura(cliente, valor);
                facturaList.add(factura);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return facturaList;
    }

    public List<Factura> todosConAlMenos(int value) {
        List facturaList = new ArrayList<Factura>();
        try {
            String queryString = "SELECT * FROM factura WHERE " + value + " >= ?";
            ptmt = connection.prepareStatement(queryString);
            resultSet = ptmt.executeQuery();
            while (resultSet.next()) {
                String cliente = resultSet.getString("nombre");
                int valor = resultSet.getInt("valor");
                Factura factura = new Factura(cliente, valor);
                facturaList.add(factura);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return facturaList;
    }
}
```

Clase FacturaDAOIntegracionTest

```Java
class FacturaDAOIntegracionTest {

    FacturaDAO facturaDAO = null;

    @BeforeEach
    void openConnectionAndCleanup() throws SQLException {
        facturaDAO = new FacturaDAO();
        facturaDAO.cleanTable();
    }

    @AfterEach
    void closeConnection() throws SQLException {
        if(facturaDAO != null){
            facturaDAO.closeConnection();
        }
    }

    @Test
    void guardar() {
        Factura factura = new Factura("Jhonnatan", 100);
        facturaDAO.guardar(factura);
        List<Factura> facturas = facturaDAO.todo();
        assertEquals(1, facturas.size());
        assertEquals(factura, facturas.get(0));
    }

    @Test
    void todo() {
        Factura factura1 = new Factura("Jhonnatan", 100);
        Factura factura2 = new Factura("Jhonnatan", 200);
        Factura factura3 = new Factura("Jhonnatan", 300);
        facturaDAO.guardar(factura1);
        facturaDAO.guardar(factura2);
        facturaDAO.guardar(factura3);
        List<Factura> facturas = facturaDAO.todo();
        assertEquals(3, facturas.size());
        assertEquals(factura1, facturas.get(0));
        assertEquals(factura2, facturas.get(1));
        assertEquals(factura3, facturas.get(2));
    }

    @Test
    void todosConAlMenos() {
        Factura factura1 = new Factura("Jhonnatan", 100);
        Factura factura2 = new Factura("Jhonnatan", 200);
        Factura factura3 = new Factura("Jhonnatan", 300);
        facturaDAO.guardar(factura1);
        facturaDAO.guardar(factura2);
        facturaDAO.guardar(factura3);
        List<Factura> facturas = facturaDAO.todosConAlMenos(200);
        assertEquals(2, facturas.size());
        assertEquals(factura2, facturas.get(0));
        assertEquals(factura3, facturas.get(1));
    }
}
```