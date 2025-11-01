/**
 * This layout is for auth pages only
 * as I mention layout and page and reserved keyworks that next js uses for its own purpose
 *
 */

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col items-center w-full ">{children}</div>
  );
}
