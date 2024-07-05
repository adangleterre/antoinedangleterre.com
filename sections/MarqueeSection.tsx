"use client";

import SkillsBadge from "@/components/SkillsBadge";
import Marquee from "react-fast-marquee";

function MarqueeSection({}) {
  return (
    <div className="flex flex-col">
      <div className="block dark:hidden">
        <Marquee
          speed={15}
          gradient
          gradientColor="#DFECFB"
          gradientWidth={50}
          autoFill
        >
          <SkillsBadge />
        </Marquee>
        <Marquee
          speed={15}
          gradient
          gradientColor="#DFECFB"
          gradientWidth={50}
          autoFill
          direction="right"
        >
          <SkillsBadge />
        </Marquee>
      </div>
      <div className="hidden dark:block">
        <Marquee
          gradient
          speed={15}
          gradientColor="#041121"
          gradientWidth={50}
          autoFill
        >
          <SkillsBadge />
        </Marquee>
        <Marquee
          autoFill
          speed={15}
          gradient
          gradientColor="#041121"
          gradientWidth={50}
          direction="right"
        >
          <SkillsBadge />
        </Marquee>
      </div>
    </div>
  );
}

export default MarqueeSection;
