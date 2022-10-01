const ApiError = require('../error/ApiError')
const db = require('../db')


class PurchaseController{
    async create(req, res, next) {
        try {
            const {name, amount, distance} = req.body
            const purchase = await db.query(`INSERT INTO purchase (name, amount, distance) values ($1, $2, $3) RETURNING *`, [name, amount, distance])
            return res.json(purchase.rows[0])
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    // async getAll1(req, res) {
    //     const purchases = await db.query(`SELECT * FROM purchase`)
    //     res.json(purchases.rows)
    // }

    async getAll(req, res) {
        const purchases = await db.query(`SELECT * FROM purchase`)
        const { q } = req.query
        const { f } = req.query
        const { a } = req.query
        const {currentPage} = req.query
        const {perPage} = req.query

        const search = (data) => {
            switch (a) {
                case 'equal':
                    return data.filter((item) =>
                        item[f].toString().toLowerCase() === q.toLowerCase()
                    )
                case 'contains':
                    return data.filter((item) =>
                        item[f].toString().toLowerCase().includes((q).toLowerCase())
                    )
                case 'less':
                    if(f==='name'){
                        return data.filter((item) =>
                            item[f].toString().length<q.length
                        )
                    }
                    else return data.filter((item) =>
                        item[f]<Number(q)
                    )
                case 'more':
                    if(f==='name'){
                        return data.filter((item) =>
                            item[f].toString().length>q.length
                        )
                    }
                    else return data.filter((item) =>
                        item[f]>Number(q)
                    )
            }
        }
        const data = search(purchases.rows)
        const obj = {
            items : data.slice((Number(currentPage)-1)*Number(perPage), (Number(currentPage)-1)*Number(perPage)+Number(perPage)),
            pages : Math.ceil(data.length/perPage)

        }
        res.json(obj)
    }
}

module.exports = new PurchaseController()