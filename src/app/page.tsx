import PaintCalculator from '@/components/PaintCalculator'
import Image from 'next/image'
import bgImage from '../../public/images/paint-pour.jpg'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

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
                <div className='absolute left-0 top-0 h-[100vh] w-full bg-black bg-opacity-30'></div>
                <Card className='relative z-10 rounded-2xl '>
                    <CardHeader>
                        <h1 className='text-2xl font-bold'>Acrylic Pour Paint Calculator</h1>
                        <p>
                            Calculate the perfect paint mix for stunning acrylic pours. Enter your canvas size and
                            desired paint consistency to get started!
                        </p>
                    </CardHeader>
                    <CardContent>
                        <PaintCalculator />
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}
