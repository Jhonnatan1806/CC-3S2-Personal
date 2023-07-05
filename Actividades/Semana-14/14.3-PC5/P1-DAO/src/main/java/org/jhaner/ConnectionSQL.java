import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionSQL {
    String driverClassName = "com.mysql.jdbc.Driver";
    String connectionUrl = "jdbc:mysql://localhost:3306/factura";
    String dbUser = "root";
    String dbPwd = "123456";

    private static ConnectionSQL connectionSQL = null;

    private ConnectionSQL() {
        try {
            Class.forName(driverClassName);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public Connection getConnection() throws SQLException {
        Connection conn = null;
        conn = DriverManager.getConnection(connectionUrl, dbUser, dbPwd);
        return conn;
    }

    public static ConnectionSQL getInstance() {
        if (connectionSQL == null) {
            connectionSQL = new ConnectionSQL();
        }
        return connectionSQL;
    }
}