import style_body from "./style_body.module.css";

let guardaTexto = ["Components ", "Facilita em manter partes menores funcionando corretamente.","Você pode reutiliza-lo ou seja menos código para escrever"]

export default function Corpo()
{
return(
<div className={style_body.Container}>
<h2>{guardaTexto[0]}</h2>
<p>{guardaTexto[1]}</p>
<p>{guardaTexto[2]}</p>
</div>
)
}