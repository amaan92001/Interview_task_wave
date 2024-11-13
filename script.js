document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");

    // Initial grid size and box dimensions
    let initialRows = 3;
    let initialColumns = 3;
    let initialBoxSize = 50;

    // Variables to keep track of current rows, columns, box size, and repetitions
    let rows = initialRows;
    let columns = initialColumns;
    let boxSize = initialBoxSize;
    let repetitions = 0;

    // Function to update the grid structure
    function updateGrid() {
        // Clear existing grid items
        gridContainer.innerHTML = '';

        // Update CSS properties for the grid and box size
        gridContainer.style.gridTemplateColumns = `repeat(${columns}, ${boxSize}px)`;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                // Only add grid items for the outer border
                if (row === 0 || row === rows - 1 || col === 0 || col === columns - 1) {
                    const gridItem = document.createElement("div");
                    gridItem.classList.add("grid-item");
                    gridItem.style.width = `${boxSize}px`;
                    gridItem.style.height = `${boxSize}px`;
                    gridContainer.appendChild(gridItem);
                } else {
                    // Add an empty space for inner cells
                    const emptySpace = document.createElement("div");
                    emptySpace.style.width = `${boxSize}px`;
                    emptySpace.style.height = `${boxSize}px`;
                    gridContainer.appendChild(emptySpace);
                }
            }
        }

        // Increase grid dimensions and box size
        rows += 1;
        columns += 1;
        boxSize += 5;
        repetitions += 1;

        // Reset to initial values after 5 repetitions
        if (repetitions >= 6) {
            rows = initialRows;
            columns = initialColumns;
            boxSize = initialBoxSize;
            repetitions = 0;
        }
    }

    // Initialize the grid and start the update interval
    updateGrid();
    setInterval(updateGrid, 1000); // Update every 2 seconds
});
