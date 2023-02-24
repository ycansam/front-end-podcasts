
#  Front-End Aplicación de Podcasts de Itunes

Esta pequeña aplicacion permite a los usuarios visualizar un top de podcasts actualizados de la aplicación de Itunes. Estos podcasts se pueden visualizar al entrar en ellos, ver los ultimos 200 episodios, ver uno de estos con su descripcion y reproducirlo.

La aplicacion esta desarrollada en ReactJS con NextJS en typescript.


## Características y Funcionalidades

- #### Vista Principal
    -  Lista de 100 Podcasts
    -  Solicitud de la informacion después de 1 dia
    -  Filtrado de los podcasts por Nombre o Autor 
    -  Navegación a un podcast
- #### Detalle de un podcast   
    -  Muestra su información
    -  Solicitud de la informacion después de 1 dia
    -  Navegacion a un episodio
- #### Detalle de un episodio
    -  Muestra su información
    -  Reproducir, pausar, mutear el audio.
- #### Cabezera
    -  Control de carga del contenido



## Requerimientos
Antes de ejecutar la aplicación asegúrese de tener instalado:

- Node.js (versión 14 o superior)
- npm (versión 7 o superior)
## Ejecucion
Clonar el repositorio

```bash
  git clone https://github.com/ycansam/front-end-podcasts
```
Dirigirse al directorio del proyecto
```bash
  cd front-end-podcasts
```
### Modo de desarrollo
Para ejecutar la aplicación en modo de desarrollo, abra una terminal y ejecute los siguientes comandos:
```bash
npm install
npm run build
```

### Build
Para compilar la aplicación, abra una terminal y ejecute los siguientes comandos:
```bash
npm install
npm run build
```

Una vez compilada la aplicación, puede ejecutarla en modo producción con el siguiente comando:
```bash
npm start
```
#### Si persiste algun error
Eliminar las carpetas ".next" y "build"



## Optimizaciones

Se han utilizado paquetes de gulp y derivados para la compilacion de todos los archivos de typescript de la aplicacion. 