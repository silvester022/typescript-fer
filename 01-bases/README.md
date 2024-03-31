# TypeScript

## Instalaciones realizadas

Globally Installing TypeScript
> npm i -g typescript

### Otros detalles

Crear el tsconfig.json
> tsc --init

Transpilar un archivo `ts -> js`
- Posicionar la consola en el archivo .ts
- Ejecutar `tsc name-file.ts` <- poner el nombre del archivo, .ts es opcional

Transpilar todos los archivos
> tsc <- convierte todos los *.ts -> *.js

Modo watch
> tsc --watch / -w

### Para hacer lo siguiente, es necesario tener corriendo el `tsc -w`

Cuando se transpila un archivo .ts a .js, y digamos, este tiene un error, el navegador no nos dira en que linea del archivo .ts esta el error.
Por tanto...

1. Para ver la línea de error en el archivo .ts (en el navegador)
- En el tsconfig.json, descomentar `"sourceMap": true,`
- Se creara un archivo .map (no es necesario cambiar la referencia en el index.html)

2. Para remover los comentarios del archivo .ts, que estan en el .js
- En el tsconfig.json, descomentar `"removeComments": true,`
- Actualizar el navegador

3. Incluir/excluir carpetas/archivos. Agregar lo soguiente
```
    }, <- llave final de cierre
  "exclude": [ <- se agrego
    "node_modules" <- se puso node_modules a modo de ejemplo. Por defecto, ts lo ignora
  ],
  "include": [ <- se coloca de donde se deben buscar los archivos .ts
    "nombre-carpeta/"
  ]
```

### Crear un solo archivo .js.map y mantener las referencias de los archivos .ts

1. Dentro del tsconfig.json
- Descomentar `"outFile": "./main.js <- contendra todo lo resultante de los archivos .ts",`
- Cambiar el module `"module": "AMD",`

2. Si el .js (en este caso, main.js) no tiene nada, verificar el include
```
  ,
  "exclude": [
    "node_modules" <- esto es opcional, ts lo ignora por defecto
  ],
  "include": [
    "nombre-carpeta/"
  ]
}
```