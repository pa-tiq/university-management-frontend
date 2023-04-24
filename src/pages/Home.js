import Container from '../components/UI/Container';
import Network from '../components/Graphs/Network';
import { NETWORK_DATA } from '../constants/DUMMY_DATA';
import styled from 'styled-components';

const NetworkContainer = styled.div`
  display: flex;
  width: 800px;
  height: 400px;
`;

const Home = () => {
  return (
    <NetworkContainer>
      <Network data={NETWORK_DATA} />
    </NetworkContainer>
  );
};

export default Home;
