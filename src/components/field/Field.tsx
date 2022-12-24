import { useState } from "react";
import { CharacterPicker } from "../../services/CharacterPicker";

const Field: React.FC = () => {
  const [character, setCharacter] = useState(CharacterPicker.next());
  return (
    <div>
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
    </div>
  );
};

export default Field;
