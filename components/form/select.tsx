'use client'

import fuzzysort from "fuzzysort";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { DropdownIcon } from "@/components/icons/dropdown";

interface DropSelectProps {
  selectOption: (index: number) => void;
  options: Array<string>;
}

export const DropSelect: React.FC<DropSelectProps> = ({selectOption, options: _options}: DropSelectProps) => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLSpanElement>(null);
  const inputBoxRef = useRef<HTMLInputElement | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  var options = _options.map((value, index) => {
    return {value, index}
  })
  const [ingredientOptions, setIngredientOptions] = useState<Array<{value: string; index: number}>>(options)

  useEffect(() => {
    options = _options.map((value, index) => {
      return {value, index}
    })
    setIngredientOptions(options)
  }, [_options])

  useEffect(() => {
    if (optionsRef.current && selectedRef.current) {
      const scrollableRect = optionsRef.current.getBoundingClientRect()
      const targetRect = selectedRef.current.getBoundingClientRect()

      if (targetRect.top < scrollableRect.top) {
        optionsRef.current.scrollTo({
          top: targetRect.top - scrollableRect.top + optionsRef.current.scrollTop
        })
      } else if (targetRect.bottom > scrollableRect.bottom) {
        optionsRef.current.scrollTo({
          top: targetRect.bottom - scrollableRect.bottom + optionsRef.current.scrollTop
        })
      }
    }
  }, [selectedIdx])

  const handleKeyInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch(event.code) {
      case 'Enter':
        if(ingredientOptions.length === 0) return;
        if (selectedIdx === null){ 
          inputBoxRef.current?.blur();
          break;
        }
        if(inputBoxRef && inputBoxRef.current) inputBoxRef.current.value = "";
        selectOption(ingredientOptions[selectedIdx].index)
        break;
      case 'ArrowUp':
        event.preventDefault()
        setSelectedIdx(((selectedIdx ?? 0) - 1 + ingredientOptions.length) % ingredientOptions.length)
        break;
      case 'ArrowDown':
        if (selectedIdx === null) setSelectedIdx(0);
        else setSelectedIdx((selectedIdx + 1) % ingredientOptions.length)
        event.preventDefault()
        break
      case 'Escape':
        if(inputBoxRef.current) inputBoxRef.current.blur()
        break
      default:
        break
    }
  }

  const rescore = (event: ChangeEvent<HTMLInputElement>) => {
    setIngredientOptions(fuzzysort.go(event.target.value, options, {key: 'value', all: true}).map(element => element.obj))
    setSelectedIdx(ingredientOptions ? 0 : null);
  }

  return (
    <div className="relative flex items-center">
      <input 
        type="text" onFocus={(_e) => setSelectedIdx(null)}
        onKeyDown={handleKeyInput}
        ref={inputBoxRef}
        className="peer px-[5px] py-2 text-gray focus:outline-0 placeholder:text-cream bg-white border-b border-blue w-full" placeholder="eg. milk, eggs, spinach..." onChange={rescore} />
      <DropdownIcon className="text-blue right-0 absolute top-0 h-full pointer-events-none" />
      <div className="max-h-[30dvh] bg-white ease-in-out overflow-x-none overflow-y-scroll absolute top-full left-0 border border-blue w-full opacity-0 transition-all duration-200 peer-focus:z-10 peer-focus:opacity-100 -z-10 mt-1 flex flex-col"
        ref={optionsRef} >
        {[...ingredientOptions, {value: "None", index: -1}].map(({value, index}, idx) => {
          return (
            <span 
              id={selectedIdx === idx ? 'selectedOption':undefined}
              ref={selectedIdx === idx ? selectedRef : undefined}
              onClick={(_e) => selectOption(index)}
              className={`w-full px-4 py-2 capitalize ${selectedIdx == idx ? 'bg-blue text-white':''}`} 
              onMouseEnter={(_e) => setSelectedIdx(index)} 
              key={index} >
              {value}
            </span>
          )
        })}
      </div>
    </div>
  )
}
