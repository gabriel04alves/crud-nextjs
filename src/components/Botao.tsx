import Icon from '@mdi/react';
import { mdilPlus } from '@mdi/light-js';

interface BotaoProps {
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={`
            bg-primary-500 border-primary-100 rounded p-1 px-2
            flex hover:-translate-y-1 hover:translate-x-1 outline outline-offset-2 outline-1
            hover:skew-x-3
            ${props.className}
        `}>
            <Icon path={mdilPlus} size={1} color={'#FFF'} /> {props.children}
        </button>
    )
}