<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>


## Alcance y estado de este software

El objetivo de  este software es únicamente para fines demostrativos como resultado de una prueba técnica. 

## Hotelinking-Front-v1.0

En la implementación de este frontend se usó el framework NextJs 14, Tailwind, Javascript. La estructura básica de este frontend fué extraida (por sugerencia del sitio oficial de Laravel) del repositorio https://github.com/laravel/breeze-next

Para el funcionamiento de este frontend, es necesario tener instalado NodeJs y Git 

El código de este frontend solo está probado en modo developer, por lo tanto la forma de lanzar el front es:

carpeta correspondiente/Hotelinkig-front$ npm run dev

al ejecutar este comando en la terminal de visualizará el siguiente mensaje:

   > breeze-next@0.1.0 dev
> next dev

  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Starting...
 ✓ Ready in 2.4s

  Y ese mensaje indica que el front está corriendo. Se puede hacer cntrl+enter con el mouse sobre " http://localhost:3000" y se abrirá en el browser una página con la opcion de Login y Register.
  Al registrarse y loguearse el usuario será redirigido a la página principal, en la cual teniendo los datos de la base de datos en uso, se podrá ver en la página lo siguiente: 

  ![alt text](image.png)

  Los botones indicados con el texto "Agregar código único promocional" n tienen implementada su función.