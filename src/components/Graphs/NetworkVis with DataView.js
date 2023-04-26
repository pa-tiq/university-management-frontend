import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { DataView, Network } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.min.css';
import { colors } from '../../constants/colors';
import Edge from './ModelsVis/Edge';
import Node from './ModelsVis/Node';
import styled from 'styled-components';
import BottomModal from '../Modals/BottomModal';
import { SubjectContext } from '../../store/subject-context';
import LoadingSpinner from '../UI/LoadingSpinner';
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

//const nla = get_nodes_links_annotations(data1);

const NetworkVis = ({ onNodeSelect }) => {
  const networkRef = useRef(null);

  const [showDetails, setShowDetails] = useState(-1);
  const [selectedNode, setSelectedNode] = useState({});
  const [filterPeriod, setFilterPeriod] = useState(-1);

  const handlePeriodFilterChange = (event) => {
    setFilterPeriod(event.target.value);
  };

  useEffect(() => {
    if (nodesDataView) nodesDataView.refresh();
  }, [filterPeriod]);

  const showDetailsHandler = (nodeId) => {
    const selected =
      ctx.nodes[ctx.nodes.findIndex((node) => node.id === nodeId)];
    setShowDetails(nodeId);
    setSelectedNode(selected);
    onNodeSelect(selected);
  };
  const hideDetailsHandler = () => {
    setShowDetails(-1);
  };

  const ctx = useContext(SubjectContext);
  const { nodes, edges, nodesDataView, edgesDataView } = ctx;

  useLayoutEffect(() => {
    const nla = get_nodes_links_annotations(data1);
    ctx.setEdgesArr(nla.edges);
    ctx.setNodesArr(nla.nodes);
  }, []);

  const nodesFilter = (node) => {
    if (filterPeriod === -1) {
      return true;
    }
    switch (filterPeriod) {
      case 1:
        return node.level === 1;
      case 2:
        return node.level === 2;
      case 3:
        return node.level === 3;
      case 4:
        return node.level === 4;
      default:
        return true;
    }
  };

  useEffect(() => {
    if (networkRef.current && nodesDataView) {
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

      console.log(nodesDataView);
      console.log(edgesDataView);

      const network = new Network(
        networkRef.current,
        { nodes: nodesDataView, edges: edgesDataView },
        options
      );

      network.on('select', (params) => {
        showDetailsHandler(params.nodes[0]);
      });
    }
  }, [nodesDataView]);

  useEffect(() => {
    if (nodes.length > 0) {
      const nodeDictArr = Node.returnDictArr(nodes);
      console.log(nodeDictArr);
      const nodesView = new DataView(nodeDictArr, { filter: nodesFilter });
      console.log(nodesView);
      ctx.setNodesDataView(nodesView);
    }
  }, [nodes]);

  useEffect(() => {
    if (edges.length > 0) {
      console.log(edges);
      const edgesView = new DataView(edges);
      console.log(edgesView);
      ctx.setEdgesDataView(edgesView);
    }
  }, [edges]);

  if (ctx.isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <NetworkContainer>
      <label>
        Filter nodes
        <select id='nodeFilterSelect' onSelect={handlePeriodFilterChange}>
          <option value='-1'>Período</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
      </label>
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
