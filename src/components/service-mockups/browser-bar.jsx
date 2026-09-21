export function BrowserBar() {
  return (
    <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-5 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
      <div className="ml-3 h-6 flex-1 rounded-md bg-white" />
    </div>
  );
}
