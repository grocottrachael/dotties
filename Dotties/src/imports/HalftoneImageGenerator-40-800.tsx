import svgPaths from "./svg-3k4pql669z";
import imgCanvas from "figma:asset/eccde54c01846f109b6ab15a95c54d7a70b32277.png";

function Heading() {
  return (
    <div className="absolute h-[36.002px] left-[47.98px] top-0 w-[76.409px]" data-name="Heading 1">
      <p className="absolute font-['Jersey_20:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#d1d5dc] text-[24px] text-nowrap top-[0.06px] tracking-[0.0703px] whitespace-pre">Dotties</p>
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
      <p className="absolute font-['Jersey_20:Regular',sans-serif] leading-[20px] left-[51.48px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">PNG</p>
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
      <p className="absolute font-['Jersey_20:Regular',sans-serif] leading-[20px] left-[49.98px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">SVG</p>
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

function Container8() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[-5.99px] size-[11.99px] top-[-5.99px]" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[274px] size-[11.99px] top-[-5.99px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[-5.99px] size-[11.99px] top-[274px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[274px] size-[11.99px] top-[274px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute left-[56.74px] size-[279.999px] top-[231.94px]" data-name="Container">
      <Canvas />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[787.884px] left-0 overflow-clip top-0 w-[393.488px]" data-name="Container" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 0.12692%, rgba(0, 0, 0, 0) 0.12692%), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0.25414%, rgba(0, 0, 0, 0) 0.25414%)" }}>
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[393.488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[393.488px]">
        <Container13 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-neutral-950 content-stretch flex flex-col h-[851.881px] items-start left-0 top-0 w-[393.488px]" data-name="App">
      <Container7 />
      <Container14 />
    </div>
  );
}

