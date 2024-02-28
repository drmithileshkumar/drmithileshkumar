//@ts-nocheck
export function tileGrid(m, n) {
    // Validate input
    if (m <= 0 || n <= 0) {
      console.error("Invalid grid dimensions. Both m and n should be greater than 0.");
      return;
    }
  
    // Initialize an empty grid
    const grid = Array.from({ length: m }, () => Array(n).fill(0));
    let rectangleCount = 0; // Count of rectangles used
  
    // Function to check if a rectangle fits at a given position
    function doesRectangleFit(x, y, width, height) {
      if (x + width > m || y + height > n) {
        return false; // Rectangle goes beyond the grid boundaries
      }
  
      for (let i = x; i < x + width; i++) {
        for (let j = y; j < y + height; j++) {
          if (grid[i][j] !== 0) {
            return false; // Overlapping with existing rectangle
          }
        }
      }
  
      return true;
    }
  
    // Function to place a rectangle at a given position
    function placeRectangle(x, y, width, height) {
      rectangleCount++;
      for (let i = x; i < x + width; i++) {
        for (let j = y; j < y + height; j++) {
          grid[i][j] = rectangleCount; // Use count as grid value
        }
      }
    }
  
    // Generate random rectangles and place them on the grid
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0) {
          // If the cell is untiled
          const width = Math.floor(Math.random() * (m - i)) + 1;
          const height = Math.floor(Math.random() * (n - j)) + 1;
  
          if (doesRectangleFit(i, j, width, height)) {
            placeRectangle(i, j, width, height);
          }
        }
      }
    }
  
    // Print the resulting grid
    // console.log("Tiled Grid:");
    // for (let i = 0; i < m; i++) {
    //   console.log(grid[i].join(" "));
    // }
    return {grid, rectangleCount}
  }
  
  // Example: tileGrid with a 5 by 5 grid
//   tileGrid(5, 5);
  