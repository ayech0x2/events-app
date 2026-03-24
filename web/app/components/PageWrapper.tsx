import GoBack from "./GoBack";

export default function PageWrapper({
  children,
  title,
  showGoBack = true,
}: {
  children?: React.ReactNode;
  title?: string;
  showGoBack?: boolean;
}) {
  return (
    <div className="container mx-auto px-4 py-4">
      {showGoBack ? <GoBack /> : null}
      {title ? <h3 className="text-2xl font-bold mb-4">{title}</h3> : null}
      {children}
    </div>
  );
}
