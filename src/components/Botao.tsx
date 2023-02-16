interface BotaoProps {
    cor: 'primary-400' | 'delete' | 'red' | 'verde-500'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'primary-500'
    return (
        <button className={`
            bg-${cor} rounded p-1 px-2
            flex hover:-translate-y-1 hover:translate-x-1 outline outline-offset-2 outline-1
            hover:skew-x-3
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}