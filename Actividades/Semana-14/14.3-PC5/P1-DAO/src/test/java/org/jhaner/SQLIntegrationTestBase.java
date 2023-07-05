package org.jhaner;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

import java.sql.SQLException;

public abstract class SQLIntegrationTestBase {

    protected FacturaDAO facturaDAO;

    @BeforeEach
    void openConnectionAndCleanup(){
        facturaDAO = new FacturaDAO();
        facturaDAO.resetDatabase();
    }

    @AfterEach
    void closeConnection() throws SQLException {
        if (facturaDAO != null) {
            facturaDAO.closeConnection();
        }
    }
}
