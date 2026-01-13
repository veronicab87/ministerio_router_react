export default function Page({title}) {
  return (
    <div className="page">
      <h1>{title}</h1>
      <p>Contenido de {title}</p>
    </div>
  )
}
