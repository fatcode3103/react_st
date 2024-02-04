const getRandomType = () => {
    const types = ["success", "error", "warning", "info"];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
};

export default getRandomType;
