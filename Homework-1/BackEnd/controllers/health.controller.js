export const health = (_, res) => {
    res.status(200).json({
        message: "API for todo",
        version: "1.0.0"
    });
}
