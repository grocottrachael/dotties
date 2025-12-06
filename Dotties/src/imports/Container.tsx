import imgCanvas from "figma:asset/eccde54c01846f109b6ab15a95c54d7a70b32277.png";

function Canvas() {
  return (
    <div className="absolute left-0 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)] size-[600px] top-0" data-name="Canvas">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain size-full" src={imgCanvas} />
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[-6px] size-[12px] top-[-6px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[594px] size-[12px] top-[-6px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[-6px] size-[12px] top-[594px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[594px] size-[12px] top-[594px]" data-name="Container" />;
}

export default function Container4() {
  return (
    <div className="relative size-full" data-name="Container">
      <Canvas />
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}