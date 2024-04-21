// page.tsx

import { FormComponent } from './components/FormComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-smlg:flex">
        <FormComponent />
      </div>
    </main>
  );
}