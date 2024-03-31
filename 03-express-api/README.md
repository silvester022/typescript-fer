### Node + TypeScript - Apps no nativas con TS

1. Inicializamos el package.json
> npm init

2. Instalamos express 
> npm i express --save

3. Cambiamos la importacion de express
```
const express = require('express') <- antes

import express from 'express' <- despues

* Si muestra un error, este sugerira instalar:
npm i --save-dev @types/express
```