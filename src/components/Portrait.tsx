import Image from "next/image";
import { MapPin } from "lucide-react";
import { site } from "@/data/site";

export function Portrait({ priority = false, caption = true }: { priority?: boolean; caption?: boolean }) {
  const [city, ...rest] = site.location.split(" · ");
  return (
    <figure className="portrait">
      <div className="duo">
        <Image
          src="/abdelrahman.jpg" width={400} height={400} priority={priority}
          alt="Portrait of Abdelrahman El-Sherif: a bearded man with glasses and curly dark hair, in a dark shirt, hands in his pockets"
        />
      </div>
      {caption && (
        <figcaption className="muted flex flex-wrap items-center gap-x-3 px-2 pt-2 pb-1 text-xs">
          <span className="flex items-center gap-1.5"><MapPin size={12} aria-hidden />{city}</span>
          {rest.map((r) => <span key={r}>{r}</span>)}
        </figcaption>
      )}
    </figure>
  );
}
