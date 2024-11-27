import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Command_Input from './components/Command_Input';
import Visualization from './components/Visualization';
import HistoryTable from './components/History_Table';
import Notification from './components/Notification';
import { optimizeCommands } from './utils/optimize_commands';

const App: React.FC = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [history, setHistory] = useState<any[]>([]);
  const [notification, setNotification] = useState({ open: false, message: '' });

  const handleCommandSubmit = (command: string) => {
    const optimized = optimizeCommands(command);
    setHistory(prev => [
      ...prev,
      { original: command, optimized, timestamp: new Date().toLocaleString() },
    ]);
    setCommands(optimized.split(''));
    setNotification({ open: true, message: 'Command submitted successfully!' });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard>
              <Command_Input onSubmit={handleCommandSubmit} />
              <Visualization commands={commands} />
              <HistoryTable history={history} />
              <Notification
                open={notification.open}
                message={notification.message}
                onClose={() => setNotification({ ...notification, open: false })}
              />
            </Dashboard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
