'use client'

import { ChangeEvent, useRef, useState } from "react";
import { CameraIcon } from "@/components/icons/camera";
import { CheckedIcon } from "@/components/icons/checked";
import { UncheckedIcon } from "@/components/icons/unchecked";
import { CrossIcon } from "@/components/icons/cross";
import { DropSelect } from "./select";
import Link from "next/link";
import { RecognizeImageModal } from "./recognize";


interface FormProps  {
  ingredients: Array<string>;
}

export const IngredientsForm: React.FC<FormProps> = ({ingredients}: FormProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [ingredientOptions, setIngredientOptions] = useState<Array<string>>(ingredients);
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);
  const [showVegetarian, setShowVegetarian] = useState<boolean>(false);
  const [showGlutenFree, setShowGlutenFree] = useState<boolean>(false);
  const [showGuiltFree, setShowGuiltFree] = useState<boolean>(false);

  const [imageURL, setImageURL] = useState<string>('')

  const selectOptionByIdx = (index: number) => {
    setSelectedOptions((prevSelected) => {
      return [...prevSelected, ingredientOptions[index]]
    })
    setIngredientOptions((prevOptions) => {
      return [...prevOptions.slice(0, index), ...prevOptions.slice(index + 1)]
    })
  };

  const selectOptions = (items: string[]) => {
    const selectedAsSet = new Set(selectedOptions)
    const optionsAsSet = new Set(ingredientOptions)
    items.forEach((item) => {
        selectedAsSet.add(item)
        optionsAsSet.delete(item)
    })

    setSelectedOptions(Array.from(selectedAsSet))
    setIngredientOptions(Array.from(optionsAsSet))
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (e.g., JPEG, PNG).');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Url = e.target?.result as string;
        setImageURL(base64Url)
      };

      reader.readAsDataURL(file);
    }
  };

  const unselectOption = (index: number) => {
    setIngredientOptions((prevOptions) =>  [selectedOptions[index], ...prevOptions])
    setSelectedOptions((prevSelected) => [...prevSelected.slice(0, index), ...prevSelected.slice(index + 1)])
  }

  const clearImage = () => {
    if (fileInputRef.current)
      fileInputRef.current.value = ''
    setImageURL('')
  }

  return (
    <>
    {imageURL ?
      <RecognizeImageModal selector={selectOptions} src={imageURL} clearImage={clearImage} retake={() => fileInputRef.current?.click()} /> :
      null
    }
    <div className="flex flex-col gap-0 pt-4" id="form" >
      <label>Enter the Ingredients:</label>
      <DropSelect selectOption={selectOptionByIdx} options={ingredientOptions} />
      <div className="flex gap-2.5 w-full items-center py-2">
        <div className="hover:cursor-pointer items-center flex gap-0.5" onClick={(_) =>
          setShowVegetarian(!showVegetarian)} >
          {showVegetarian ? 
          <CheckedIcon />
          :
          <UncheckedIcon />
          }
          <span>Vegetarian</span>
        </div>
        <div className="hover:cursor-pointer items-center flex gap-0.5" onClick={(_) =>
          setShowGlutenFree(!showGlutenFree)} >
          {showGlutenFree ? 
          <CheckedIcon />
          :
          <UncheckedIcon />
          }
          <span>Gluten Free</span>
        </div>
        <div className="hover:cursor-pointer items-center flex gap-0.5" onClick={(_) =>
          setShowGuiltFree(!showGuiltFree)} >
          {showGuiltFree ? 
          <CheckedIcon />
          :
          <UncheckedIcon />
          }
          <span>Guilt Free</span>
        </div>
      </div>
    </div>
    <span className="w-full font-garamond text-2xl font-semibold text-center">or</span>
    <div className="flex flex-col gap-0.5 align-center justify-center py-4">
      <button onClick={(_) => {fileInputRef.current?.click()}} className="mx-auto"> 
        <CameraIcon className="text-xl" />
        <span >Let us detect the ingredients</span>
      </button>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*;capture=camera" 
        style={{ display: 'none' }} />
    </div>
    <div className={`flex flex-col gap-2 ${selectedOptions.length == 0 ? 'hidden':'visible'}`}>
    <span>Finding you something fun using...</span>
    <div className="flex flex-wrap gap-x-2.5 gap-y-1">
      {selectedOptions.map((value, index) => {
      return (
      <span className="px-3 py-0.5 rounded-full border border-green text-green capitalize flex gap-2 items-center" key={index}>
        {value}
        <CrossIcon className="text-md text-black hover:cursor-pointer" onClick={(_e) =>
        unselectOption(index)} />
      </span>
      )
      })}
    </div>
    <div className="flex w-full items-center justify-center py-4">
      <Link href={{pathname: '/search', query: { showVegetarian, showGlutenFree, showGuiltFree, 'ingredients': selectedOptions.sort().join('-').replaceAll(' ', '_')}}}>
        <button > 
          <span>Find Recipes Now</span>
        </button>
      </Link>
    </div>
    </div>
    </>
  )

}

