import { useEffect, useState } from 'react'
<header className="border-b bg-white">
<div className="container flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center font-bold">MS</div>
<h1 className="text-xl font-bold">MangaSpark</h1>
</div>
<div className="flex items-center gap-3">
<HealthBadge ok={healthOk} />
<a className="btn btn-primary" href="https://github.com/HisyamHazmi/mangaspark-frontend" target="_blank" rel="noreferrer">GitHub</a>
</div>
</div>
</header>


<main className="container py-10">
<div className="grid md:grid-cols-2 gap-6 items-start">
<div className="card p-5">
<h2 className="text-lg font-semibold mb-3">Describe your scene</h2>
<textarea
value={scene}
onChange={(e) => setScene(e.target.value)}
placeholder="e.g. A samurai faces a cyber-dragon in neon Tokyo"
className="input min-h-[120px]"
/>
<div className="flex flex-wrap gap-2 mt-3">
{examplePrompts.map((p) => (
<button key={p} className="badge bg-gray-100 hover:bg-gray-200" onClick={() => setScene(p)}>{p}</button>
))}
</div>
<div className="mt-4 flex gap-3">
<button className="btn btn-primary" onClick={handleGenerate} disabled={loading}> {loading ? 'Generating…' : 'Generate Panels'} </button>
<button className="btn" onClick={async () => {
try { const data = await checkHealth(); setHealthOk(data?.status === 'ok') } catch { setHealthOk(false) }
}}>Check Backend</button>
</div>
{error && <p className="mt-3 text-red-600">{error}</p>}
{!healthOk && <p className="mt-2 text-sm text-gray-500">Tip: If you see a CORS error, add CORS to your FastAPI (see instructions in chat).</p>}
</div>


<div className="card p-5">
<h2 className="text-lg font-semibold mb-3">Result</h2>
{loading && <LoadingGrid count={4} />}
{!loading && panels.length === 0 && (
<p className="text-gray-500">No panels yet. Enter a scene and click <b>Generate Panels</b>.</p>
)}
{!loading && panels.length > 0 && (
<div className="grid grid-cols-2 gap-4">
{panels.map((url, i) => (
<PanelCard key={i} src={url} alt={`Panel ${i + 1}`} />
))}
</div>
)}
</div>
</div>
</main>


<footer className="border-t bg-white mt-10">
<div className="container py-6 text-sm text-gray-500 flex justify-between flex-wrap gap-2">
<span>© {new Date().getFullYear()} MangaSpark</span>
<span>Made with ❤️ — AI manga experiments</span>
</div>
</footer>
</div>
)
}