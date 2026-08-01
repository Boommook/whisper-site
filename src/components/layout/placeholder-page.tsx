import { PageHeader } from "@/components/layout/page-header";
import { PlaceholderNotice } from "@/components/layout/placeholder-notice";
import { Section } from "@/components/layout/section";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage(props: PlaceholderPageProps) {
  return (
    <>
      <PageHeader {...props} />
      <Section>
        <PlaceholderNotice />
      </Section>
    </>
  );
}
