# VC Odontología

Site institucional da clínica VC Odontología em Encarnación, Paraguay.

**Dra. Violeta Cáceres Rios**

## Estrutura

```
├── index.html          # Página principal
├── css/styles.css      # Estilos
├── assets/             # Logo, favicon e fotos
└── package.json        # Script de desenvolvimento local
```

## Desenvolvimento local

```bash
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Deploy

Site estático — pode ser publicado em Vercel, Netlify, GitHub Pages ou qualquer host de arquivos estáticos.

## Ativar o site (produção)

Enquanto `js/config.js` tiver `active: false`, visitantes veem um aviso de **sitio en preparación** e não conseguem usar o site (links e navegação bloqueados). Também é enviado `noindex` para buscadores.

Para publicar de verdade:

1. Abra `js/config.js`
2. Altere para `active: true`
3. Faça deploy novamente

## Contato

- **Endereço:** Honorio González 926, Encarnación 6000, Paraguay
- **WhatsApp:** +595 994 862209
