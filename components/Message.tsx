export enum MessageLevels {
  Info,
  Alert,
  Err,
  Warn,
  Success,
}

export interface MessageProps {
  text: string;
  level: MessageLevels;
}

export function Message(text: string, level: MessageLevels) {
  switch (level) {
    case MessageLevels.Alert:
      return <div className="bg-orange-500">{text}</div>;
    case MessageLevels.Info:
      return <div className="bg-blue-500">{text}</div>;
    case MessageLevels.Err:
      return <p className="text-red-400 font-bold">{text}</p>;
    case MessageLevels.Warn:
      return <div className="bg-yellow-500">{text}</div>;
    case MessageLevels.Success:
      return <div className="bg-green-500">{text}</div>;
  }
}
