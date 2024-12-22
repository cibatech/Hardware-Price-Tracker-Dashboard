"use client"

import { Chart } from "@/components/dashboard/chart/chart"
import { LatestCollections } from "@/components/dashboard/latest-collections"
import { SummaryCard } from "@/components/dashboard/summary-card"
import { useSearchParams } from "next/navigation"

export default function Dashboard() {
  const searchParams = useSearchParams()
  const totalCollectsSucceeded = Number(searchParams.get("totalSucceeded")) || 0
  const totalCollectsFailed = Number(searchParams.get("totalFailed")) || 0

  const total = totalCollectsSucceeded + totalCollectsFailed

  return (
    <div className="p-8 flex flex-col m-auto w-full h-screen">
      <h1 className="text-2xl font-semibold mb-10">Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4 mb-8 grid-cols-1">
        <SummaryCard variant="total" title="Total" value={total} />
        <SummaryCard
          variant="success"
          title="Scraplings"
          value={totalCollectsSucceeded}
        />
        <SummaryCard variant="fail" title="Erros" value={totalCollectsFailed} />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <section className="col-span-2 bg-white border border-zinc-300 rounded-2xl p-6 flex-1">
          <Chart />
        </section>
        <LatestCollections />
      </div>
    </div>
  )
}
