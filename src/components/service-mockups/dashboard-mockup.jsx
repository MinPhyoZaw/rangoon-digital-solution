export function DashboardMockup() {
  return (
    <div className="grid min-h-[460px] grid-cols-[90px_1fr] overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-50">
      <div className="border-r border-neutral-200 bg-white p-4">
        <div className="mx-auto h-9 w-9 rounded-xl bg-blue-600" />

        <div className="mt-8 space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="mx-auto h-8 w-8 rounded-lg bg-neutral-100"
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 bg-white p-5"
            >
              <div className="h-3 w-16 rounded-full bg-neutral-200" />
              <div className="mt-4 h-8 w-24 rounded-lg bg-neutral-900" />
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-neutral-200 bg-white p-5">
          <div className="flex h-52 items-end gap-3">
            {[40, 65, 90, 55, 78, 105, 70].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 10 }}
                whileInView={{ height }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                }}
                className="flex-1 rounded-t-lg bg-blue-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}