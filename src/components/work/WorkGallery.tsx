import { WorkSegment } from "@/components/work/WorkSegment";
import { WORK_SEGMENTS } from "@/data/work-segments";

export function WorkGallery() {
  return (
    <>
      {WORK_SEGMENTS.map((segment) => (
        <WorkSegment key={segment.slug} segment={segment} />
      ))}
    </>
  );
}
