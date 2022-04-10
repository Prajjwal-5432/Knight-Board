const getPositions = (posx, posy) => {
    return new Promise(resolve => {
        let board = new Array(8)

        posx = posx - 1
        posy = posy - 1

        for (let i = 0; i < board.length; ++i) {
            board[i] = new Array(8)
        }

        for (let i = 0; i < 8; ++i) {
            for (let j = 0; j < 8; ++j) {
                board[i][j] = 0
            }
        }

        let dirx = [-2, -2, 2, 2, -1, -1, 1, 1]
        let diry = [-1, 1, -1, 1, -2, 2, -2, 2]

        let positions = []
        for (let i = 0; i < 8; ++i) {
            let x = posx + dirx[i]
            let y = posy + diry[i]

            if (Math.min(x, y) >= 0 && Math.max(x, y) < 8) {
                x += 1, y += 1
                positions.push({ x, y })
            }
        }
        resolve(positions)
    })
}

module.exports = {
    getPositions: getPositions
}