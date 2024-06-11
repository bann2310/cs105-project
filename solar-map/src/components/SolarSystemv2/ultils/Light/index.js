function Light() {
    return (
        <>
            <pointLight castShadow position={[0, 0, 0]} color={0xffffff} intensity={8000} distance={1000} />
            <ambientLight intensity={0.3} />
        </>
    );
}

export default Light;
