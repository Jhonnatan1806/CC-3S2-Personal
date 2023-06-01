import json
from datastats import NDataStats

test_data = [
    {
        "id": 1,
        "nombre": "Irene",
        "apodo": "Lara",
        "edad": 68,
        "salario": "$27888"
    },
    {
        "id": 2,
        "nombre": "Claudio",
        "apodo": "Avila",
        "edad": 49,
        "salario": "$67137"
    },
    {
        "id": 3,
        "nombre": "Tomo",
        "apodo": "Frugs",
        "edad": 70,
        "salario": "$70472"
    }
]

def test_init():
    ds = NDataStats(test_data)
    assert ds.data == test_data

def test_edades():
    ds = NDataStats(test_data)
    assert ds._edades == [68, 49, 70]

def test_salario_promedio():
    ds = NDataStats(test_data)
    assert ds._salario_promedio() == 55165

def test_edad_promedio():
    ds = NDataStats(test_data)
    assert ds._edad_promedio() == 62

# Pruebas
test_init()
test_edades()
test_salario_promedio()
test_edad_promedio()