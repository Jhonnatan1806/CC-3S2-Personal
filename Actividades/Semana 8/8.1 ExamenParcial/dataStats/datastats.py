import math

def remove_dollar_sign(salario):
    return int(salario.replace('$', ''))

class NDataStats:
    
    def __init__(self, data):
        self.data = data

    @property
    def _edades(self):
        return [d['edad'] for d in self.data]
    
    @property
    def _salarios(self):
        return [remove_dollar_sign(d['salario']) for d in self.data]
    
    def _promedio_floor(self, suma_de_numeros):
        return math.floor(suma_de_numeros / len(self.data))
    
    def _salario_promedio(self):
        return self._promedio_floor(sum(self._salarios))
    
    def _edad_promedio(self):
        return self._promedio_floor(sum(self._edades))

class DataStats:
    
    def stats(self, data, iedad, isalario):
        nds = NDataStats(data)
        return nds.stats(iedad, isalario)
