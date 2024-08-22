type ContentWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export default function ContentWrapper({
  title,
  children,
}: ContentWrapperProps) {
  return (
    <div className='flex flex-col gap-12 container min-h-screen mx-auto my-8'>
      <h1 className='text-6xl font-bold text-center'>{title}</h1>
      {children}
    </div>
  );
}
