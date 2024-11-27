import React, { useState, useEffect } from 'react';
import { Box, Button, Slider } from '@mui/material';

interface Cell {
  x: number;
  y: number;
  isSample: boolean;
}

interface VisualizationProps {
  commands: string[];
}

const Visualization: React.FC<VisualizationProps> = ({ commands }) => {
  const gridSize = 5; // 5x5 hujayralar
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [speed, setSpeed] = useState(1000);

  // Tablitsani tayyorlash
  useEffect(() => {
    const newGrid: Cell[][] = Array(gridSize)
      .fill(null)
      .map((_, y) =>
        Array(gridSize)
          .fill(null)
          .map((_, x) => ({ x, y, isSample: Math.random() < 0.2 }))
      );
    setGrid(newGrid);
  }, []);

  const executeCommands = () => {
    let index = 0;

    const interval = setInterval(() => {
      if (index >= commands.length) {
        clearInterval(interval);
        return;
      }

      const command = commands[index];
      moveManipulator(command);
      index++;
    }, speed);
  };

  const moveManipulator = (command: string) => {
    setPosition(prev => {
      switch (command) {
        case 'L': return { ...prev, x: Math.max(prev.x - 1, 0) };
        case 'P': return { ...prev, x: Math.min(prev.x + 1, gridSize - 1) };
        case 'B': return { ...prev, y: Math.max(prev.y - 1, 0) };
        case 'N': return { ...prev, y: Math.min(prev.y + 1, gridSize - 1) };
        default: return prev;
      }
    });
  };

  return (
    <Box>
      <Box display="grid" gridTemplateColumns={`repeat(${gridSize}, 50px)`} gap={1} margin="auto">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              width={50}
              height={50}
              bgcolor={
                position.x === colIndex && position.y === rowIndex
                  ? 'blue'
                  : cell.isSample
                  ? 'orange'
                  : 'gray'
              }
              border="1px solid black"
            />
          ))
        )}
      </Box>

      <Box marginTop={2}>
        <Button variant="contained" color="primary" onClick={executeCommands}>
          Start Execution
        </Button>

        <Box display="flex" alignItems="center" marginTop={2}>
          <Slider
            value={speed}
            onChange={(_, value) => setSpeed(value as number)}
            min={200}
            max={2000}
            step={100}
          />
          <Box marginLeft={2}>{`Speed: ${(2000 - speed) / 200}s`}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Visualization;
