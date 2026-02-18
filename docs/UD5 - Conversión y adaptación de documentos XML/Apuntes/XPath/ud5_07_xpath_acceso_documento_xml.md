# Acceso a datos de otro documento XML con XPath

Además de acceder a los datos del fichero XML con el que se está trabajando directamente, es útil poder acceder a los datos de otros ficheros XML. Para ello, utilizaremos la función document(), pero dicha función NO es del lenguaje XPath, sino que pertenece a XSLT.

Esta función puede admitir dos argumentos diferentes:

- Un URI.
- Un nodo.

Cuando se utiliza un URI como argumento, la función devuelve el elemento raíz del documento XML que se localiza en el URI especificado:

```xpath
document(URI)
```

Por otro lado, si se utiliza un nodo como argumento, lo que devuelve la función es el conjunto de nodos cuya raíz es el nodo dado:

```xpath
document(nodo)
```
