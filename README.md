- database: coacroch - improved.life.23@gmail.com

- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] change layout, delete assets, change metadata
- [x] remove page.tsx add standart page.tsx
- [x] create /.env file, add .env to .gitignore
- [x] add /.prettierrc
- [x] "npx shadcn-ui@latest init" to initialize shadcn
- [x] html, body, :root { height: 100% } thing at app/globals.css
- [x] note: "npx shadcn-ui@latest add button" to install components

- [x] create coachroachdb cluster and rename cluster
- [x] press connect -> create new sql user -> add sql username -> press next -> copy general connection string -> paste to .env as DATABASE_URL
- [x] "npm i -D prisma"
- [x] "npm i @prisma/client"
- [x] "npx prisma init"
- [x] create lib/db.ts
- [x] add "postinstall": "prisma generate" to package.json's scripts field
- [x] change datasource db -> provider to cockroachdb in schema.prisma
- [x] note: "npx prisma generate" and "npx prisma db push" whenever schemas have changed
- [x] note: "npx prisma studio" to manage content

- [x] "npm i next-auth" and "@next-auth/prisma-adapter"
- [x] add Account, User and Session to prisma.schema
- [x] add /lib/auth.ts
- [x] create OAuth consent screen publish app
- [x] create new OAuth ClintID credential at google developer console -> APIs & Services
- [x] add http://localhost:3000 to first http://localhost:3000/api/auth/callback/google to second
- [x] paste this Client ID and Client Secret to .env
- [x] add /app/api/auth

- [x] "npm install next-themes"
- [x] add /providers/theme-provider.tsx
- [x] create ThemeToggle.tsx switch
- [x] wrap {children} with ThemeProvider
- [x] add suppressHydrationWarning to html tag

- [x] "npm i zod"
- [x] "npm i react-hook-form"
- [x] "npx shadcn-ui@latest add form"

- [x] "npm i @tanstack/react-query"
- [x] add /providers/query-provider
- [x] wrap {children} with provider

- [x] "npm i react-hot-toast"
- [x] add /providers/toast-provider
- [x] add provider next to {children}

- [ ] "npm i openai@3.3.0"
- [ ] create /lib/gpt.ts
- [ ] create openai key and paste as OPENAI_API_KEY in env

---

- primary stack: nextjs13-app-nosrc, react, shadcn, tailwind, prisma, coacrochdb, nextauth
- secondary stack: @tanstack/query, zod, react-hot-toast, framer-motion, next-themes
- ui: font = lexend, icons = lucide

---

- neden olduğunu bilmediğim bir şey için antialiased kullanıyor
