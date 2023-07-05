package org.jhaner;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;

import java.util.List;

import java.sql.SQLException;

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