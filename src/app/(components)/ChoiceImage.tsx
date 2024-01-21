import Image from 'next/image';
import { ChoiceData } from './Choice';
import AppImage from './computer_suit_woman.png';
import GameImage from './game_tetsuya_man.png';

export const ChoiceImage = ({ choice }: { choice: ChoiceData }) => {
  const ImageSource = choice.name === 'game' ? GameImage : AppImage;
  const ImageAlt =
    choice.name === 'game'
      ? 'type: gameのイメージ画像'
      : 'type: appのイメージ画像';
  return (
    <div className="flex flex-col items-center justify-center">
      <Image alt={ImageAlt} src={ImageSource} />
    </div>
  );
};
