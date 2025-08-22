const API_BASE = import.meta.env.VITE_API_BASE || 'https://webtoon-backend-8laj.onrender.com'


export async function checkHealth() {
const res = await fetch(`${API_BASE}/health`)
if (!res.ok) throw new Error('Health check failed')
return res.json()
}


export async function generate(scene) {
const res = await fetch(`${API_BASE}/generate?scene=${encodeURIComponent(scene)}`)
if (!res.ok) throw new Error('Generate failed')
return res.json()
}