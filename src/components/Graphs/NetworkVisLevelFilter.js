import FiltersContainer from '../UI/FiltersContainer';
import Checkbox from '../UI/Checkbox';
import { useContext, useEffect, useState } from 'react';
import { SubjectContext } from '../../store/subject-context';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Button from '../UI/Button';

const Title = styled.div`
  color: ${colors.background};
  margin-right: 0.6rem;
`;

const NetworkVisLevelFilter = () => {
  const ctx = useContext(SubjectContext);
  const { levelFilters, levels } = ctx;
  const [checkedLevels, setCheckedLevels] = useState([]);

  useEffect(() => {
    if (levels) {
      setCheckedLevels(new Array(levels.length + 1).fill(false));
    }
  }, [levels]);

  const handleFilterCheck = (e) => {
    const level = parseInt(e.target.id);
    let checked = checkedLevels;
    if (levelFilters.includes(level)) {
      ctx.removeLevelFilter(level);
      checked[level] = false;
    } else {
      ctx.addLevelFilter(level);
      checked[level] = true;
    }
    setCheckedLevels(checked);
  };

  const handleFilterCheckClean = () => {
    setCheckedLevels(new Array(levels.length + 1).fill(false));
    ctx.cleanLevelFilters();
  };

  return (
    <FiltersContainer>
      <Title>{'Períodos'}</Title>
      {levels &&
        levels.map((level) => {
          return (
            <Checkbox
              key={`semestre${level}`}
              value={level}
              checked={checkedLevels[level]}
              onChange={handleFilterCheck}
            />
          );
        })}
      <Button onClick={handleFilterCheckClean}>Limpar</Button>
    </FiltersContainer>
  );
};

export default NetworkVisLevelFilter;
