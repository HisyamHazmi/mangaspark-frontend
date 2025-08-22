export default function PanelCard({ src, alt }) {
return (
<div className="card overflow-hidden">
<img src={src} alt={alt} className="w-full h-56 object-cover" />
</div>
)
}