import { createContext, useEffect, useState } from 'react';

export const SubjectContext = createContext({
  nodes: [],
  edges: [],
  network: null,
  levels: [],
  levelFilters: [],
  isLoading: false,
  setNodesArr: (newnodes) => {},
  setEdgesArr: (newedges) => {},
  setNetwork: (network) => {},
  addLevelFilter: (levelfilter) => {},
  removeLevelFilter: (levelfilter) => {},
  cleanLevelFilters: () => {},
});

const SubjectContextProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [levels, setLevels] = useState([]);
  const [network, setNetwork] = useState(null);
  const [levelFilters, setLevelFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (nodes.length > 0 && edges.length > 0) {
      let alllevels = levels;
      nodes.forEach((node) => {
        if (!alllevels.includes(node.level)) {
          alllevels.push(node.level);
        }
        setLevels(alllevels);
      });
      setIsLoading(false);
    }
  }, [nodes, edges]);

  useEffect(() => {
    if (change) setChange(false);
    if (network) {
      if (levelFilters.length > 0) {
        const filteredNodes = nodes.filter((node) => {
          return levelFilters.includes(node.level);
        });
        network.setData({
          nodes: filteredNodes,
          edges: edges,
        });
      } else {
        network.setData({ nodes: nodes, edges: edges });
      }
      network.redraw();
    }
  }, [levelFilters, change]);

  const setNodesArr = (newnodes) => {
    setNodes(newnodes);
  };
  const setEdgesArr = (newedges) => {
    setEdges(newedges);
  };
  const addLevelFilter = (levelfilter) => {
    if (levelFilters) {
      let filters = levelFilters;
      filters.push(levelfilter);
      setLevelFilters(filters);
      setChange(true);
    }
  };
  const removeLevelFilter = (levelfilter) => {
    if (levelFilters) {
      let filters = levelFilters.filter((item) => item !== levelfilter);
      setLevelFilters(filters);
      setChange(true);
    }
  };
  const cleanLevelFilters = () => {
    setLevelFilters([]);
  };

  return (
    <SubjectContext.Provider
      value={{
        nodes: nodes,
        edges: edges,
        isLoading: isLoading,
        network: network,
        levels: levels,
        levelFilters: levelFilters,
        setNodesArr: setNodesArr,
        setEdgesArr: setEdgesArr,
        setNetwork: setNetwork,
        addLevelFilter: addLevelFilter,
        removeLevelFilter: removeLevelFilter,
        cleanLevelFilters: cleanLevelFilters,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectContextProvider;
