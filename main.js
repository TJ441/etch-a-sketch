const container = document.querySelector('#container');
const gridBtn = document.querySelector('#setsize');

gridBtn.addEventListener('click', () => {
          container.textContent = '';
          size = prompt("Enter grid size");
          if (size > 100)
            return alert("Limit 100");
          buildGrid(size)
          });

function buildGrid(size) {
  let grid = "";
  for (let i = 0; i < size * size; i++) {
      let square = (400 / size);
      grid = document.createElement('div');
      grid.classList.add('grid');
      grid.style.width = `${square}px`;
      grid.style.height = `${square}px`;
      grid.addEventListener('mouseover', changeColor);
      container.appendChild(grid);
  }   
}
buildGrid(16);

function changeColor(e) {
  e.target.style.backgroundColor = 'blue';
}
