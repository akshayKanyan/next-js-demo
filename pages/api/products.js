export default (req, res) => {
    res.statusCode = 200
    res.json({ price: '$1234' })
}