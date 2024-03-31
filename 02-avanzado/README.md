### Seccion avanzada con WebPack

* Lo primero que debemos de hacer
> npm i

* Luego, ejecutamos el proyecto
> npm start

### Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el `8081`, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el `package.json`

> "start": "webpack serve --mode development --open --port=8081"


### Otros detalles

Para los `decoradores`, descomentar lo siguiente del tsconfig.json 
```
    "esModuleInterop": true, <-- poner la coma. como es el ultimo, no tiene                    
    'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    "experimentalDecorators": true, <-- descomentar esta linea        
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  }
```