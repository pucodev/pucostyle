# PucoStyle 🎨

Guia de estilos minimalista

## Dependencias

- Node v18 o superior
- [pnpm](https://pnpm.io/)

```bash
pnpm install
```

## Configuraciones de Vscode

En caso de usar vscode recomiendo copiar los settings de `.vscode/settings.example.json` a tu workspace.

```bash
cp .vscode/settings.example.json .vscode/settings.json
```

## Local Development

```bash
pnpm run dev
```

## Build

```bash
pnpm run build
```

Esto generará los archivos css en la carpeta `dist/`

- `pucostyle.css`: Archivo css no minificado.
- `pucostyle.min.css`: Archivo css minificado.
