import svgPaths from "./svg-jsnlfcao30";
import imgCanvas from "figma:asset/eccde54c01846f109b6ab15a95c54d7a70b32277.png";

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Group">
          <path d={svgPaths.p33317600} fill="var(--fill-0, #6B7280)" id="Vector" />
          <path d={svgPaths.p11ad2400} fill="var(--fill-0, #6B7280)" id="Vector_2" />
          <path d={svgPaths.pf648900} fill="var(--fill-0, #6B7280)" id="Vector_3" />
          <path d={svgPaths.p29f65280} fill="var(--fill-0, #6B7280)" id="Vector_4" />
          <path d={svgPaths.p84d5600} fill="var(--fill-0, #6B7280)" id="Vector_5" />
          <path d={svgPaths.p37f3cdf0} fill="var(--fill-0, #6B7280)" id="Vector_6" />
          <path d={svgPaths.pdaadf00} fill="var(--fill-0, #6B7280)" id="Vector_7" />
          <path d={svgPaths.p320e3f00} fill="var(--fill-0, #6B7280)" id="Vector_8" />
          <path d={svgPaths.p14c8f280} fill="var(--fill-0, #6B7280)" id="Vector_9" />
          <path d={svgPaths.p3cc21d80} fill="var(--fill-0, #6B7280)" id="Vector_10" />
          <path d={svgPaths.p145a0900} fill="var(--fill-0, #6B7280)" id="Vector_11" />
          <path d={svgPaths.p11401a00} fill="var(--fill-0, #6B7280)" id="Vector_12" />
          <path d={svgPaths.p37366d00} fill="var(--fill-0, #6B7280)" id="Vector_13" />
          <path d={svgPaths.p8b2b800} fill="var(--fill-0, #6B7280)" id="Vector_14" />
          <path d={svgPaths.p1bd8cd00} fill="var(--fill-0, #6B7280)" id="Vector_15" />
          <path d={svgPaths.p249ec400} fill="var(--fill-0, #6B7280)" id="Vector_16" />
        </g>
      </svg>
    </div>
  );
}

