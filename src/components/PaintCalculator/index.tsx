'use client'
import type { NextComponentType, NextPageContext } from 'next'
import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const Index: NextComponentType<NextPageContext> = () => {
    const [unitsMetric, setUnitsMetric] = useState(true)
    const [consistency, setConsistency] = useState('medium')
    const [canvasShape, setCanvasShape] = useState('squareOrRectangle')
    const [canvasWidth, setCanvasWidth] = useState(0)
    const [canvasDiameter, setCanvasDiameter] = useState(0)
    const [canvasHeight, setCanvasHeight] = useState(0)
    const [canvasDepth, setCanvasDepth] = useState(0)
    const [totalPaintneeded, setTotalPaintNeeded] = useState(0)

    function calculatePaintNeeded() {
        let paintConsistency = 0
        if (consistency === 'thin') {
            paintConsistency = 0.8
        }
        if (consistency === 'medium') {
            paintConsistency = 1
        }
        if (consistency === 'thick') {
            paintConsistency = 1.2
        }
        let totalPaint = 0
        if (canvasShape === 'squareOrRectangle') {
            const area = canvasWidth * canvasHeight
            const sideArea = 2 * canvasDepth * (canvasWidth + canvasHeight)
            const totalArea = (area + sideArea) * paintConsistency
            totalPaint = totalArea / (unitsMetric ? 6.45 : 25)
        }
        if (canvasShape === 'circle') {
            const area = Math.PI * Math.pow(canvasDiameter / 2, 2) * canvasDepth
            const circumference = Math.PI * canvasDiameter
            const sideArea = circumference * canvasDepth
            const totalArea = (area + sideArea) * paintConsistency
            totalPaint = totalArea / (unitsMetric ? 6.45 : 25)
        }
        if (canvasShape === 'triangle') {
            const area = (canvasWidth * canvasWidth) / 2
            const sideArea = 3 * (canvasWidth * canvasDepth)
            const totalArea = (area + sideArea) * paintConsistency
            totalPaint = totalArea / (unitsMetric ? 6.45 : 25)
        }
        if (canvasShape === 'hexagon') {
            const area = (3 * Math.sqrt(3) * Math.pow(canvasDiameter, 2)) / 2
            const perimeter = 6 * canvasDiameter
            const sideArea = perimeter * canvasDepth
            const totalArea = (area + sideArea) * paintConsistency
            totalPaint = totalArea / (unitsMetric ? 6.45 : 25)
        }
        const roundedToTwoDecimals = parseFloat(totalPaint.toFixed(1))
        setTotalPaintNeeded(roundedToTwoDecimals)
    }

    useEffect(() => {
        calculatePaintNeeded()
    }, [canvasShape, canvasWidth, canvasHeight, canvasDiameter, canvasDepth, consistency])

    return (
        <div className='flex w-full flex-col gap-5'>
            <div>
                <p className='mb-2 ml-2 text-left font-bold'>Pour Consistency:</p>
                <TooltipProvider>
                    <div className='mb-3 grid w-full grid-cols-3'>
                        <Tooltip>
                            <TooltipTrigger>
                                <button
                                    className={`${consistency === 'thin' ? 'bg-purple-600 text-white' : 'bg-purple-400 text-white'} w-full rounded-l-xl px-5 py-2 font-bold`}
                                    onClick={() => setConsistency('thin')}
                                >
                                    Thin
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Fluid and smooth. Ideal for swipes and cells.</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <button
                                    className={`${consistency === 'medium' ? 'bg-purple-600 text-white' : 'bg-purple-400 text-white'}  w-full px-5 py-2 font-bold`}
                                    onClick={() => setConsistency('medium')}
                                >
                                    Medium
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Balanced. Perfect for dirty pours and flip cups..</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <button
                                    className={`${consistency === 'thick' ? 'bg-purple-600 text-white' : '  bg-purple-400 text-white'}  w-full rounded-r-xl px-5 py-2 font-bold`}
                                    onClick={() => setConsistency('thick')}
                                >
                                    Thick
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Slow-moving. Suitable for controlled pours.</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
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
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasWidth}
                        onChange={(e) => setCanvasWidth(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Height ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasHeight}
                        onChange={(e) => setCanvasHeight(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            {canvasShape === 'circle' && (
                <div>
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasDiameter}
                        onChange={(e) => setCanvasDiameter(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            {canvasShape === 'triangle' && (
                <div>
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasWidth}
                        onChange={(e) => setCanvasWidth(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            {canvasShape === 'hexagon' && (
                <div>
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Width ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasDiameter}
                        onChange={(e) => setCanvasDiameter(parseFloat(e.target.value))}
                    />
                    <p className='mb-2 ml-2 text-left font-bold'>Canvas Depth ({unitsMetric ? 'cm' : 'inches'})</p>
                    <Input
                        type='number'
                        value={canvasDepth}
                        onChange={(e) => setCanvasDepth(parseFloat(e.target.value))}
                    />
                </div>
            )}
            <p className='font-bold uppercase'>Paint Required</p>
            <p className='text-[5rem] font-bold leading-[4rem]'>{totalPaintneeded}</p>
            <p className='font-bold uppercase'>{unitsMetric ? 'grams' : 'ounces'}</p>
        </div>
    )
}

export default Index
