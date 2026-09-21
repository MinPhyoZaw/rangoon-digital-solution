export function MaintenanceMockup() {
  return (
    <div className="flex min-h-[460px] items-center justify-center">
      <div className="w-full max-w-md rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-20 rounded-full bg-blue-100" />
            <div className="mt-3 h-6 w-40 rounded-lg bg-neutral-900" />
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
            <Wrench size={22} className="text-blue-600" />
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {[
            "Performance",
            "Security",
            "Updates",
            "Deployment",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex items-center gap-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-sm text-green-600">
                ✓
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">
                  {item}
                </p>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${90 - index * 6}%` }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="h-full rounded-full bg-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}