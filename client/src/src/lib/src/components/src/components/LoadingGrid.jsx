export default function LoadingGrid({ count = 4 }) {
return (
<div className="grid grid-cols-2 gap-4 mt-6 w-full">
{Array.from({ length: count }).map((_, i) => (
<div key={i} className="skeleton h-56" />
))}
</div>
)
}