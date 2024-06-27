'use client'
import type { NextComponentType, NextPageContext } from 'next'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface Colour {
    name: string
    hex: string
    percentage: number
    paintNeeded: number
}

const Index: NextComponentType<NextPageContext> = () => {
    const [unitsMetric, setUnitsMetric] = useState(true)
    const [canvasShape, setCanvasShape] = useState('squareOrRectangle')
    const [canvasWidth, setCanvasWidth] = useState(0)
    const [canvasDiameter, setCanvasDiameter] = useState(0)
    const [canvasHeight, setCanvasHeight] = useState(0)
    const [canvasDepth, setCanvasDepth] = useState(0)
    const [totalPaintneeded, setTotalPaintNeeded] = useState(0)

    function calculatePaintNeeded() {
        let totalPaint = 0
        if (canvasShape === 'squareOrRectangle') {
            const area = canvasWidth * canvasHeight
            const sideArea = 2 * canvasDepth * (canvasWidth + canvasHeight)
            const totalArea = area + sideArea
            totalPaint = totalArea / 25
        }
        if (canvasShape === 'circle') {
            const area = Math.PI * Math.pow(canvasDiameter / 2, 2) * canvasDepth
            const circumference = Math.PI * canvasDiameter
            const sideArea = circumference * canvasDepth
            const totalArea = area + sideArea
            totalPaint = totalArea / 25
        }
        if (canvasShape === 'triangle') {
            const area = (canvasWidth * canvasWidth) / 2
            const sideArea = 3 * (canvasWidth * canvasDepth)
            const totalArea = area + sideArea
            totalPaint = totalArea / 25
        }
        if (canvasShape === 'hexagon') {
            const area = (3 * Math.sqrt(3) * Math.pow(canvasDiameter, 2)) / 2
            const perimeter = 6 * canvasDiameter
            const sidesArea = perimeter * canvasDepth
            const totalArea = area + sidesArea
            totalPaint = totalArea / 25
        }
        const roundedToTwoDecimals = parseFloat(totalPaint.toFixed(2))
        setTotalPaintNeeded(roundedToTwoDecimals)
    }

    useEffect(() => {
        calculatePaintNeeded()
    }, [canvasShape, canvasWidth, canvasHeight, canvasDiameter, canvasDepth])

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <p className='mb-2 ml-2 text-left font-bold'>Canvas Shape:</p>
                <Select value={canvasShape} onValueChange={setCanvasShape}>
                    <SelectTrigger>
                        <SelectValue placeholder='Select a canvas shape' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='squareOrRectangle'>Square / Rectangle</SelectItem>
                        <SelectItem value='circle'>Circle</SelectItem>
                        <SelectItem value='triangle'>Triangle</SelectItem>
                        <SelectItem value='hexagon'>Hexagon</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {canvasShape === 'squareOrRectangle' && (
                <div>
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width (inches)</p>
                    <Input
                        type='number'
                        value={canvasWidth}
                        onChange={(e) => setCanvasWidth(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Height (inches)</p>
                    <Input
                        type='number'
                        value={canvasHeight}
                        onChange={(e) => setCanvasHeight(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth (inches)</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            {canvasShape === 'circle' && (
                <div>
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width (inches)</p>
                    <Input
                        type='number'
                        value={canvasDiameter}
                        onChange={(e) => setCanvasDiameter(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth (inches)</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            {canvasShape === 'triangle' && (
                <div>
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width (inches)</p>
                    <Input
                        type='number'
                        value={canvasWidth}
                        onChange={(e) => setCanvasWidth(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth (inches)</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            {canvasShape === 'hexagon' && (
                <div>
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width (inches)</p>
                    <Input
                        type='number'
                        value={canvasDiameter}
                        onChange={(e) => setCanvasDiameter(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth (inches)</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            <p>Paint needed:</p>
            <p className='text-4xl font-bold leading-[1rem]'>{totalPaintneeded}</p>
            <p>ounces</p>
        </div>
    )
}

export default Index
