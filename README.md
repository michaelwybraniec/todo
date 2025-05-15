# TODO

## Project Structure

src/
├── components/         # Reusable UI
│   └── SignOutButton.tsx
│   └── TaskItem.tsx
│   └── TaskForm.tsx
├── pages/              # Ionic pages
│   └── Home.tsx
│   └── Login.tsx
│   └── Register.tsx
├── lib/                # Supabase client, utils
│   └── supabase.ts
│   └── auth.ts
├── types/              # TypeScript interfaces
│   └── Task.ts
├── hooks/              # Custom React hooks
│   └── useTasks.ts
└── App.tsx             # Root component

## Supabase Server