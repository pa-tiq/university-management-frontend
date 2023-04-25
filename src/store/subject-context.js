import { createContext, useState } from 'react';

export const SubjectContext = createContext({
  nodes: [],
  edges: [],
  isLoading: false,
  addNode: () => {},
  addEdge: () => {},
});

const SubjectContextProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addNode = (node) => {
    let subs = nodes.concat(node);
    setNodes(subs);
  };
  const addEdge = (edge) => {
    let rels = edges.concat(edge);
    setEdges(rels);
  };

  return (
    <SubjectContext.Provider
      value={{
        nodes: nodes,
        edges: edges,
        isLoading: isLoading,
        addNode: addNode,
        addEdge: addEdge,
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectContextProvider;
