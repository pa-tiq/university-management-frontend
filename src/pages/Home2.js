import Network from '../components/Graphs/Network';
import { NETWORK_DATA } from '../constants/DUMMY_DATA';
import styled from 'styled-components';
import Annotation from '../components/Graphs/Models/Annotation';
import Node from '../components/Graphs/Models/Node';
import { colors } from '../constants/colors';
import Link from '../components/Graphs/Models/Link';

const NetworkContainer = styled.div`
  display: flex;
  width: 900px;
  height: 900px;
`;

let data = require('../constants/materias_prerequisitos_corequisitos.json');

const get_nodes_links_annotations = (data) => {
  const nodes = [];
  const links = [];
  const annotations = [];

  data.resultset.map((materia) => {
    const nome = materia[0];
    const corequisito = materia[1];
    const prerequisito = materia[2];
    const periodo = materia[3];
    const already_inserted = nodes.find((node) => node.id === nome);
    if (already_inserted) {
      const prereq = nodes.filter((node) => node.id === prerequisito);
      if (prereq.length > 0) {
        const newlink = new Link(nome, prereq[0].id, 50);
        links.push(newlink);
      }
    } else {
      if (prerequisito === 'NAO POSSUI' && corequisito === 'NAO POSSUI') {
        const newnode = new Node(nome, 0, 32, periodo);
        nodes.push(newnode);
      } else if (prerequisito === '1200 H') {
        const newnode = new Node(nome, 0, 32, periodo);
        const annotation = new Annotation(nome, prerequisito);
        nodes.push(newnode);
        annotations.push(annotation);
      } else if (corequisito !== 'NAO POSSUI') {
        const newnode = new Node(nome, 0, 20, periodo);
        const coreq = nodes.filter((node) => node.id === corequisito);
        if (coreq.length > 0) {
          const newlink = new Link(nome, coreq[0].id, 30);
          links.push(newlink);
        }
        nodes.push(newnode);
      } else if (prerequisito !== 'NAO POSSUI') {
        const newnode = new Node(nome, 0, 20, periodo);
        const prereq = nodes.filter((node) => node.id === prerequisito);
        if (prereq.length > 0) {
          const newlink = new Link(nome, prereq[0].id, 50);

          links.push(newlink);
        }
        nodes.push(newnode);
      }
    }
  });

  return { nodes, links, annotations };
};

const nla = get_nodes_links_annotations(data);

const node1 = new Node('Node 1', 1, 32, colors.buttons);
const node2 = new Node('Node 2', 1, 32, colors.buttons);
const link = new Link('Node 1', 'Node 2', 80);
const annotation1 = new Annotation('Node 2', 'Node 2');
const annotation2 = new Annotation('Node 1', 'Node 1');

const Home = () => {
  return (
    <NetworkContainer>
      {/* <Network
        data={{ nodes: [node1, node2], links: [link] }}
        annotations={[annotation1, annotation2]}
      /> */}
      <Network
        data={{ nodes: nla.nodes, links: nla.links }}
        annotations={nla.annotations}
      />
    </NetworkContainer>
  );
};

export default Home;
