import { Controls, Edge, Node, ReactFlow } from "@xyflow/react";
import StrategiesSideBar from "../components/StrategiesSidebar";

//  Sample Node
const nodes: Node[] = [
  {
    id: "src",
    type: "input",
    data: { label: "node 1" },
    position: { x: 10, y: 10 },
    width: 200,
    height: 100,
  },
  {
    id: "2",
    data: { label: "node 2" },
    position: { x: 300, y: 300 },
    width: 200,
    height: 100,
  },
];

// Source and Target Refers to the ID of the nodes
const edges: Edge[] = [
  {
    id: "1-2",
    source: "src",
    target: "2",
    animated: true,
  },
];

export default function Strategies() {
  return (
    <div className="flex flex-1 h-full">
      <StrategiesSideBar />
      <main className="text-[#C8D8EB] flex-1 bg-[#0A1628] p-8">
        <ReactFlow nodes={nodes} edges={edges} fitView={true}>
          {/*<h1>Strategy Name Perchance</h1>*/}
          <Controls />
        </ReactFlow>
      </main>
    </div>
  );
}
