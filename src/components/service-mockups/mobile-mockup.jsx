export function MobileMockup() {
  return (
    <div className="flex min-h-[500px] items-center justify-center gap-8">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="w-[200px] rounded-[2.5rem] border border-neutral-200 bg-white p-3 shadow-xl"
      >
        <div className="rounded-[2rem] bg-neutral-50 p-4">
          <div className="h-40 rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-indigo-500" />

          <div className="mt-5 h-4 w-28 rounded-full bg-neutral-900" />

          <div className="mt-3 h-3 w-full rounded-full bg-neutral-200" />

          <div className="mt-2 h-3 w-3/4 rounded-full bg-neutral-200" />

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="h-20 rounded-2xl bg-white" />
            <div className="h-20 rounded-2xl bg-white" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="mt-20 w-[180px] rounded-[2.5rem] border border-neutral-200 bg-white p-3 shadow-xl"
      >
        <div className="rounded-[2rem] bg-blue-50 p-4">
          <div className="h-24 rounded-2xl bg-white" />
          <div className="mt-4 h-20 rounded-2xl bg-white" />
          <div className="mt-4 h-32 rounded-2xl bg-white" />
        </div>
      </motion.div>
    </div>
  );
}