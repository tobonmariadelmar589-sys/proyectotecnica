# Terrario — Landing page estática (HTML + CSS)

Versión 100% estática (sin Laravel, sin build step) de la landing de "Terrario",
lista para desplegar en Vercel en minutos.

## Estructura

```
index.html
css/
  base.css
  main.css
  components/
    site-header.css
    hero.css
    feature-card.css
    testimonial.css
    pricing.css
    contact-form.css
    notification.css
    site-footer.css
js/
  terrario.js
```

Mismo sistema BEM que la versión Laravel: un archivo CSS por bloque
(`site-header`, `hero`, `feature-card`, `testimonial`, `pricing`,
`contact-form`, `notification`, `site-footer`).

## Desplegar en Vercel

**Opción A — arrastrar y soltar:**
1. Ve a https://vercel.com/new
2. Arrastra esta carpeta completa (o un zip) al panel de "Deploy".
3. Vercel detecta que es un sitio estático y lo publica sin configuración adicional.

**Opción B — con la CLI:**
```bash
npm i -g vercel
cd terrario-static
vercel
```
Sigue las instrucciones en pantalla (acepta los valores por defecto: no hay
framework, no hay build command, directorio raíz `.`).

**Opción C — GitHub:**
1. Sube esta carpeta a un repo.
2. En Vercel, "Add New Project" → importa el repo.
3. Framework Preset: "Other". Build Command y Output Directory: vacíos (deja los valores por defecto, ya que es HTML/CSS puro sin build).

## El formulario de contacto

Como no hay backend, la validación y el mensaje de éxito
(`notification--success`) se manejan por JS en el navegador
(`js/terrario.js`): valida que el nombre y el mensaje no estén vacíos y que el
correo tenga formato válido, marca el campo con `contact-form__field--error`
si falla, y si todo está bien muestra la notificación y limpia el formulario.

Si más adelante quieres que el formulario envíe correos de verdad, lo más
simple sin montar backend propio es apuntar el `fetch`/`action` a un servicio
como Formspree o Web3Forms — dime si quieres que lo deje conectado a alguno.
