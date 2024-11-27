export const optimizeCommands = (commands: string): string => {
    const optimized = commands.replace(/(.)\1+/g, match => `${match.length}${match[0]}`);
    return optimized;
  };
  