export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center text-fundo bg-primary-default rounded-md">
            <h1 className="px-7 py-3.5 text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-primary-100" />
        </div>
    )
}