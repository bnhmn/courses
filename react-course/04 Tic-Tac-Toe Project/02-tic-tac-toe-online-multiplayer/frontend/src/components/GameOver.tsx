import { Heading, Text } from '@chakra-ui/react';

import { PlayerType } from '../backend/types/Player';

interface GameOverProps {
  winner: PlayerType | null;
  finished: boolean;
  cancelled: boolean;
  onRematch: () => void;
}

export function GameOver({ winner, finished, cancelled, onRematch }: GameOverProps) {
  return (
    <div id="game-over">
      <Heading>Game Over!</Heading>
      {finished && winner && (
        <Text>
          <strong>{winner.name}</strong> won!
        </Text>
      )}
      {finished && !winner && <Text>It's a draw!</Text>}
      {cancelled && <Text>The game was cancelled 🙁</Text>}
      <button onClick={onRematch}>Rematch</button>
    </div>
  );
}
