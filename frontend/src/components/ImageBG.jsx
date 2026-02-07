const ImageBG = () => {
    return (
        <div className="min-h-screen">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://langdays.z23.web.core.windows.net/assets/langdays-bg.png')" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />
        </div>

    )
}

export default ImageBG