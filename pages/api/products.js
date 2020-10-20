export default (req, res) => {
    res.statusCode = 200;
    let num = Math.random()*100
    res.json({ price: "$" + Math.trunc(num) })
}