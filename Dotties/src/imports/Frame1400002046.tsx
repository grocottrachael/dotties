function RadioStacked() {
  return (
    <div className="basis-0 bg-black grow h-[31px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Radio - Stacked">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="h-[31px] w-full" />
      </div>
    </div>
  );
}

function RadioStacked1() {
  return (
    <div className="absolute bg-[#494949] box-border content-stretch flex gap-[10px] h-[31px] items-center justify-center left-0 px-[18px] py-[9px] rounded-bl-[8px] rounded-tl-[8px] top-0 w-[88px]" data-name="Radio - Stacked">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.8)] text-center text-nowrap tracking-[-0.001px]">
        <p className="leading-[1.33] whitespace-pre">Line thickness</p>
      </div>
      <div className="absolute flex h-[31px] items-center justify-center left-[84px] top-0 w-[9px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-white h-[31px] rounded-[30px] w-[9px]" />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full">
      <RadioStacked />
      <RadioStacked1 />
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[231px] not-italic text-[10px] text-center text-nowrap text-white top-[15.5px] tracking-[-0.001px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[1.33] whitespace-pre">10</p>
      </div>
    </div>
  );
}