function Canvas1() {
  return (
    <div className="absolute left-0 shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)] size-[279.999px] top-0" data-name="Canvas">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-contain size-full" src={imgCanvas} />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[-5.99px] size-[11.99px] top-[-5.99px]" data-name="Container" />;
}

function Container16() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[274px] size-[11.99px] top-[-5.99px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[-5.99px] size-[11.99px] top-[274px]" data-name="Container" />;
}

function Container18() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border-[0.676px] border-[rgba(255,255,255,0.6)] border-solid left-[274px] size-[11.99px] top-[274px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute left-[56.74px] size-[279.999px] top-[81.94px]" data-name="Container">
      <Canvas1 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[29.072px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[29.072px]">
        <p className="absolute font-['Jersey_20:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.68px] tracking-[0.6px] uppercase whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[15.994px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p22cdf600} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p39009380} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33283" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[23.98px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[3.993px] px-[3.993px] relative size-[23.98px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[48.637px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[48.637px] items-center justify-between pb-[0.676px] pt-0 px-[15.994px] relative w-full">
          <Heading1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[84.945px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[84.945px]">
        <p className="absolute font-['Jersey_20:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.68px] tracking-[0.6px] uppercase whitespace-pre">Parameters</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[8.67px] size-[13.997px] top-[5.66px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p11368a00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16644" />
          <path d={svgPaths.p1cda4980} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16644" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[25.332px] relative shrink-0 w-[69.342px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[25.332px] relative w-[69.342px]">
        <Icon3 />
        <p className="absolute font-['DIN_Alternate:Bold',sans-serif] leading-[16px] left-[45.16px] not-italic text-[#4a5565] text-[12px] text-center text-nowrap top-[5.35px] translate-x-[-50%] whitespace-pre">Reset</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[49.323px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[49.323px] items-center justify-between px-[15.994px] py-0 relative w-full">
          <Heading2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Processing Method</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[35.981px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.981px] relative w-full">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-[88.58px] not-italic text-[#d1d5dc] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Halftone</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 grow h-[35.981px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.981px] relative w-full">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-[89.45px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Ordered</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[41.326px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.997px] h-[41.326px] items-start pb-[0.676px] pl-[2.673px] pr-[2.662px] pt-[2.673px] relative w-full">
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.99px] h-[73.304px] items-start left-[15.99px] top-[15.99px] w-[361.5px]" data-name="Container">
      <Label />
      <Container22 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Dot Shape</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-[#222222] grow h-[35.981px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.981px] relative w-full">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-[89.51px] not-italic text-[#d1d5dc] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Circle</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 grow h-[35.981px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.981px] relative w-full">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-[89.26px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[8.35px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Square</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[41.326px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[1.997px] h-[41.326px] items-start pb-[0.676px] pl-[2.673px] pr-[2.662px] pt-[2.673px] relative w-full">
          <Button6 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11.99px] h-[73.304px] items-start left-[15.99px] top-[105.29px] w-[361.5px]" data-name="Container">
      <Label1 />
      <Container24 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Dot Color</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white relative shrink-0 size-[23.991px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[23.991px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[50.549px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[50.549px]">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[0.68px] uppercase whitespace-pre">#ffffff</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[45.33px] relative shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[7.997px] h-[45.33px] items-center pl-[12.666px] pr-[0.676px] py-[0.676px] relative w-full">
          <Container26 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.997px] h-[73.314px] items-start left-0 top-0 w-[174.75px]" data-name="Container">
      <Label2 />
      <Label3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">BG Color</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-neutral-950 relative shrink-0 size-[23.991px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[23.991px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[50.549px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15.994px] relative w-[50.549px]">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-[0.68px] uppercase whitespace-pre">#0a0a0a</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[45.33px] relative shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[7.997px] h-[45.33px] items-center pl-[12.666px] pr-[0.676px] py-[0.676px] relative w-full">
          <Container28 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.997px] h-[73.314px] items-start left-[186.74px] top-0 w-[174.76px]" data-name="Container">
      <Label4 />
      <Label5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[73.314px] left-[15.99px] top-[194.59px] w-[361.5px]" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute h-[19.987px] left-0 top-0 w-[100.506px]" data-name="Label">
      <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Transparent BG</p>
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[rgba(255,255,255,0.08)] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid h-[19.998px] left-0 top-0 w-[35.992px]" data-name="Container" />;
}

function Checkbox() {
  return <div className="absolute left-[-0.99px] size-[0.993px] top-[-0.99px]" data-name="Checkbox" />;
}

function Container32() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[2px] size-[15.994px] top-[2px]" data-name="Container" />;
}

function Label7() {
  return (
    <div className="absolute h-[19.998px] left-[325.51px] top-0 w-[35.992px]" data-name="Label">
      <Container31 />
      <Checkbox />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[19.998px] left-[15.99px] top-[283.9px] w-[361.5px]" data-name="Container">
      <Label6 />
      <Label7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-[53.971px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.987px] relative w-[53.971px]">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Dot Size</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[29.315px] relative shrink-0 w-[63.997px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29.315px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[63.997px]">
        <p className="font-['DIN_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex h-[29.315px] items-center justify-between left-0 top-0 w-[361.5px]" data-name="Container">
      <Label8 />
      <TextInput />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-[54px]" data-name="Container" />;
}

function Container36() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[47.91px] size-[11.99px] top-[-4.16px]" data-name="Container" />;
}

function Container37() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[2.01px] top-[41.47px] w-[354px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function CustomSlider() {
  return (
    <div className="absolute h-[45.298px] left-[15.99px] top-[319.89px] w-[361.5px]" data-name="CustomSlider">
      <Container34 />
      <Container37 />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-[52.123px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.987px] relative w-[52.123px]">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Spacing</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[29.315px] relative shrink-0 w-[63.997px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29.315px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[63.997px]">
        <p className="font-['DIN_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">3</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[29.315px] items-center justify-between left-0 top-0 w-[361.5px]" data-name="Container">
      <Label9 />
      <TextInput1 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[3.993px] left-0 top-0 w-[34.946px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[-5.05px] size-[11.99px] top-[-4px]" data-name="Container" />;
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[3.993px] left-[5.99px] top-[41.31px] w-[349.521px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function CustomSlider1() {
  return (
    <div className="absolute h-[45.298px] left-[15.99px] top-[381.18px] w-[361.5px]" data-name="CustomSlider">
      <Container38 />
      <Container41 />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-[55.736px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.987px] relative w-[55.736px]">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Contrast</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[29.315px] relative shrink-0 w-[63.997px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29.315px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[63.997px]">
        <p className="font-['DIN_Condensed:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">1.2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[29.315px] items-center justify-between left-0 top-0 w-[361.5px]" data-name="Container">
      <Label10 />
      <TextInput2 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[3.993px] left-0 top-0 w-[97.865px]" data-name="Container" />;
}

function Container44() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[91.87px] size-[11.99px] top-[-4px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[3.993px] left-[5.99px] top-[41.31px] w-[349.521px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function CustomSlider2() {
  return (
    <div className="absolute h-[45.298px] left-[15.99px] top-[442.47px] w-[361.5px]" data-name="CustomSlider">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-[69.015px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.987px] relative w-[69.015px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Brightness</p>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[29.315px] relative shrink-0 w-[63.997px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29.315px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[63.997px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex h-[29.315px] items-center justify-between left-0 top-0 w-[361.5px]" data-name="Container">
      <Label11 />
      <TextInput3 />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[3.993px] left-0 top-0 w-[174.76px]" data-name="Container" />;
}

function Container48() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[168.77px] size-[11.99px] top-[-4px]" data-name="Container" />;
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[3.993px] left-[5.99px] top-[41.31px] w-[349.521px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function CustomSlider3() {
  return (
    <div className="absolute h-[45.298px] left-[15.99px] top-[503.77px] w-[361.5px]" data-name="CustomSlider">
      <Container46 />
      <Container49 />
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-[53.792px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.987px] relative w-[53.792px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Rotation</p>
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[29.315px] relative shrink-0 w-[63.997px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29.315px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[63.997px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex h-[29.315px] items-center justify-between left-0 top-0 w-[361.5px]" data-name="Container">
      <Label12 />
      <TextInput4 />
    </div>
  );
}

function Container51() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[3.993px] left-0 top-0 w-0" data-name="Container" />;
}

function Container52() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[-6px] size-[11.99px] top-[-4px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[3.993px] left-[5.99px] top-[41.31px] w-[349.521px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function CustomSlider4() {
  return (
    <div className="absolute h-[45.298px] left-[15.99px] top-[565.06px] w-[361.5px]" data-name="CustomSlider">
      <Container50 />
      <Container53 />
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-[47.549px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.987px] relative w-[47.549px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Skew X</p>
      </div>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[29.315px] relative shrink-0 w-[63.997px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29.315px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[63.997px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex h-[29.315px] items-center justify-between left-0 top-0 w-[361.5px]" data-name="Container">
      <Label13 />
      <TextInput5 />
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[3.993px] left-0 top-0 w-[174.76px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[168.77px] size-[11.99px] top-[-4px]" data-name="Container" />;
}

function Container57() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[3.993px] left-[5.99px] top-[41.31px] w-[349.521px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function CustomSlider5() {
  return (
    <div className="absolute h-[45.298px] left-[15.99px] top-[626.35px] w-[361.5px]" data-name="CustomSlider">
      <Container54 />
      <Container57 />
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[19.987px] relative shrink-0 w-[47.221px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.987px] relative w-[47.221px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.35px] tracking-[-0.1504px] whitespace-pre">Skew Y</p>
      </div>
    </div>
  );
}

function TextInput6() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[29.315px] relative shrink-0 w-[63.997px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[29.315px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[63.997px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex h-[29.315px] items-center justify-between left-0 top-0 w-[361.5px]" data-name="Container">
      <Label14 />
      <TextInput6 />
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[3.993px] left-0 top-0 w-[174.76px]" data-name="Container" />;
}

function Container60() {
  return <div className="absolute bg-[#6a7282] border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid left-[168.77px] size-[11.99px] top-[-4px]" data-name="Container" />;
}

function Container61() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[3.993px] left-[5.99px] top-[41.31px] w-[349.521px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function CustomSlider6() {
  return (
    <div className="absolute h-[45.298px] left-[15.99px] top-[687.64px] w-[361.5px]" data-name="CustomSlider">
      <Container58 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[756.932px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container25 />
      <Container30 />
      <Container33 />
      <CustomSlider />
      <CustomSlider1 />
      <CustomSlider2 />
      <CustomSlider3 />
      <CustomSlider4 />
      <CustomSlider5 />
      <CustomSlider6 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col h-[531.876px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container62 />
    </div>
  );
}

function MobileControls() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[627.872px] items-start left-0 pb-0 pt-[0.676px] px-0 top-[224.01px] w-[393.488px]" data-name="MobileControls" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.676px_0px_0px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <Container20 />
      <Container63 />
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-[#222222] grow h-full min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-full">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-[calc(50%-0.09px)] not-italic text-[#d1d5dc] text-[14px] text-center text-nowrap top-[calc(50%-11px)] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Upload</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative size-full">
        <p className="absolute font-['DIN_Condensed:Bold',sans-serif] leading-[20px] left-[calc(50%+0.08px)] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[calc(50%-11px)] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute box-border content-stretch flex gap-[1.997px] h-[58px] items-start left-0 pb-[2.676px] pl-[2.673px] pr-[2.662px] pt-[2.673px] top-[794px] w-[393px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.676px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <Button8 />
      <Button9 />
    </div>
  );
}

export default function HalftoneImageGenerator() {
  return (
    <div className="bg-white relative size-full" data-name="Halftone Image Generator">
      <App />
      <Container19 />
      <MobileControls />
      <Container64 />
    </div>
  );
}