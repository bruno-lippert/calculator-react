import React from 'react'
import './calculator.css'
import { useState } from 'react'

export default function Calculator() {
    const [calc, setCalc] = useState(0)
    const [operator, setOperator] = useState()
    const [calc2, setCalc2] = useState()

    function inputValue(e) {
        if (calc === 0) {
            setCalc(e.target.value)
        } else {
            setCalc(calc + e.target.value)
        }

    }

    function clean() {
        setCalc(0)
    }

    function changeSign() {
        if (calc >= 0) {
            setCalc(- + calc)
        } else if (calc < 0) {
            setCalc(Math.abs(calc))
        }
    }

    function calculation() { //performs the calculations
        if (operator == 'x') {
            setCalc(parseFloat(calc2) * parseFloat(calc))
        }
        else if (operator == '/') {
            setCalc(parseFloat(calc2) / parseFloat(calc))
        }
        else if (operator == '-') {
            setCalc(parseFloat(calc2) - parseFloat(calc))
        }
        else if (operator == '+') {
            setCalc(parseFloat(calc2) + parseFloat(calc))
        }
        else if (operator == '%') {
            setCalc((parseFloat(calc2) * parseFloat(calc)) / 100)
        }
    }

    function operatorPressed(e) {
        setCalc2(calc)
        var oper = e.target.value
        setOperator(oper)
        clean()
    }


    return (
        <div className='container'>
            <div className="content-container">
                <div className='display'>
                    <h1 >{calc}</h1>
                </div>
                <div className='zero'>
                    <button className='btnDarkGray' onClick={inputValue} value='0'>0</button>
                </div>
                <div className='one'>
                    <button className='btnDarkGray' onClick={inputValue} value='1'>1</button>
                </div>
                <div className='two'>
                    <button className='btnDarkGray' onClick={inputValue} value='2'>2</button>
                </div>
                <div className='three'>
                    <button className='btnDarkGray' onClick={inputValue} value='3'>3</button>
                </div>
                <div className='four'>
                    <button className='btnDarkGray' onClick={inputValue} value='4'>4</button>
                </div>
                <div className='five'>
                    <button className='btnDarkGray' onClick={inputValue} value='5'>5</button>
                </div>
                <div className='six'>
                    <button className='btnDarkGray' onClick={inputValue} value='6'>6</button>
                </div>
                <div className='seven'>
                    <button className='btnDarkGray' onClick={inputValue} value='7'>7</button>
                </div>
                <div className='eight'>
                    <button className='btnDarkGray' onClick={inputValue} value='8'>8</button>
                </div>
                <div className='nine'>
                    <button className='btnDarkGray' onClick={inputValue} value='9'>9</button>
                </div>
                <div className='clear'>
                    <button className='btnLightGray' onClick={clean}>AC</button>
                </div>
                <div className='changeSign'>
                    <button className='btnLightGray' onClick={changeSign}>+/-</button>
                </div>
                <div className='percentage'>
                    <button className='btnLightGray' onClick={operatorPressed} value='%'>%</button>
                </div>
                <div className='division'>
                    <button className='btnOrange' onClick={operatorPressed} value='/'>/</button>
                </div>
                <div className='multiplication'>
                    <button className='btnOrange' onClick={operatorPressed} value='x'>X</button>
                </div>
                <div className='subtraction'>
                    <button className='btnOrange' onClick={operatorPressed} value='-'>-</button>
                </div>
                <div className='add'>
                    <button className='btnOrange' onClick={operatorPressed} value='+'>+</button>
                </div>
                <div className='result'>
                    <button className='btnOrange' onClick={calculation}>=</button>
                </div>
                <div className='comma'>
                    <button className='btnDarkGray' onClick={inputValue} value='.'>.</button>
                </div>
            </div>
        </div>
    )
}
