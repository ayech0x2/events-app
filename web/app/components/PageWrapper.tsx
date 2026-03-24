import GoBack from "./GoBack";

export default function PageWrapper({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="container mx-auto px-4 py-4">
      <GoBack />
      {title ? <h3 className="text-2xl font-bold mb-4">{title}</h3> : null}
      {children}
    </div>
  );
}
