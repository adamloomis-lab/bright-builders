import ServiceLanding from "@/components/ServiceLanding";
import NotFound from "@/pages/NotFound";
import { SERVICE_LANDINGS } from "@/lib/serviceLandings";

export default function ServiceLandingPage({ slug }: { slug: string }) {
  const config = SERVICE_LANDINGS[slug];
  if (!config) return <NotFound />;
  return <ServiceLanding config={config} />;
}
