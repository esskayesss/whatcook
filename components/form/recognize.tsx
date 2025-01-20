'use client'

import fuzzysort from "fuzzysort";
import { ingredients as indexedIngredients } from "@/lib/recipes";
import { CrossIcon } from "../icons/cross";
import Image from 'next/image'
import { MdiCameraRetakeOutline } from "../icons/retake";
import { PhBrainDuotone } from "../icons/brain";
import { useEffect, useState } from "react";
import { addIngredientsFromImage } from "@/lib/form";
import { CheckedIcon } from "../icons/checked";

interface RecognizeImageProps {
  selector: (items: string[]) => void;
  clearImage: () => void;
  src: string;
  retake: () => void;
}

export const RecognizeImageModal: React.FC<RecognizeImageProps> = ({ src, clearImage, retake, selector }: RecognizeImageProps) => {
  const url = src || '/art.webp'
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [recognizedIngredients, setRecognizedIngredients] = useState<Set<string> | null>(null)

  const submitImage = async () => {
    setLoading(true)
    try {
      const ingredients_str = (await addIngredientsFromImage(url))[0].message.content || ''
      const ingredients = JSON.parse(ingredients_str)['ingredients']
      // const ingredients = ['cottage cheese', 'chicken breast', 'egg', 'mayonnaise', 'parsley']

      const matchedIngredients: Array<string> = [] 
      ingredients.forEach((value: string) => {
        const result =  fuzzysort.go(value, indexedIngredients, {limit: 1})
        if(result[0]){
          if(result[0].target) matchedIngredients.push(result[0].target)
        }
      })
      setRecognizedIngredients(new Set(matchedIngredients))
    } catch (e: any) {
      setError(e.toString())
    }
    setLoading(false)
  }

  const removeItem = (value: string) => {
    setRecognizedIngredients((prevValue) => {
      const val = new Set(prevValue)
      val.delete(value)
      return val
    })
  }

  const addIngredients = () => {
    selector(Array.from(recognizedIngredients || []))
    clearImage()
  }

  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex z-50 backdrop-blur-sm items-center justify-center">
      <div className="max-w-[600px] h-fit w-full p-8 bg-white border border-blue flex flex-col gap-4 m-2">
        <div className="flex justify-between items-center">
          <h1 className="font-garamond text-2xl font-semibold">Smart Recognize Modal</h1>
          <CrossIcon className="text-blue text-2xl hover:cursor-pointer" onClick={(_) => clearImage()} />
        </div>

        {recognizedIngredients ?
          <>
            <div className="flex flex-col gap-2">
              <p className="text-base">
                {recognizedIngredients.size > 0 ? 'We detected the following ingredients:' : 'Found nothing in the image :('}
              </p>
              <div className="flex flex-wrap gap-2">
                {Array.from(recognizedIngredients).map((value, index) => {
                  return (
                    <div key={index} className="border border-green px-4 py-1 rounded-full text-green flex items-center gap-2"> 
                      <span>{value}</span> 
                      <CrossIcon className="text-base text-black hover:cursor-pointer" onClick={(_) => removeItem(value)} />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="text-xs text-gray">
              <p>Note:</p>
              <p>Only ingredients that have matching recipes in our database will be added. If an ingredient isn’t recognized or doesn’t have a recipe, it won’t be included. Don’t worry—we’re constantly expanding our recipe collection!
              </p>
            </div>
            {recognizedIngredients.size > 0 ? 
              <button className="ml-auto flex items-center justify-center *:whitespace-nowrap border-green hover:bg-green/20" onClick={(_) => addIngredients()}> 
                <CheckedIcon className="text-lg text-green" />
                <span>Confirm</span>
              </button> :
              <button className="ml-auto flex items-center justify-center *:whitespace-nowrap border-gray hover:bg-gray/20" 
                onClick={(_) => {setRecognizedIngredients(null); retake()}} > 
                <MdiCameraRetakeOutline className="text-xl" />
                <span>Retake Image</span>
              </button>
            }
          </> :
          <>
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className={`flex-grow w-full bg-contain bg-center relative`}>
                <Image src={url} width={200} height={200} alt={'uploaded'} style={{objectFit: 'contain', width: "100%"}} 
                  className={`border-2 max-h-[50dvh]`} />
                {loading? 
                  <div className="w-full h-full absolute top-0 right-0 backdrop-blur-sm bg-gray/20 flex items-center justify-center"> 
                  </div> : null }
              </div>
              {error ? <span className="text-white bg-red w-fit px-2">{error}</span> : null}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="w-full flex items-center justify-center *:whitespace-nowrap" onClick={(_) => retake()} > 
                <MdiCameraRetakeOutline className="text-xl" />
                <span>Retake Image</span>
              </button>
              <button className="w-full flex items-center justify-center *:whitespace-nowrap" onClick={(_) => submitImage()}> 
                <PhBrainDuotone className="text-xl text-[#e4676d]" />
                <span>Find ingredients in picture</span>
              </button>
            </div>
          </>
        }
      </div>
    </div>
  )
}
