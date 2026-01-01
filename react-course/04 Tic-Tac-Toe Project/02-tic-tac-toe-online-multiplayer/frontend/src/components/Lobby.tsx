import { Avatar, Heading, Progress } from '@chakra-ui/react';

import { LobbyType } from '../backend/types/Lobby';

export function Lobby({ lobby }: { lobby: LobbyType }) {
  const title = lobby.state === 'ready' ? 'Game is starting' : 'Waiting Room';
  const players = lobby.players;
  return (
    <div id="lobby">
      <Heading size="sm">{title}</Heading>

      <div className="players">
        {players.map((player, index) => (
          <LobbyPlayer key={index} name={player.name} isLast={index == players.length - 1} />
        ))}
      </div>

      <Progress isIndeterminate marginBottom="1rem" />
    </div>
  );
}

function LobbyPlayer({ name, isLast }: { name: string; isLast: boolean }) {
  return (
    <>
      <div className="player">
        <Avatar name={name} />
        <span className="player-name">{name}</span>
      </div>
      {!isLast && (
        <div>
          <span className="player-name">vs</span>
        </div>
      )}
    </>
  );
}
