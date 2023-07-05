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
        return this.cliente
    }
}
```

Clase FacturaDAO

```Java
public class FacturaDAO{

    Connection connection = null;
    PreparedStatement ptmt = null;
    ResultSet resultSet = null;

    private Connection getConnection() throws SQLException {
        Connection conn;
        conn = ConnectionFactory.getInstance().getConnection();
        return conn;
    }

    public void guardar(Factura factura) {
    try {
            String queryString = "INSERT INTO factura (nombre, valor) VALORES(?,?)";
            connection = getConnection();
            ptmt = connection.prepareStatement(queryString);
            ptmt.setString(1, factura.getCliente());
            ptmt.setInt(2, studentBean.getValor());
            ptmt.executeUpdate();
            System.out.println("Data Added Successfully");
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (ptmt != null)
                    ptmt.close();
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }


    public List<Factura> todo() {
        ArrayList facturaList = new List<Factura>();
        try {
            String queryString = "SELECT * FROM factura";
            connection = getConnection();
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
        } finally {
            try {
                if (resultSet != null)
                    resultSet.close();
                if (ptmt != null)
                    ptmt.close();
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return facturaList;
    }

    public List<Factura> todosConAlMenos(int valor) {
        ArrayList facturaList = new List<Factura>();
        try {
            String queryString = "SELECT * FROM factura WHERE " + valor + " >= ?";
            connection = getConnection();
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
        } finally {
            try {
                if (resultSet != null)
                    resultSet.close();
                if (ptmt != null)
                    ptmt.close();
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return facturaList;
    }
}
```

Clase FacturaDAOIntegracionTest

```Java

public class FacturaDAOIntegracionTest{
    
}

```