export function POSMockup() {
  return (
    <div className="grid min-h-[460px] grid-cols-[1fr_180px] gap-4 rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-neutral-200 bg-white p-3"
          >
            <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100" />

            <div className="mt-3 h-3 w-3/4 rounded-full bg-neutral-200" />

            <div className="mt-2 h-3 w-1/2 rounded-full bg-blue-500" />
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <div className="h-4 w-20 rounded-full bg-neutral-900" />

        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-3">
              <div className="h-10 w-10 rounded-lg bg-neutral-100" />

              <div className="flex-1 space-y-2">
                <div className="h-3 w-full rounded-full bg-neutral-200" />
                <div className="h-2 w-1/2 rounded-full bg-neutral-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 h-11 rounded-xl bg-blue-600" />
      </div>
    </div>
  );
}