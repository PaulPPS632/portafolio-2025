/**
 * Node 25 expone `localStorage` / `sessionStorage` como globals experimentales,
 * pero sin `--localstorage-file` sus métodos no existen: cualquier librería que
 * haga `typeof localStorage !== "undefined"` durante el SSR (next-themes, HeroUI)
 * revienta con "localStorage.getItem is not a function" y la página responde 500.
 *
 * En el servidor esos globals no deberían existir, así que los quitamos antes de
 * renderizar. En el navegador no se ejecuta este archivo.
 */
function removeBrokenWebStorage(name: "localStorage" | "sessionStorage") {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, name);

  if (!descriptor?.configurable) return;

  const storage = (globalThis as any)[name];

  if (storage && typeof storage.getItem === "function") return;

  delete (globalThis as any)[name];
}

export function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  removeBrokenWebStorage("localStorage");
  removeBrokenWebStorage("sessionStorage");
}
