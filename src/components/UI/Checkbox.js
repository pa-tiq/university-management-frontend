const Checkbox = ({ children }) => {
  return (
    <label key={`periodo${level}`}>
      {level}
      <input
        id={level}
        type='checkbox'
        checked={checkedLevels[level]}
        onChange={handleFilterCheck}
      />
      {'       '}
    </label>
  );
};
