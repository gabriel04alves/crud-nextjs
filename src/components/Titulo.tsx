export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center text-fundo bg-primary rounded-md">
            <h1 className="px-7 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border-2 border-second" />
        </div>
    )
}