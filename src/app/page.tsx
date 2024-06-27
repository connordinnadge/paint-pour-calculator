import PaintCalculator from '@/components/PaintCalculator'
import Image from 'next/image'
import bgImage from '../../public/images/paint-pour.jpg'

export default function HomePage() {
    return (
        <main>
            <section className='relative flex h-[100vh] w-full flex-col items-center justify-center px-3 py-5 text-center'>
                <Image
                    src={bgImage}
                    alt='Acrylic Pour Paint Calculator'
                    layout='fill'
                    objectFit='cover'
                    className='z-0'
                    priority={true}
                />
                <h1>Acrylic Pour Pain Calculator</h1>
                <p>Some words about it</p>
                <PaintCalculator />
            </section>
        </main>
    )
}
