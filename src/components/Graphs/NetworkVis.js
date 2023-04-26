import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Network } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.min.css';
import { colors } from '../../constants/colors';
import Edge from './ModelsVis/Edge';
import Node from './ModelsVis/Node';
import styled from 'styled-components';
import BottomModal from '../Modals/BottomModal';
import { SubjectContext } from '../../store/subject-context';
import LoadingSpinner from '../UI/LoadingSpinner';
import Checkbox from '../UI/Checkbox';
import FiltersContainer from '../UI/FiltersContainer';

//https://www.npmjs.com/package/vis-network
//https://visjs.github.io/vis-network/examples/
//https://visjs.github.io/vis-network/docs/network/

const NetworkContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

let data1 = require('../../constants/materias_prerequisitos_corequisitos.json');

const get_nodes_links_annotations = (data) => {
  const nodes = [];
  const edges = [];
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
          const newlink = new Edge(
            prereq.id,
            already_inserted.id,
            'prerequisito'
          );
          edges.push(newlink);
          if (!nodes[already_inserted_idx].prerequisites.includes(prerequisito))
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
          const newlink = new Edge(
            coreq.id,
            already_inserted.id,
            'corequisito'
          );
          edges.push(newlink);
          nodes[already_inserted_idx].addCorequisite(corequisito);
        }
      }
    } else {
      const newnode = new Node(idx, nome, periodo);
      if (prerequisito === '1200 H') {
        newnode.addPrerequisite('1200 H');
        const newlink = new Edge(node1200H.id, idx, 'prerequisito');
        edges.push(newlink);
      } else if (corequisito !== 'NAO POSSUI') {
        const coreq = nodes.filter((node) => node.title === corequisito);
        if (coreq.length > 0) {
          const newlink = new Edge(coreq[0].id, idx, 'corequisito');
          edges.push(newlink);
          newnode.addCorequisite(corequisito);
        }
      } else if (prerequisito !== 'NAO POSSUI') {
        const prereq = nodes.filter((node) => node.title === prerequisito);
        if (prereq.length > 0) {
          const newlink = new Edge(prereq[0].id, 'prerequisito');
          edges.push(newlink);
          newnode.addPrerequisite(prerequisito);
        }
      }
      nodes.push(newnode);
    }
  };

  data.resultset.map(populate);
  data.resultset.map(populate);

  return { nodes: nodes, edges: edges };
};

const NetworkVis = ({ onNodeSelect }) => {
  const networkRef = useRef(null);

  const ctx = useContext(SubjectContext);
  const { nodes, edges, isLoading, levelFilters, levels } = ctx;

  const [showDetails, setShowDetails] = useState(-1);
  const [selectedNode, setSelectedNode] = useState({});
  const [checkedLevels, setCheckedLevels] = useState([]);

  const showDetailsHandler = (nodeId) => {
    const selected = nodes[nodes.findIndex((node) => node.id === nodeId)];
    setShowDetails(nodeId);
    setSelectedNode(selected);
    onNodeSelect(selected);
  };
  const hideDetailsHandler = () => {
    setShowDetails(-1);
  };

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

  useEffect(() => {
    if (levels) {
      setCheckedLevels(new Array(levels.length + 1).fill(false));
    }
  }, [levels]);

  useLayoutEffect(() => {
    const nla = get_nodes_links_annotations(data1);
    ctx.setEdgesArr(nla.edges);
    ctx.setNodesArr(nla.nodes);
  }, []);

  useEffect(() => {
    if (networkRef.current && !isLoading) {
      const options = {
        configure: {
          enabled: true,
          filter: 'nodes,edges',
          showButton: true,
        },
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
                values.size = 25;
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
            roundness: 0.35,
          },
          selectionWidth: 4,
          color: {
            highlight: colors.selected_edge,
          },
        },
        physics: true,
        layout: {
          randomSeed: undefined,
          improvedLayout: true,
          clusterThreshold: 150,
          hierarchical: {
            treeSpacing: 5,
            direction: 'UD',
            levelSeparation: 100,
            nodeSpacing: 50,
          },
        },
        interaction: {
          navigationButtons: false,
        },
      }; // Add options for customization if needed

      const network = new Network(
        networkRef.current,
        { nodes: nodes, edges: edges },
        options
      );

      network.on('select', (params) => {
        showDetailsHandler(params.nodes[0]);
      });

      ctx.setNetwork(network);
    }
  }, [nodes, edges, isLoading]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <NetworkContainer>
      {/* <FiltersContainer>
        <div>{'Períodos:'}</div>
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
      </FiltersContainer> */}
      <div
        ref={networkRef}
        style={{
          width: '100%',
          height: '100%',
          marginTop: '0px',
          position: 'absolute',
        }}
      ></div>
      {showDetails > -1 && (
        <BottomModal hide={showDetails < 0} onHide={hideDetailsHandler}>
          <div>{`${selectedNode.title} `}</div>
          <div>{`Corequisitos: ${
            selectedNode.corequisites.length > 0
              ? selectedNode.corequisites
              : 'Nenhum'
          }`}</div>
          <div>{`Prerequisitos: ${
            selectedNode.prerequisites.length > 0
              ? selectedNode.prerequisites
              : 'Nenhum'
          }`}</div>
        </BottomModal>
      )}
    </NetworkContainer>
  );
};

export default NetworkVis;
