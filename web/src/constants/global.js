import {useState} from 'react'


export const breadDep = ['fazenda de trigo-cevada', 'moinho', 'padaria' ]
export const wineDep = ['fazenda de uva', 'casa de bebida', 'mina de silica', 'vidraceiro']
export const hammerDep = ['lenharia', 'serraria','pedreira','carpintaria']
export const woodenshieldDep = ['lenharia', 'serraria','carpintaria']
export const leathersuitDep = ['fazenda de trigo-cevada', 'fazenda de porcos', 'alfaiate']
export const bowDep = ['fazenda de linho', 'alfaiate', 'lenharia', 'serraria', 'carpintaria']
export const quiverDep = ['2 fazenda de trigo-cevada', 'fazenda de galinhas', 'fazenda de porcos', 'lenharia', 'serraria', 'carpintaria']
export const pykeDep = ['lenharia', 'serraria', 'mina de carvao', 'mina de ferro', 'metalurgica', 'ferreiro']
export const ironshieldDep = ['mina de carvao', 'mina de ferro', 'metalurgica', 'ferreiro']
export const ironarmorDep = ['fazenda de trigo-cevada', 'fazenda de porcos', 'mina de carvao','mina de ferro','metalurgica','ferreiro']
export const linencapeDep = ['fazenda de linho', 'fazenda de algodao', 'alfaiate']
export const coatDep = ['fazenda de linho', 'fazenda de trigo-cevada', 'fazenda de ovelhas', 'alfaiate']
export const magerobeDep = ['fazenda de algodao', 'fazenda de trigo-cevada', 'fazenda de ovelhas', 'mina de diamante-ouro', 'mina de carvao' ,'metalurgica', 'alfaiate']
export const magehatDep = ['fazenda de linho', 'fazenda de trigo-cevada', 'fazenda de galinhas', 'mina de diamante-ouro', 'mina de carvao' ,'metalurgica', 'alfaiate']
export const diamondDep = ['mina de diamante', 'mina de carvao', 'mina de ferro', 'metalurgica']
export const goldcoinDep = ['mina de ouro', 'mina de carvao', 'mina de ferro', 'metalurgica', 'joalheiro']
export const milkDep = ['fazenda de trigo-cevada', 'fazenda de vacas', 'mina de silica', 'vidraceiro']
export const eggDep = ['fazenda de trigo-cevada','fazenda de galinhas']
export const cheeseDep = ['fazenda de trigo-cevada', 'fazenda de vacas', 'mina de silica', 'vidraceiro','padaria']
export const pieDep = ['2 fazenda de trigo-cevada','fazenda de aboboras', 'fazenda de vacas', 'mina de silica', 'vidraceiro','moinho','padaria']
export const cakeDep = ['2 fazenda de trigo-cevada','fazenda de cana de açucar', 'fazenda de vacas', 'mina de silica', 'vidraceiro','moinho','padaria']
export const gloveDep = ['fazenda de trigo-cevada', 'fazenda de linho', 'fazenda de porcos', 'alfaiate']
export const helmetDep = ['2 fazenda de trigo-cevada', 'fazenda de galinhas','fazenda de porcos','mina de carvao', 'mina de ferro', 'metalurgica', 'ferreiro']
export const tunicDep = ['fazenda de algodao', 'fazenda de linho', 'mina de carvao', 'mina de ouro', 'metalurgica', 'alfaiate']
export const pingaDep = ['fazenda de cana de açucar', 'mina de silica', 'vidraceiro', 'destilaria', 'casa de bebida']
export const teaDep = ['fazenda de algodao', 'lenharia', 'serraria', 'casa de bebida']
export const beerDep = ['fazenda de cevada', 'fazenda de trigo', 'lenharia', 'serraria', 'casa de bebida']
export const coinDep = ['mina de carvao', 'mina de ouro', 'metalurgica', 'joalheiro']
export const fishDep = ['pesqueiro']
export const crownDep = ['mina de carvao', 'mina de ouro', 'mina de diamante', 'mina de ferro', 'metalurgica', 'joalheiro']
export const goldDep = ['mina de carvao', 'mina de ouro', 'metalurgica']
export const diamondringDep = ['mina de carvao', 'mina de ferro', 'mina de diamante', 'metalurgica', 'joalheiro']




