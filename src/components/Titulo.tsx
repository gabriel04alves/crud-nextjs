import Icon from '@mdi/react';
import { mdilFlash } from '@mdi/light-js'

export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center text-fundo bg-primary-default rounded-md">
            <h1 className="flex px-7 py-3.5 text-2xl">
            <Icon path={mdilFlash} size={1.5} /> {props.children}
            </h1>
            <hr className="border-2 border-primary-100" />
        </div>
    )
}