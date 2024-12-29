import Link from 'next/link'
import { Button } from '@/components/ui/button'
function Nav() {
    return (
        <nav className="flex items-center justify-between p-8 fixed top-0 left-0 right-0">
            <h1 className='text-2xl font-bold text-red-600'>
                logo
            </h1>
            <ul className='flex items-center gap-4 text-gray-400'>
                <li><Link className="hover:text-red-600" href="/">Home</Link></li>
                <li><Link className="hover:text-red-600" href="/">About</Link></li>
                <li><Link className="hover:text-red-600" href="/">Contact</Link></li>
            </ul>
            <Button
                className="bg-red-600 text-white hover:bg-red-700"
            >Login</Button>
        </nav>
    )
}

export default Nav
