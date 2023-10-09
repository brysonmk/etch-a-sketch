
const drawpad = document.querySelector(".drawpad")


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
    console.log("ok")
}

function create_grid(grid_size){
    for (i=0;i<grid_size;i++){
        let row = document.createElement('div'); 
        row.style.width = (20 * grid_size) + 'px';
        row.style.height = '20px';
        row.style.display = 'flex';
        row.classList.add('row:' + i);
        drawpad.appendChild(row);

        for (j=0;j<grid_size;j++){
            let squareDiv = document.createElement('div');    
            squareDiv.style.width = '20px';
            squareDiv.style.height = '20px';
            squareDiv.style.backgroundColor = 'white';
            squareDiv.classList.add('square:(' + i + "," +j + ")");
            squareDiv.addEventListener('mouseover', changeColor)
            squareDiv.addEventListener('mousedown', changeColor)
            row.appendChild(squareDiv);
        }
    }
}
create_grid(16)


const popup = document.querySelector('.popup')
const change_squares_btn = document.querySelector('.change-squares-btn')
const num_squares = document.querySelector('.popup-number-input')
const create_grid_btn = document.querySelector('.create-grid-button')

function change_num_squares(e){
    console.log('ok: ' + num_squares);
    popup.style.display = 'block';
}
function create_grid_if_valid(e){
    let grid_size = num_squares.value
    if (grid_size >= 1 && grid_size <= 64){
        popup.style.display = 'none';
        while (drawpad.firstChild) {
            drawpad.removeChild(drawpad.firstChild);
        }
        create_grid(grid_size)
    }
}
    

change_squares_btn.addEventListener('click', change_num_squares);
create_grid_btn.addEventListener('click', create_grid_if_valid);