export const breadDepP = ['cevada-wheat', 'flour' ]
export const wineDepP = ['grape', 'silica', 'glass']
export const hammerDepP = ['log', 'timber','stone']
export const woodenshieldDepP =['log', 'timber']
export const leathersuitDepP = ['cevada-wheat']
export const bowDepP = ['linen', 'rope', 'log', 'timber']
export const quiverDepP = ['cevada-wheat', 'cevada-wheat', 'feather','leather','log', 'timber']
export const pykeDepP = ['log', 'timber', 'coal', 'ironore', 'iron']
export const ironshieldDepP = ['coal', 'ironore', 'iron']
export const ironarmorDepP = ['cevada-wheat', 'leather', 'coal','ironore','iron']
export const linencapeDepP = ['linen', 'cotton']
export const coatDepP = ['linen', 'cevada-wheat', 'wool', ]
export const magerobeDepP = ['cotton', 'cevada-wheat', 'wool', 'diamond-gold-ore', 'coal' ,'diamond-gold', ]
export const magehatDepP = ['linen', 'cevada-wheat', 'feather', 'diamond-gold-ore', 'coal' ,'diamond-gold', ]
export const diamondringDepP = ['diamond_ore', 'coal', 'ironore', 'diamond', 'iron']
export const diamondDepP = ['diamond_ore', 'coal', 'ironore', ]
export const goldcoinDepP = ['mina de ouro', 'coal', 'ironore', 'metalurgica', 'joalheiro']
export const milkDepP = ['cevada-wheat',  'silica', 'glass']
export const eggDepP = ['cevada-wheat']
export const cheeseDepP = ['cevada-wheat','milk','silica','glass']
export const pieDepP = ['2 cevada-wheat','flour','pumpkin',  'silica', 'glass','milk']
export const cakeDepP = ['2 cevada-wheat','sugarcane', 'milk', 'silica', 'glass','flour']
export const gloveDepP = ['cevada-wheat', 'linen', 'leather', ]
export const helmetDepP = ['2 cevada-wheat', 'feather','leather','coal', 'ironore', 'iron']
export const tunicDepP = ['cotton', 'linen', 'coal', 'gold_ore', 'gold', ]
export const pingaDepP = ['sugarcane', 'silica', 'glass', 'destilaria', 'casa de bebida']
export const teaDepP = ['cottonleaf', 'log', 'timber']
export const beerDepP = ['cevada', 'wheat', 'log', 'timber']
export const coinDepP = ['coal', 'gold_ore', 'gold', ]
export const fishDepP = []
export const crownDepP = ['coal', 'gold_ore', 'diamond_ore', 'ironore', 'diamond','iron','gold']
export const goldDepP = ['coal', 'gold_ore', ]





////////////// BUILDING USES /////////////////
export const woodcutterU = []
export const quarryU = []
export const fishermansU = []
export const cevadafarmU = []
export const pumpkinfarmU = []
export const cottonfarmU = []
export const linenfarmU = []
export const grapefarmU = [] 
export const sugarcanefarmU = [] 
export const ironmineU = []
export const coalmineU = []
export const diamondUineU = []
export const goldmineU = []

export const sawmillU = ['log']
export const cowfarmU = ['wheat', 'cevada','glass']
export const pigfarmU = ['wheat', 'cevada']
export const chickenfarmU = ['wheat', 'cevada']
export const sheepfarmU = ['wheat', 'cevada']
export const windmillU = ['wheat', 'cevada']
export const bakeryU = ['flour', 'pumpkin', 'egg', 'milk', 'salt', 'sugar']
export const carpentryU = ['timber','stone',  'rope', 'feather']
export const tailoringU = ['linen', 'cotton', 'wool', 'leather','gold','diamond']
export const drinkhouseU = ['cevada',  'wheat', 'grape', 'timber', 'glass', 'cottonleaf']
export const destileryU = ['sugarcane','glass']
export const metalurgistU = ['iron_ore', 'diamond_ore', 'gold_ore', 'coal']
export const jewelerU = ['diamond','gold', 'iron', 'coal']
export const blacksmithU = ['iron','coal','leather','timber']
export const glasshouseU = ['silica']

///////////////////// building makes

export const woodcutterM = ['log']
export const quarryM = ['stone']
export const fishermansM = ['fish']
export const cevadafarmM = ['cevada']
export const pumpkinfarmM = ['pumpkin']
export const cottonfarmM = ['cotton', 'cottonleaf']
export const linenfarmM = ['linen']
export const grapefarmM = ['grape']
export const wheatfarmM = ['wheat']
export const sugarcanefarmM = ['sugarcane','sugar']
export const ironmineM = ['iron_ore']
export const coalmineM = ['coal']
export const diamondmineM = ['diamond_ore']
export const goldmineM = ['gold_ore']
export const silicamineM = ['silica']
export const sawmillM = ['timber']
export const cowfarmM = ['milk', 'meat']
export const pigfarmM = ['leather', 'meat']
export const chickenfarmM = ['feather', 'egg', 'meat']
export const sheepfarmM = ['wool', 'meat']
export const windmillM = ['flour']
export const bakeryM = ['bread', 'pie', 'cheese', 'cake']
export const carpentryM = ['hammer','wooden_shield', 'bow', 'quiver', 'glove']
export const tailoringM = ['linen_cape', 'glove','coat', 'tunic', 'mage_robe', 'mage_hat']
export const drinkhouseM = ['beer', 'wine', 'tea']
export const destileryM = ['pinga']
export const metalurgistM = ['iron', 'diamond', 'gold']
export const jewelerM = ['diamond_ring','gold_coin', 'crown']
export const blacksmithM = ['pyke','iron_shield','iron_armor','helmet']
export const glasshouseM = ['glass']

export const locations = ['imperio de tremecem','reino de aragon','imperio da franca', 'principado de moscow',
'moldavia', 'ducado de atenas', 'imperio dos marmelucos', 'reino hungaro', 'reino da imericia', 'inglaterra',
'reino da armenia']

export const imperiodetremecemBonus = '1 conjunto de tabuas e pedras'
export const reinodearagonBonus = '1 conjunto de tabuas e pedras'
export const imperiodafrancaBonus = '1 caravana gratis'
export const principadodemoscowBonus = '1 caravana gratis e 1 construcao a escolha'
export const moldaviaBonus = '1 carta politica a escolha'
export const ducadodeatenasBonus = '1 carta politica aleatoria'
export const imperiodosmarmelucosBonus = '1 conjunto de tabuas e pedras'
export const reinohungaroBonus = '1 conjunto de tabuas e pedras'
export const reinodaimericiaBonus = '1 carta politica a escolha'
export const inglaterraBonus = 'um galeao e 1 conjunto de tabuas'
export const reinodaarmeniaBonus = '1 conjunto de tabuas e pedras'




