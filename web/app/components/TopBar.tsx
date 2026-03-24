import Avatar from "./Avatar";

export default function TopBar() {
  return (
    <div
      className="flex items-center px-4 py-2 border-b border-gray-200 bg-gray-50"
      style={{ height: "72px" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="font-bold text-xl">LOGO</div> |
          <div className="text-sm">SLOGAN</div>
        </div>
        <Avatar />
      </div>
    </div>
  );
}
