import { useState } from "react";
import { CharacterPicker } from "../../services/CharacterPicker";
import Card from "../card/Card";
import styles from "./Field.module.css";

const Field: React.FC = () => {
  const [character, setCharacter] = useState(CharacterPicker.next());
  return (
    <Card className={styles.field}>
      <div>
        <input type="text" readOnly value={character} />
      </div>
      <div>
        <input type="text" />
      </div>
      <button
        onClick={() => {
          setCharacter(CharacterPicker.next());
        }}
      >
        Confirm
      </button>
    </Card>
  );
};

export default Field;
