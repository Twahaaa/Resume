# Vite + React + TypeScript + shadcn-ui

A modern web application built with:

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - A JavaScript library for building user interfaces
- 🔷 **TypeScript** - JavaScript with syntax for types
- 🎨 **Tailwind CSS** - A utility-first CSS framework
- 🧩 **shadcn-ui** - Beautifully designed components built with Radix UI
- 🎯 **Lucide React** - Beautiful & consistent icon toolkit

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/          # shadcn-ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Adding shadcn-ui Components

To add more shadcn-ui components, you can manually copy them from [ui.shadcn.com](https://ui.shadcn.com) or install the CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

## Customization

- **Theme**: Edit `src/index.css` to customize the color scheme
- **Tailwind**: Modify `tailwind.config.js` for Tailwind customization
- **Components**: Add your components in `src/components/`

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn-ui Documentation](https://ui.shadcn.com/)

## License

MIT
# Resume
