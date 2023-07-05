package org.jhaner;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

    private static final String DRIVER_CLASS_NAME = "org.postgresql.Driver";
    private static final String CONNECTION_URL = "jdbc:postgresql://localhost:5432/cc3s2";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "123456";

    private static ConnectionFactory instance;

    private ConnectionFactory() {
        try {
            Class.forName(DRIVER_CLASS_NAME);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("Failed to load the JDBC driver", e);
        }
    }

    public static ConnectionFactory getInstance() {
        if (instance == null) {
            instance = new ConnectionFactory();
        }
        return instance;
    }

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(CONNECTION_URL, DB_USER, DB_PASSWORD);
    }
}