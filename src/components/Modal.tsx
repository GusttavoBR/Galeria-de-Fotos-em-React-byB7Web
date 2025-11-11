type Props = {
    image: string
    closeModal: () => void
}

export const Modal = ({ image, closeModal }: Props) => {
    return (
        <>
            <div onClick={closeModal} className="fixed inset-0 flex justify-center items-center bg-black/90">
                <img src={`/image/${image}`} alt="" className="max-w-screen max-h-screen" />
            </div>
            <button
                onClick={closeModal}
                className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-red-400 transition-colors"
            >
                &times;
            </button>
        </>
    )
}