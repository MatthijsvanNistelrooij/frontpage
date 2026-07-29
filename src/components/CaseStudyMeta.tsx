export function CaseStudyMeta({
  items,
  dark = false,
}: {
  items: { label: string; value: string }[]
  dark?: boolean
}) {
  return (
    <dl
      className={`grid border-y ${dark ? "border-white/20" : "border-black/20"} md:grid-cols-4`}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={`py-5 md:border-r md:px-5 first:pl-0 last:border-r-0 ${dark ? "border-white/20" : "border-black/20"}`}
        >
          <dt className={`eyebrow ${dark ? "text-white/45" : "text-black/45"}`}>
            {item.label}
          </dt>
          <dd className="mt-2 text-sm">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
