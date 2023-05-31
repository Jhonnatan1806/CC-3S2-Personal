# Prueba de entrada

## Pregunta 1

```c++
#include <cstdio>
using namespace std;

int C[101], X[1001];
int nMonedas;

int main() {
int k, dinero, halfdinero;

dinero = 0;
scanf("%d", &nMonedas);
for (int i = 0; i < nMonedas; i++) {
    scanf("%d", &C[i]);
    dinero += C[i];
}

halfdinero = dinero / 2;
X[0] = 1;
for (int i = 0; i < nMonedas; i++) {
    k = C[i];
    for (int j = halfdinero; j >= k; j--) {
    X[j] |= X[j - k];
    }
}

for (int i = halfdinero; i >= 0; i--) {
    if (X[i] != 0) {
    printf("%d %d\n", i, dinero - i);
    break;
    }
}

return 0;
}
```

## Pregunta 2

```c++
#include <iostream>
#include <string>
#include <vector>
using namespace std;

class TrieNode {
 public:
  bool isWord;
  vector<int> ref;

  TrieNode(bool isWord = false) {
    this->isWord = isWord;
    ref = vector<int>(26, -1);
  }
};

int n, nRows, nColumns;
vector<string> puzzle;
vector<TrieNode> trie;

int encuentraPalabras(int, int, int, int);
void agregaPalabra(int, string, int);

int main() {
  string word, puzzleRow;
  int palabraEncontrada;

  trie.push_back(TrieNode());
  // Lee el diccionario y agrega palabras para probar
  cin >> n >> nRows >> nColumns;
  for (int i = 0; i < n; i++) {
    cin >> word;
    agregaPalabra(0, word, 0);
  }

  //  Lee rompecabezas de palabras
  for (int i = 0; i < nRows; i++) {
    cin >> puzzleRow;
    puzzle.push_back(puzzleRow);
  }

  // Por cada letra inicia una búsqueda en las 8 direcciones
  for (int i = 0; i < nRows; i++) {
    for (int j = 0; j < nColumns; j++) {
      palabraEncontrada = encuentraPalabras(i, j, -1, 0);
      palabraEncontrada += encuentraPalabras(i, j, 0, 1);
      palabraEncontrada += encuentraPalabras(i, j, 1, 0);
      palabraEncontrada += encuentraPalabras(i, j, 0, -1);
      palabraEncontrada += encuentraPalabras(i, j, -1, 1);
      palabraEncontrada += encuentraPalabras(i, j, 1, 1);
      palabraEncontrada += encuentraPalabras(i, j, 1, -1);
      palabraEncontrada += encuentraPalabras(i, j, -1, -1);

      // Imprime la ubicación de la letra inicial y cuántas palabras se encontraron
      if (palabraEncontrada > 0) {
        cout << "(" << i << "," << j << "): " << palabraEncontrada << "\n";
      }
    }
  }

  return 0;
}

int encuentraPalabras(int row, int col, int dirY, int dirX) {
  int nWords = 0;
  int k = 0;

  while (row >= 0 && row < nRows && col >= 0 && col < nColumns) {
    int p = puzzle[row][col] - 'A';
    if (trie[k].ref[p] != -1) {
      k = trie[k].ref[p];
    } else {
      break;
    }

    if (trie[k].isWord) {
      nWords++;
    }
    row += dirY;
    col += dirX;
  }

  return nWords;
}

void agregaPalabra(int nodeId, string word, int pos) {
  if (pos == word.length()) {
    return;
  }

  int k = trie[nodeId].ref[word[pos] - 'A'];
  if (k == -1) {
    k = trie.size();
    trie[nodeId].ref[word[pos] - 'A'] = k;
    trie.push_back(TrieNode());
  }

  if (pos == word.length() - 1) {
    trie[k].isWord = true;
  }
  
  agregaPalabra(k, word, pos + 1);
}
```