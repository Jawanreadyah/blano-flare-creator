import React from 'react';
import { MarqueeAnimation } from "@/components/ui/marquee-animation";

function MarqueeDemo() {
  return (
    <div className="flex flex-col gap-4">
      <MarqueeAnimation
        direction="left"
        baseVelocity={-3}
        className="bg-hurricane-red/10 text-white py-2"
      >
        Zeal IT Events • Premium Event Management
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-3}
        className="bg-white/5 text-white py-2"
      >
        Corporate Events • Live Concerts • Social Gatherings
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="left"
        baseVelocity={-4}
        className="bg-black/40 text-hurricane-red py-2"
      >
        Innovative • Creative • Professional • Reliable
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-2}
        className="bg-white/5 text-white py-2"
      >
        8+ Years Experience • 1200+ Events • 450+ Clients
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="left"
        baseVelocity={-3}
        className="bg-hurricane-red/5 text-white py-2"
      >
        Qatar's Leading Event Management Company
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-4}
        className="bg-white/5 text-white py-2"
      >
        Weddings • Concerts • Corporate • Social Events
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="left"
        baseVelocity={-3}
        className="bg-black/40 text-hurricane-red py-2"
      >
        Creating Memories • Delivering Excellence
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-2}
        className="bg-white/5 text-white py-2"
      >
        Technical Production • Sound • Lighting • Stage
      </MarqueeAnimation>
    </div>
  );
}

export default MarqueeDemo;