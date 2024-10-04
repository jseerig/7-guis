type ContentWrapperProps = {
  title: string;
  children: React.ReactNode;
};

export function ContentWrapper({ title, children }: ContentWrapperProps) {
  return (
    <div className='container mx-auto my-8 flex min-h-screen flex-col gap-12'>
      <h1 className='text-center text-6xl font-bold'>{title}</h1>
      {children}
    </div>
  );
}
