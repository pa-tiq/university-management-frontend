import { createContext, useEffect, useState } from 'react';

export const SubjectContext = createContext({
  nodes: [],
  edges: [],
  network: null,
  isLoading: false,
  setNodesArr: (newnodes) => {},
  setEdgesArr: (newedges) => {},
  setNetwork: (network) => {},
});

const SubjectContextProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [network, setNetwork] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (nodes.length > 0 && edges.length > 0) {
      setIsLoading(false);
    }
  }, [nodes, edges]);

  const setNodesArr = (newnodes) => {
    setNodes(newnodes);
  };
  const setEdgesArr = (newedges) => {
    setEdges(newedges);
  };

  return (
    <SubjectContext.Provider
      value={{
        nodes: nodes,
        edges: edges,
        isLoading: isLoading,
        network: network,
        setNodesArr: setNodesArr,
        setEdgesArr: setEdgesArr,
        setNetwork: setNetwork,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectContextProvider;
