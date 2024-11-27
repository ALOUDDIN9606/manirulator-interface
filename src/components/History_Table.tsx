import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface HistoryRecord {
  original: string;
  optimized: string;
  timestamp: string;
}

interface HistoryTableProps {
  history: HistoryRecord[];
}

const HistoryTable: React.FC<HistoryTableProps> = ({ history }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Original Commands</TableCell>
          <TableCell>Optimized Commands</TableCell>
          <TableCell>Timestamp</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((record, index) => (
          <TableRow key={index}>
            <TableCell>{record.original}</TableCell>
            <TableCell>{record.optimized}</TableCell>
            <TableCell>{record.timestamp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HistoryTable;
