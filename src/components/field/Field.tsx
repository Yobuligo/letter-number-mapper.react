import { CharacterPicker } from "../../services/CharacterPicker";

const Field: React.FC = () => {
  return (
    <div>
      <div>
        <input type="text" readOnly value={`${CharacterPicker.next()}`} />
      </div>
      <div>
        <input type="text" />
      </div>
      <button>Confirm</button>
    </div>
  );
};

export default Field;
