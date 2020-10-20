export default (req, res) => {
    res.statusCode = 200;
    console.log("xxxxxxxx", req)
    res.json({ price: ("$" + Math.random() * 10) })
}