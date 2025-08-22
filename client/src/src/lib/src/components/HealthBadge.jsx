export default function HealthBadge({ ok }) {
return (
<span className={`badge ${ok ? 'badge-green' : 'badge-red'}`}>
<span className={`h-2.5 w-2.5 rounded-full ${ok ? 'bg-green-500' : 'bg-red-500'}`}></span>
{ok ? 'Backend Online' : 'Backend Offline'}
</span>
)
}