import { GraphicsIcons, MemoryIcons, ProcessorIcons, ScreenIcons, StorageIcons } from "./icons/ProductIcons";
import { SpecState } from "./states";

export const HighlightsPanel = ({ specs, type, category }: { specs: SpecState; type: string; category: string }) => {
  switch (type) {
    case "screenSize":
      return <HighlightScreenSize screenSize={specs.screenSize || "0"} category={category} />;
    case "memory":
      return <HighlightMemory memory={specs.memory || "0"} category={category} />;
    case "storage":
      return <HighlightStorage storage={specs.storage || "0"} category={category} />;
    case "processor":
      return <HighlightProcessor processor={specs.processor || ""} category={category} />;
    case "graphics":
      return <HighlightGraphics graphics={specs.graphics || ""} category={category} />;
    default:
      return <div></div>;
  }
};

const HighlightScreenSize = ({ screenSize, category }: { screenSize: string; category: string }) => {
  return (
    <div className="border rounded h-70 w-60">
      <div className="m-4 flex flex-col">
        <span className="font-semibold text-sm">{screenSize} inches</span>
        <span className="text-xs">Screen Size</span>
        <div className="flex justify-evenly items-center">
          <ScreenIcons num={screenSize ? parseFloat(screenSize) : 0} category={category} />
        </div>
      </div>
    </div>
  );
};

const HighlightMemory = ({ memory, category }: { memory: string; category: string }) => {
  return (
    <div className="border rounded h-70 w-60">
      <div className="m-4 flex flex-col">
        <span className="font-semibold text-sm">{memory}</span>
        <span className="text-xs">Memory</span>
        <div className="flex justify-evenly items-center">
          <MemoryIcons num={memory ? parseFloat(memory) : 0} category={category} />
        </div>
      </div>
    </div>
  );
};

const HighlightStorage = ({ storage, category }: { storage: string; category: string }) => {
  return (
    <div className="border rounded h-70 w-60">
      <div className="m-4 flex flex-col">
        <span className="font-semibold text-sm">{storage}</span>
        <span className="text-xs">Storage/Capacity</span>
        <div className="flex justify-evenly items-center">
          <StorageIcons storage={storage} category={category} />
        </div>
      </div>
    </div>
  );
};

const HighlightProcessor = ({ processor, category }: { processor: string; category: string }) => {
  return (
    <div className="border rounded h-70 w-60">
      <div className="m-4 flex flex-col">
        <span className="font-semibold whitespace-nowrap text-sm truncate">{processor}</span>
        <span className="text-xs">Processor Model</span>
        <div className="flex justify-evenly items-center">
          <ProcessorIcons processor={processor} category={category} />
        </div>
      </div>
    </div>
  );
};

const HighlightGraphics = ({ graphics, category }: { graphics: string; category: string }) => {
  return (
    <div className="border rounded h-70 w-60">
      <div className="m-4 flex flex-col">
        <span className="font-semibold whitespace-nowrap text-sm">{graphics}</span>
        <span className="text-xs">Graphics Model</span>
        <div className="flex justify-evenly items-center">
          <GraphicsIcons graphics={graphics} category={category} />
        </div>
      </div>
    </div>
  );
};
