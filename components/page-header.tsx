interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in gradient-text">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">{description}</p>
      )}
    </div>
  )
}