function BayerLogo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="BayerLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[20px]">
        <div className="absolute flex inset-[5.81%] items-center justify-center">
          <div className="flex-none rotate-[45deg] size-[12.5px]">
            <Group />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] relative shrink-0 size-[36px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[36px]">
        <BayerLogo />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-0 not-italic text-[#d1d5dc] text-[24px] text-nowrap top-0 tracking-[0.0703px] whitespace-pre">Dotties</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[124.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[124.438px]">
        <Container />
        <Heading />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[38px] left-0 top-0 w-[133.234px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[78.5px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[8px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Export PNG</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[38px] left-[145.23px] top-0 w-[131.828px]" data-name="Button">
      <Icon1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[77.5px] not-italic text-[#99a1af] text-[14px] text-center text-nowrap top-[8px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Export SVG</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[38px] relative shrink-0 w-[277.063px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38px] relative w-[277.063px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-neutral-950 h-[64px] relative shrink-0 w-[2191px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[64px] items-center justify-between pb-px pt-0 px-[24px] relative w-[2191px]">
        <Container1 />
        <div className="absolute left-[23px] size-[3px] top-[12.5px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M3 0H0V3H3V0Z" fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
        <div className="absolute left-[58px] size-[3px] top-[13px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M3 0H0V3H3V0Z" fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
        <div className="absolute left-[58px] size-[3px] top-[48px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M3 0H0V3H3V0Z" fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
        <div className="absolute left-[23px] size-[3px] top-[48px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M3 0H0V3H3V0Z" fill="var(--fill-0, #6B7280)" id="Vector" />
          </svg>
        </div>
        <Container2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] tracking-[0.6px] uppercase">Upload</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[135.5px] size-[20px] top-[17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 2.5V12.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p320a7e80} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3053b100} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[17px] top-[43px] w-[257px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">From Image</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <Icon2 />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[157px] relative shrink-0 w-[339px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[157px] items-start pb-px pt-[24px] px-[24px] relative w-[339px]">
        <Heading1 />
        <Button2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[84.984px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[84.984px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Parameters</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[9px] size-[14px] top-[6px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1e5fde80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 1.75V4.66667H4.66667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[26px] relative shrink-0 w-[70.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26px] relative w-[70.016px]">
        <Icon3 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[45.5px] not-italic text-[#4a5565] text-[12px] text-center text-nowrap top-[5px] translate-x-[-50%] whitespace-pre">Reset</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[58px] relative shrink-0 w-[339px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[58px] items-center justify-between px-[24px] py-0 relative w-[339px]">
        <Heading2 />
        <Button3 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Processing Method</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[70.27px] not-italic text-[#d1d5dc] text-[14px] text-center text-nowrap top-[8px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Halftone</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[71.14px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[8px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Ordered</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[42px] items-start pb-px pt-[3px] px-[3px] relative w-full">
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Dot Shape</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[71.2px] not-italic text-[#d1d5dc] text-[14px] text-center text-nowrap top-[8px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Circle</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[70.95px] not-italic text-[#4a5565] text-[14px] text-center text-nowrap top-[8px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Square</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[2px] h-[42px] items-start pb-px pt-[3px] px-[3px] relative w-full">
          <Button6 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container8 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Dot Color</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white relative shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[50.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[50.578px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px uppercase whitespace-pre">#ffffff</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[46px] relative shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[46px] items-center pl-[13px] pr-px py-px relative w-full">
          <Container10 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label2 />
      <Label3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">BG Color</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-neutral-950 relative shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[24px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[50.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[50.578px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] text-nowrap top-px uppercase whitespace-pre">#0a0a0a</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[46px] relative shrink-0 w-full" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[46px] items-center pl-[13px] pr-px py-px relative w-full">
          <Container12 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label4 />
      <Label5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-[12px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[74px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[100.547px]" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Transparent BG</p>
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] border-solid h-[20px] left-0 top-0 w-[36px]" data-name="Container" />;
}

function Checkbox() {
  return <div className="absolute left-[-1px] size-px top-[-1px]" data-name="Checkbox" />;
}

function Container16() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[2px] size-[16px] top-[2px]" data-name="Container" />;
}

function Label7() {
  return (
    <div className="absolute h-[20px] left-[255px] top-0 w-[36px]" data-name="Label">
      <Container15 />
      <Checkbox />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Label7 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.984px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[53.984px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Dot Size</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[30px] relative shrink-0 w-[64px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[64px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-0 top-0 w-[291px]" data-name="Container">
      <Label8 />
      <TextInput />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-[39.844px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[33.84px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[6px] top-[42px] w-[279px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function CustomSlider() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="CustomSlider">
      <Container18 />
      <Container21 />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.141px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[52.141px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Spacing</p>
      </div>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[30px] relative shrink-0 w-[64px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[64px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">3</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-0 top-0 w-[291px]" data-name="Container">
      <Label9 />
      <TextInput1 />
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-[27.891px]" data-name="Container" />;
}

function Container24() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[21.89px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[6px] top-[42px] w-[279px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function CustomSlider1() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="CustomSlider">
      <Container22 />
      <Container25 />
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.75px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[55.75px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Contrast</p>
      </div>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[30px] relative shrink-0 w-[64px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[64px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">1.2</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-0 top-0 w-[291px]" data-name="Container">
      <Label10 />
      <TextInput2 />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-[78.109px]" data-name="Container" />;
}

function Container28() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[72.11px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[6px] top-[42px] w-[279px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function CustomSlider2() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="CustomSlider">
      <Container26 />
      <Container29 />
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.031px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[69.031px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Brightness</p>
      </div>
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[30px] relative shrink-0 w-[64px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[64px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-0 top-0 w-[291px]" data-name="Container">
      <Label11 />
      <TextInput3 />
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-[139.5px]" data-name="Container" />;
}

function Container32() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[133.5px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[6px] top-[42px] w-[279px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function CustomSlider3() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="CustomSlider">
      <Container30 />
      <Container33 />
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.813px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[53.813px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Rotation</p>
      </div>
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[30px] relative shrink-0 w-[64px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[64px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-0 top-0 w-[291px]" data-name="Container">
      <Label12 />
      <TextInput4 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-0" data-name="Container" />;
}

function Container36() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[-6px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container37() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[6px] top-[42px] w-[279px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function CustomSlider4() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="CustomSlider">
      <Container34 />
      <Container37 />
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.563px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[47.563px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Skew X</p>
      </div>
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[30px] relative shrink-0 w-[64px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[64px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-0 top-0 w-[291px]" data-name="Container">
      <Label13 />
      <TextInput5 />
    </div>
  );
}

function Container39() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-[139.5px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[133.5px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[6px] top-[42px] w-[279px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function CustomSlider5() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="CustomSlider">
      <Container38 />
      <Container41 />
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[47.234px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[47.234px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Skew Y</p>
      </div>
    </div>
  );
}

function TextInput6() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] h-[30px] relative shrink-0 w-[64px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] w-[64px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap text-right whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-between left-0 top-0 w-[291px]" data-name="Container">
      <Label14 />
      <TextInput6 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[4px] left-0 top-0 w-[139.5px]" data-name="Container" />;
}

function Container44() {
  return <div className="absolute bg-[#6a7282] border border-[rgba(255,255,255,0.08)] border-solid left-[133.5px] size-[12px] top-[-4px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-[6px] top-[42px] w-[279px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function CustomSlider6() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="CustomSlider">
      <Container42 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[339px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip px-[24px] py-0 relative rounded-[inherit] w-[339px]">
        <Container7 />
        <Container9 />
        <Container14 />
        <Container17 />
        <CustomSlider />
        <CustomSlider1 />
        <CustomSlider2 />
        <CustomSlider3 />
        <CustomSlider4 />
        <CustomSlider5 />
        <CustomSlider6 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-neutral-950 h-[1264px] left-[1851px] top-0 w-[340px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[1264px] items-start overflow-clip pl-px pr-0 py-0 relative rounded-[inherit] w-[340px]">
        <Container4 />
        <Container5 />
        <Container46 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

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

function Container48() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[-6px] size-[12px] top-[-6px]" data-name="Container" />;
}

function Container49() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[594px] size-[12px] top-[-6px]" data-name="Container" />;
}

function Container50() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[-6px] size-[12px] top-[594px]" data-name="Container" />;
}

function Container51() {
  return <div className="absolute bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.6)] border-solid left-[594px] size-[12px] top-[594px]" data-name="Container" />;
}

function Container52() {
  return (
    <div className="absolute left-[625.5px] size-[600px] top-[332px]" data-name="Container">
      <Canvas />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[1264px] left-0 overflow-clip top-0 w-[1851px]" data-name="Container" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0) 0%)" }}>
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[2191px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full overflow-clip relative rounded-[inherit] w-[2191px]">
        <Container47 />
        <Container53 />
      </div>
    </div>
  );
}

export default function HalftoneImageGenerator() {
  return (
    <div className="bg-neutral-950 content-stretch flex flex-col items-start relative size-full" data-name="Halftone Image Generator">
      <Container3 />
      <Container54 />
    </div>
  );
}