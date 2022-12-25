import { useState } from "react";
import { GameConfig } from "../../gameConfig/GameConfig";
import { CharacterPicker } from "../../services/CharacterPicker";
import Card from "../card/Card";
import styles from "./Field.module.css";

const Field: React.FC = () => {
  const [character, setCharacter] = useState(CharacterPicker.next());

  const updateCharacter = () => {
    setCharacter(CharacterPicker.next());
  };

  GameConfig.registerOnConfigChanged(() => {
    updateCharacter();
  });

  return (
    <Card className={styles.field}>
      <form>
        <div>
          <input type="text" readOnly value={character} />
        </div>
        {`=>`}
        <div>
          <input type="text" />
        </div>
      </form>
      <button
        onClick={() => {
          updateCharacter();
        }}
      >
        Confirm
      </button>
    </Card>
  );
};

export default Field;
