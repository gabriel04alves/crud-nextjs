import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string 
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
    <div className={`
        flex flex-col w-2/3
        text-fundo bg-primary rounded-md
    `}>
        <Titulo>{props.titulo}</Titulo>
        <div className="p-6">
            {props.children}
        </div>
    </div> 
    )
}