package org.jhaner;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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