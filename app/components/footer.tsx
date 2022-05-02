import { GitHub } from './github';
import { Link } from './link';

export function Footer() {
  return (
    <div className="relative z-20 mt-6 border-t border-gray-200 py-6 md:mt-4 md:py-4">
      <footer className="mx-auto max-w-7xl px-2 lg:px-12">
        <div className="flex items-center justify-between">
          <p>
            Docs Starter by{' '}
            <Link href="https://graphcms.com" className="text-indigo-700">
              GraphCMS
            </Link>
          </p>

          <Link
            href="https://github.com/graphcms"
            className="text-gray-500 hover:text-indigo-700"
          >
            <GitHub className="h-7 w-7" />
          </Link>
          <div>
            <Link
              href="https://graphcms.com/support"
              className="text-gray-500 hover:text-indigo-700"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
