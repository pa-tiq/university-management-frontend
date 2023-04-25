import { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.min.css';
import { colors } from '../constants/colors';
import Edge from '../components/Graphs/Models/Edge';
import Node from '../components/Graphs/Models/Node';
import styled from 'styled-components';
import DetailsSemiModal from '../components/Modals/DetailsSemiModal';
//https://www.npmjs.com/package/vis-network
//https://visjs.github.io/vis-network/examples/
//https://visjs.github.io/vis-network/docs/network/

const NetworkContainer = styled.div`
  display: flex;
  width: 100%;
`;

let data1 = require('../constants/materias_prerequisitos_corequisitos.json');

const get_nodes_links_annotations = (data) => {
  const nodes = [];
  const edges = [];
  const annotations = [];
  const node1200H = new Node(999, '1200 H', 0);
  //nodes.push(node1200H);

  const populate = (materia, idx) => {
    const nome = materia[0];
    const corequisito = materia[1];
    const prerequisito = materia[2];
    const periodo = materia[3];
    const already_inserted = nodes.find((node) => node.title === nome);
    if (already_inserted) {
      const already_inserted_idx = nodes.findIndex(
        (node) => node.title === nome
      );
      const prereq = nodes.find((node) => node.title === prerequisito);
      const coreq = nodes.find((node) => node.title === corequisito);
      if (prereq) {
        const prereqlink = edges.find(
          (edge) =>
            (edge.from === prereq.id || edge.from === already_inserted.id) &&
            (edge.to === prereq.id || edge.to === already_inserted.id)
        );
        if (!prereqlink) {
          const newlink = new Edge(prereq.id, already_inserted.id);
          edges.push(newlink);
          nodes[already_inserted_idx].addPrerequisite(prerequisito);
        }
      }
      if (coreq) {
        const coreqlink = edges.find(
          (edge) =>
            (edge.from === coreq.id || edge.from === already_inserted.id) &&
            (edge.to === coreq.id || edge.to === already_inserted.id)
        );
        if (!coreqlink) {
          const newlink = new Edge(coreq.id, already_inserted.id);
          edges.push(newlink);
          nodes[already_inserted_idx].addCorequisite(corequisito);
        }
      }
    } else {
      const newnode = new Node(idx, nome, periodo);
      if (prerequisito === '1200 H') {
        //const annotation = new Annotation(nome, prerequisito);
        //annotations.push(annotation);
        newnode.addPrerequisite('1200 H');
        const newlink = new Edge(node1200H.id, idx);
        edges.push(newlink);
      } else if (corequisito !== 'NAO POSSUI') {
        const coreq = nodes.filter((node) => node.title === corequisito);
        if (coreq.length > 0) {
          const newlink = new Edge(coreq[0].id, idx);
          edges.push(newlink);
          newnode.addCorequisite(corequisito);
        }
      } else if (prerequisito !== 'NAO POSSUI') {
        const prereq = nodes.filter((node) => node.title === prerequisito);
        if (prereq.length > 0) {
          const newlink = new Edge(prereq[0].id, idx);
          edges.push(newlink);
          newnode.addPrerequisite(prerequisito);
        }
      }
      nodes.push(newnode);
    }
  };

  data.resultset.map(populate);
  data.resultset.map(populate);

  return { nodes: nodes, edges: edges, annotations };
};

const nla = get_nodes_links_annotations(data1);

const Home = () => {
  const networkRef = useRef(null);

  const [showDetails, setShowDetails] = useState(-1);
  const [selectedNode, setSelectedNode] = useState({});

  const showDetailsHandler = (nodeId) => {
    setShowDetails(nodeId);
    setSelectedNode(
      nla.nodes[nla.nodes.findIndex((node) => node.id === nodeId)]
    );
  };
  const hideDetailsHandler = () => {
    setShowDetails(-1);
  };

  useEffect(() => {
    if (networkRef.current) {
      const options = {
        nodes: {
          shape: 'box',
          borderWidth: 0,
          borderWidthSelected: 0,
          color: {
            border: colors.buttons,
            background: colors.buttons,
          },
          chosen: {
            node: (values, id, selected, hovering) => {
              if (selected) {
                values.color = colors.selected_node;
              }
            },
            label: (values, id, selected, hovering) => {
              if (selected) {
                values.size = 18;
              }
            },
          },
          font: {
            face: 'arial',
          },
        },
        edges: {
          endPointOffset: {
            to: 4,
          },
          arrows: {
            to: {
              enabled: true,
              type: 'arrow',
              scaleFactor: 0.5,
            },
          },
          // smooth: https://visjs.github.io/vis-network/examples/network/edgeStyles/smooth.html
          smooth: {
            type: 'diagonalCross',
            roundness: 0.5,
          },
        },
        physics: true,
        layout: {
          improvedLayout: true,
          clusterThreshold: 40,
          hierarchical: {
            treeSpacing: 10,
            direction: 'UD',
          },
        },
      }; // Add options for customization if needed
      const network = new Network(networkRef.current, nla, options);
      network.on('select', (params) => {
        showDetailsHandler(params.nodes[0]);
      });
    }
  }, []);

  return (
    <NetworkContainer>
      <div
        ref={networkRef}
        style={{ width: '100%', height: '1500px', marginTop: '-10rem' }}
      ></div>
      {showDetails > -1 && (
        <DetailsSemiModal hide={showDetails < 0} onHide={hideDetailsHandler}>
          {`${selectedNode.title} `}
          {`| Corequisitos: ${
            selectedNode.corequisites.length > 0
              ? selectedNode.corequisites
              : 'Nenhum'
          }`}
          {` | Prerequisitos: ${
            selectedNode.prerequisites.length > 0
              ? selectedNode.prerequisites
              : 'Nenhum'
          }`}
        </DetailsSemiModal>
      )}
    </NetworkContainer>
  );
};

export default Home;
