import svgPaths from "./svg-5ryxhc9s1p";
import imgCanvas from "figma:asset/eccde54c01846f109b6ab15a95c54d7a70b32277.png";

function Heading() {
  return (
    <div className="absolute h-[36.002px] left-[47.98px] top-0 w-[76.409px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#d1d5dc] text-[24px] text-nowrap top-[0.06px] tracking-[0.0703px] whitespace-pre">Dotties</p>
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Group">
          <path d={svgPaths.p9ff7580} fill="var(--fill-0, #6B7280)" id="Vector" />
          <path d={svgPaths.p36b19680} fill="var(--fill-0, #6B7280)" id="Vector_2" />
          <path d={svgPaths.p3c5f2f00} fill="var(--fill-0, #6B7280)" id="Vector_3" />
          <path d={svgPaths.p134e4270} fill="var(--fill-0, #6B7280)" id="Vector_4" />
          <path d={svgPaths.p133b66c0} fill="var(--fill-0, #6B7280)" id="Vector_5" />
          <path d={svgPaths.p1dc0cb80} fill="var(--fill-0, #6B7280)" id="Vector_6" />
          <path d={svgPaths.pfff600} fill="var(--fill-0, #6B7280)" id="Vector_7" />
          <path d={svgPaths.p2f412700} fill="var(--fill-0, #6B7280)" id="Vector_8" />
          <path d={svgPaths.p1c315970} fill="var(--fill-0, #6B7280)" id="Vector_9" />
          <path d={svgPaths.p3f604a00} fill="var(--fill-0, #6B7280)" id="Vector_10" />
          <path d={svgPaths.p3f90b880} fill="var(--fill-0, #6B7280)" id="Vector_11" />
          <path d={svgPaths.p3fb03400} fill="var(--fill-0, #6B7280)" id="Vector_12" />
          <path d={svgPaths.p89b2e00} fill="var(--fill-0, #6B7280)" id="Vector_13" />
          <path d={svgPaths.p1e685b00} fill="var(--fill-0, #6B7280)" id="Vector_14" />
          <path d={svgPaths.pccb3800} fill="var(--fill-0, #6B7280)" id="Vector_15" />
          <path d={svgPaths.pff6b100} fill="var(--fill-0, #6B7280)" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}

function BayerLogo() {
  return (
    <div className="absolute left-[7.32px] overflow-clip size-[19.998px] top-[7.32px]" data-name="BayerLogo">
      <div className="absolute flex inset-[5.81%] items-center justify-center">
        <div className="flex-none rotate-[45deg] size-[12.499px]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] left-[-0.99px] size-[3.993px] top-[-0.99px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] left-[31.64px] size-[3.993px] top-[-0.99px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] left-[-0.99px] size-[3.993px] top-[31.64px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] left-[31.64px] size-[3.993px] top-[31.64px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-0 size-[35.992px] top-0" data-name="Container">
      <BayerLogo />
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36.002px] relative shrink-0 w-[124.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.002px] relative w-[124.391px]">
        <Heading />
        <Container4 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[11.99px] size-[15.994px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.99695 9.99619V1.99924" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
          <path d={svgPaths.p1ad92680} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
          <path d={svgPaths.p2ab59500} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return <div className="absolute left-[-214.38px] size-0 top-[-13.67px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid h-[37.333px] left-0 top-0 w-[78.607px]" data-name="Button">
      <Icon />
      <Text />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[50.98px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">PNG</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11.99px] size-[15.994px] top-[9.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.99695 9.99619V1.99924" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
          <path d={svgPaths.p1ad92680} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
          <path d={svgPaths.p2ab59500} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return <div className="absolute left-[-300.98px] size-0 top-[-13.67px]" data-name="Text" />;
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid h-[37.333px] left-[86.6px] top-0 w-[77.191px]" data-name="Button">
      <Icon1 />
      <Text1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[50.48px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">SVG</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[37.333px] relative shrink-0 w-[163.795px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37.333px] relative w-[163.795px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-neutral-950 h-[63.997px] relative shrink-0 w-[393.488px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[63.997px] items-center justify-between pb-[0.676px] pt-0 px-[15.994px] relative w-[393.488px]">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="absolute h-[787.884px] left-0 top-0 w-[393.488px]" data-name="Container" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 0.12692%, rgba(0, 0, 0, 0) 0.12692%), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0.25414%, rgba(0, 0, 0, 0) 0.25414%)" }} />;
}

function Container9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[393.488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[393.488px]">
        <Container8 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-neutral-950 content-stretch flex flex-col h-[851.881px] items-start left-0 top-0 w-[393.488px]" data-name="App">
      <Container7 />
      <Container9 />
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[98.58px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[calc(50%-9.5px)] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Upload</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] h-[76px] relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[76px] w-px" />
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[97.68px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[calc(50%-9.5px)] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function MobileControls() {
  return (
    <div className="absolute bg-neutral-950 content-stretch flex h-[59px] items-start left-0 top-[793px] w-[393px]" data-name="MobileControls">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-[0.676px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button2 />
      <Container10 />
      <Button3 />
    </div>
  );
}

function Canvas() {
  return (
    <div className="absolute left-0 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)] size-[279.999px] top-0" data-name="Canvas">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain size-full" src={imgCanvas} />
      </div>
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[-5.99px] size-[11.99px] top-[-5.99px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[274px] size-[11.99px] top-[-5.99px]" data-name="Container" />;
}

function Container13() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[-5.99px] size-[11.99px] top-[274px]" data-name="Container" />;
}

function Container14() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[274px] size-[11.99px] top-[274px]" data-name="Container" />;
}

function Container15() {
  return (
    <div className="absolute left-[56.74px] size-[279.999px] top-1/2 translate-y-[-50%]" data-name="Container">
      <Canvas />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

export default function HalftoneImageGenerator() {
  return (
    <div className="bg-white relative size-full" data-name="Halftone Image Generator">
      <App />
      <MobileControls />
      <Container15 />
    </div>
  );
}