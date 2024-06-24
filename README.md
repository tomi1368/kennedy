<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

</p>

## Pasos a seguir

1. Tener docker instalado

2. Clonar el repositorio con el comando git clone https://github.com/tomi1368/universidaduk.git

3. Abrir una consola en el root del proyecto y ejecutar el comando docker compose up --build ( en windows)

4. Abrir Postman e importar la coleccion que se encuentra en el root del proyecto (ms-ukuniversity.postman_collection.json)

## Recomendaciones

- El flujo normal en Postman seria hacer la request del POST luego las demas (DELETE, PATCH, GET). Debido a que se tiene que crear un documento para editar o eliminar.
  No pasa nada sino se sigue el path igualmente. Se enviaran los errores correspondientes
