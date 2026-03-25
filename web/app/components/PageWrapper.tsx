import GoBack from "./GoBack";

export default function PageWrapper({
  children,
  title,
  showGoBack = true,
  actions,
}: {
  children?: React.ReactNode;
  title?: string;
  showGoBack?: boolean;
  actions?: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-4">
      {showGoBack ? <GoBack /> : null}
      <div className="flex flex-row justify-between items-center mb-4">
        {title ? <h3 className="text-2xl font-bold">{title}</h3> : null}
        {actions}
      </div>
      {children}
    </div>
  );
}
