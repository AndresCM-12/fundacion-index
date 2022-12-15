# fundacion-index
Fundacion index base code
Este es un proyecto hecho con [Next.js](https://nextjs.org/) utilizando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Preview del proyecto corriendo en Vercel => [https://fundacionindex.vercel.app/](https://fundacionindex.vercel.app/)

## Cómo Iniciar con Fundación Index

Se necesita tener Node.js y Yarn Instalado.

Nodejs => [https://nodejs.org/en/](https://nodejs.org/en/)

Yarn => [https://yarnpkg.com/](https://yarnpkg.com/)

Para Instalar Dependencias, escribir en terminal:

```bash
yarn
```

Para correr el servidor de desarrollo, escribir en terminal:

```bash
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio en local.

Se utiliza tailwind css para estilos y react en cada pagina con generación estatica.

Figma del sitio => [https://www.figma.com/file/dNeTf3WwTKUz4FuqeaSElr/Reclight-%E2%80%94-Fundacion-Index](https://www.figma.com/file/dNeTf3WwTKUz4FuqeaSElr/Reclight-%E2%80%94-Fundacion-Index)

## Variables de ambiente

Para poder enviar correos se necesita un servicio SMTP, se recomienda sendinblue ya que permite 500 correos al día gratis.
Sendinblue => [https://www.sendinblue.com/](https://www.sendinblue.com/)

.env.example contiene el ejemplo de variables necesarias para configurar los correos SMTP

Se debe de crear un archivo .env.local en el root del proyecto para poder probar el envio de correos en local.

En producción se deben de hacer las variables de ambiente correspondientes.

## Deployment del proyecto

Para subir a producción se recomienda ampliamente utilizar vercel.
Es gratuito y es mucho mejor optimizado que si se sube a un servidor dedicado.
Vercel => [https://vercel.com/](https://vercel.com/)

Para subir a vercel lo más fácil es subir el codigo a un repositorio de github y conectarlo a vercel.
En vercel, en settings del proyecto se puede apuntar el dominio deseado, asi como las variables de ambiente necesarias.
[https://nextjs.org/learn/basics/deploying-nextjs-app/deploy](https://nextjs.org/learn/basics/deploying-nextjs-app/deploy)

Para revisar otras opciones de deployment revisar
[https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
