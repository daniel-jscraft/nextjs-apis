const topPlayers = [
    {"player": "Roger Federer"},
    {"player": "Rafael Nadal"},
    {"player": "Andy Murray"}, 
    {"player": "Novak Djokovic"},
]

export default (req, res) => {
    res.status(200).json(topPlayers)
}