const startBtn = document.getElementById("start_btn")
const dijkestraBtn = document.getElementById("dijkestra_btn")
const a_startBtn = document.getElementById("a_star_btn")
const pathFindingAlgoSpeed = document.getElementById("algo_speed")
const board = document.getElementById("board")

const clearLocalStorage = () => {
    localStorage.removeItem("WIDTH")
    localStorage.removeItem("HEIGHT")
    localStorage.removeItem("cellWidth")
    localStorage.removeItem("algorithm")
    localStorage.removeItem("maze_algorithm")
}

(function calculateDimentions() {
    clearLocalStorage()
    const cellWidth = window.innerWidth > 400 ? 30 : 20;
    const WIDTH = (parseInt(window.innerWidth / cellWidth) - 2) % 2 === 0 ? (parseInt(window.innerWidth / cellWidth)) : (parseInt(window.innerWidth / cellWidth) - 1);
    const HEIGHT = window.innerWidth > 400 ? 16 : 20;
    localStorage.setItem("WIDTH", WIDTH)
    localStorage.setItem("HEIGHT", HEIGHT)
    localStorage.setItem("cellWidth", cellWidth)
})()

const parseToCSS = (cssObjectProperty) => {
    return JSON.stringify(cssObjectProperty).replace(/,/g, ";").replace(/"/g, "").replace("{", ``).replace("}", ``)
}

const createBoard = (width, height) => {
    board.innerHTML = Array.from(Array.from(Array(width * height).keys()), (item) => `<div id='${(item % width).toString().length < 2 ? "0" + item % width : item % width}-${Math.floor(item / width).toString().length < 2 ? "0" + Math.floor(item / width).toString() : Math.floor(item / width).toString()}' class='cell'></div>`).join().replace(/,/g, "")
};
createBoard(localStorage.getItem("WIDTH"), localStorage.getItem("HEIGHT"))

const cells = document.querySelectorAll('.cell')
board.style.gridTemplateColumns = `repeat( ${localStorage.getItem("WIDTH")} , ${localStorage.getItem("cellWidth")}px)`

const paint = (coordinants, animationName) => {
    cells[parseInt(coordinants.slice(0, 2)) + parseInt(coordinants.slice(3, 5)) * localStorage.getItem("WIDTH")].className = "wall"
}

cells.forEach((item) => {
    item.style = parseToCSS({
        width: `${localStorage.getItem("cellWidth")}px`,
        height: `${localStorage.getItem("cellWidth")}px`
    })
    item.addEventListener('mouseover', (e) => {
        paint(e.target.id)
    })
})





export { cells, board, pathFindingAlgoSpeed, a_startBtn, dijkestraBtn, startBtn }
